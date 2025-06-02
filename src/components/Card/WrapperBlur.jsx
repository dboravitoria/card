export default function WrapperBlur({ children }) {
    return (
        <>
            <div className="
                min-w-0
                max-w-[50%] max-h-[50%]
                p-8 rounded-full shadow-custom
                backdrop-blur-lg bg-secondary/20 
                border-2 border-primary/85
                dark:bg-white/10 dark:bg-secondary    
                aspect-square
                flex justify-center items-center            
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