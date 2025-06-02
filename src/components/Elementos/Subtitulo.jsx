export default function Subtitulo(props) {
    return (
        <>
            <div className="my-4">
                <h2 className="
                font-primary text-primary
                font-bold tracking-wide
                overflow-hidden 
                whitespace-nowrap 
                border-r-2 border-[#C12727] 
                animate-typing
                w-[0] sm:w-[20ch]
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                ">{props.subtiulo}</h2>
            </div>
        </>
    );
}