import React, { useState, useEffect, useReducer } from 'react'

interface FormButtonProps {
  onClick: EventHandler
  children: string
}

const FormButton: React.FC<FormButtonProps> = ({ onClick, children }) => {
  return (
    <button className="
      w-full rounded shadow-white
      dark:shadow-black hover:shadow-inner
      text-xl p-2
    " onClick={onClick}>
      {children}
    </button>
  )
}

export interface IFormStepState {
  field: string
  value: string
  type?: string
  validation?: RegExp
  errorMessage?: string
}

export interface IFormReducerAction {
  type: string
  setter?: string
  value?: string
  steps?: IFormStepState[]
}

export interface IFormReducerState {
  step: number
  steps: IFormStepState[]
}

const reducer: React.Reducer<IFormReducerState, IFormReducerAction> = (state, action) => {
  const updateSteps = (step: IFormStepState) => {
    if (step.field === action.setter) {
      if (step.validation && !step.validation.test(action.value!))
        return { ...step, value: action.value!, errorMessage: 'Invalid input' }

      return { ...step, value: action.value!, errorMessage: undefined }
    }

    return { ...step, errorMessage: undefined }
  }

  let step = state.step
  let steps = state.steps

  switch (action.type) {
    case 'RESET':
      return { ...state, step: 0, steps: action.steps || steps }

    case 'FOCUS':
      steps[step].errorMessage = undefined
      return { ...state }

    case 'PREVIOUS':
      if (!steps[step].errorMessage) step--
      return { ...state, step, steps }

    case 'NEXT':
      steps = steps.map(updateSteps)
      if (!steps[step].errorMessage) step++
      return { ...state, step, steps }

    default:
      return state
  }
}

type EventHandler = React.FormEventHandler<HTMLFormElement> & React.MouseEventHandler<HTMLButtonElement>

interface FormProps {
  onCancel?: () => Promise<void> | void
  onSubmit: (credentials: IFormReducerState) => Promise<void>
  initialState: IFormReducerState
}

const FormMultiStep: React.FC<FormProps> = ({ onCancel, onSubmit, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const step = state.steps[state.step]

  const [inputValue, setInputValue] = useState<string>(step?.value)

  useEffect(() => dispatch({ type: 'RESET' }), [])

  useEffect(() => {
    if (state.step < 0) {
      dispatch({ type: 'RESET', steps: initialState.steps })
      return
    }

    if (state.step >= state.steps.length) {
      onSubmit ? onSubmit(state) : dispatch({ type: 'RESET', steps: initialState.steps })
      return
    }

    setInputValue(step.value)
  }, [step])

  const stepHandler: (type: string) => EventHandler = (type: string) => (
    e => {
      e.preventDefault()
      dispatch({
        type,
        setter: step.field,
        value: inputValue,
      })
    }
  )

  if (!step)
    return (<h1 className="w-full text-center text-2xl">Loading...</h1>)

  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="flex flex-col align-center justify-around gap-2 p-5">
      <label
        htmlFor={step.field}
        className="w-full text-2xl">
        {step.field}:
      </label>
      {step.type === 'textarea' ?
        <textarea
          id={step.field}
          onChange={e => setInputValue(e.target.value)}
          onFocus={() => dispatch({ type: 'FOCUS' })}
          value={inputValue}
          rows={5} cols={80}
          className={`
            h-full text-xl rounded-xl p-2
            ${step.errorMessage && 'border border-red-600'}
          `}
        /> : <input
          id={step.field}
          type={step.type || 'text'}
          onChange={e => setInputValue(e.target.value)}
          onFocus={() => dispatch({ type: 'FOCUS' })}
          value={inputValue}
          className={`
            h-full shadow-sm text-xl rounded-xl p-2
            ${step.errorMessage && 'border border-red-600'}
          `}
        />
      }

      {step.errorMessage && <p className="px-5 text-red-600 italic">
        {step.errorMessage}
      </p>}

      <div className="
        flex justify-between align-center
        flex-row-reverse gap-2 w-full">
        <FormButton onClick={stepHandler('NEXT')}>
          {state.step >= state.steps.length - 1 ? 'Send' : 'Next'}
        </FormButton>

        {state.step > 0 &&
          <FormButton onClick={stepHandler('PREVIOUS')}>
            Previous
          </FormButton>
        }

        {(state.step === 0 && onCancel) &&
          <FormButton onClick={() => onCancel()}>
            Cancel
          </FormButton>
        }
      </div>
    </form>
  )
}

export default FormMultiStep