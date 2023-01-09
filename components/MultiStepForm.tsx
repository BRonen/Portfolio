import React, { useState, useEffect, useReducer, Reducer, useCallback } from 'react'
import Loading from './Loading'

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

export interface FormStepState {
  field: string
  value: string
  type?: string
  validation?: RegExp
  error?: string
}

export interface FormReducerAction {
  type: string
  field?: string
  value?: string
  steps?: FormStepState[]
}

export interface FormReducerState {
  current: number
  steps: FormStepState[]
}

const stepsReducer: Reducer<FormStepState, FormReducerAction> = (state, action) => {
  if (state.field === action.field) {
    if (state.validation && !state.validation.test(action.value || ''))
      return { ...state, value: action.value || '', error: 'Invalid input' }
    
    return { ...state, value: action.value || '', error: undefined  }
  }

  return { ...state, error: undefined }
}

const reducer: Reducer<FormReducerState, FormReducerAction> = (state, action) => {
  let { current, steps } = state

  switch (action.type) {
    case 'RESET':
      return { current: 0, steps: action.steps || steps }
    
    case 'FOCUS':
      steps[current].error = undefined
      return { current, steps }

    case 'PREVIOUS':
      current--
      return { current, steps }

    case 'NEXT':
      if(current < steps.length)
        steps = steps.map(step => stepsReducer(step, action))

      if(!steps[current].error)
        current++

      return { current, steps }

    default:
      return state
  }
}

type EventHandler = React.FormEventHandler<HTMLFormElement> & React.MouseEventHandler<HTMLButtonElement>

interface FormProps {
  onCancel?: (state?: FormReducerState) => Promise<void> | void
  onSubmit?: (state: FormReducerState) => Promise<void> | void
  initialState: FormReducerState
}

const FormMultiStep: React.FC<FormProps> = ({ onCancel, onSubmit, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const step = state.steps[state.current]

  const [inputValue, setInputValue] = useState<string>(step?.value)

  const cancel = useCallback(
    () => onCancel? onCancel(state) : dispatch({ type: 'RESET', steps: initialState.steps }),
    [onCancel, state, initialState]
  )
  const next = useCallback(
    () => onSubmit? onSubmit(state) : dispatch({ type: 'RESET', steps: initialState.steps }),
    [onSubmit, state, initialState]
  )

  useEffect(() => dispatch({ type: 'RESET' }), [])

  useEffect(() => {
    if (state.current < 0) {
      cancel()
      return
    }

    if (state.current >= state.steps.length) {
      console.log('wdaadwwd')
      next()
      return
    }

    setInputValue(step.value)
  }, [state, step, cancel, next])

  const stepHandler: (type: string) => EventHandler = (type: string) => (
    e => {
      e.preventDefault()
      dispatch({
        type,
        field: step.field,
        value: inputValue,
      })
    }
  )

  if (!step)
    return <Loading className="mt-16"/>

  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="flex flex-col align-center justify-around gap-2 p-5"
    >
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
            ${step.error && 'border border-red-600'}
          `}
        /> : <input
          id={step.field}
          type={step.type || 'text'}
          onChange={e => setInputValue(e.target.value)}
          onFocus={() => dispatch({ type: 'FOCUS' })}
          value={inputValue}
          className={`
            h-full shadow-sm text-xl rounded-xl p-2
            ${step.error && 'border border-red-600'}
          `}
        />
      }

      {step.error && <p className="px-5 text-red-600 italic">
        {step.error}
      </p>}

      <div
        className="flex justify-between align-center flex-row-reverse gap-2 w-full"
      >
        <FormButton onClick={stepHandler('NEXT')}>
          {state.current === state.steps.length - 1 ? 'Send' : 'Next'}
        </FormButton>

        {state.current > 0 &&
          <FormButton onClick={stepHandler('PREVIOUS')}>
            Previous
          </FormButton>
        }

        {(state.current === 0 && onCancel) &&
          <FormButton onClick={() => onCancel()}>
            Cancel
          </FormButton>
        }
      </div>
    </form>
  )
}

export default FormMultiStep