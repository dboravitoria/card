export default function WrapperBlur({ children }) {
    return (
        <>
            <div className="
                min-w-0
                max-w-[50%] max-h-[50%]
                rounded-full shadow-custom
                backdrop-blur-lg 
                border-1 border-primary/85
                dark:bg-white/10 dark:bg-secondary    
                aspect-square
                flex justify-center items-center  flex-row     
                hover:scale-105 transition-all duration-500 ease-in-out 
                hover:bg-secondary/10 dark:hover:bg-white/20    
            ">
                <div className="
                    rounded-full min-w-0                    
                "> 
                    {children}
                </div>
            </div>
        </>
    );
}