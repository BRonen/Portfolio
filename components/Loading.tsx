const Loading: React.FC = () => {
    return(<>
        <p className="text-5xl text-center">⧲</p>
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