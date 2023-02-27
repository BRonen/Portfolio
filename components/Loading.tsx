interface LoadingProps {
    className?: string
}

const Loading: React.FC<LoadingProps> = ({className}) => {
    return(<>
        <p className={`text-5xl mx-auto border-2 border-solid border-black dark:border-white ${className}`}></p>
        <style jsx>{`
            p {
                width: 3rem;
                aspect-ratio: 1;
                border-right: 0px;
                border-top: 0px;
                border-radius: 99999px;
                animation: loop 1.5s linear infinite;
            }

            @keyframes loop{
                0%{
                    transform: rotate(0deg);
                }
                100%{
                    transform: rotate(360deg);
                }
            }
        `}</style>
    </>)
}

export default Loading