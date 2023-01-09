interface LoadingProps {
    className?: string
}

const Loading: React.FC<LoadingProps> = ({className}) => {
    return(<>
        <p className={`text-5xl text-center ${className}`}>⧲</p>
        <style jsx>{`
            p {
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