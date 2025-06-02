export default function Button(props) {
    return (
        <button className="
        bg-white/20 
        font-primary text-primary
        font-bold tracking-wide sm:text-md md:text-lg lg:text-xl
        px-6 py-2 rounded-full
        mt-8 mb-8 border-1 border-primary/85
        shadow-custom backdrop-blur-lg
        dark:bg-white/10 dark:bg-secondary 
        hover:dark:bg-primary hover:dark:text-white hover:scale-105
        hover:bg-secondary hover:text-white
        hover:border-secondary
        transition-all duration-500 ease-in-out 
        dark:drop-shadow-[0_8px_12px_rgba(0,0,0,0.4)]
        bg-blend-overlay
        ">
            {props.botao}
        </button>
    );
}