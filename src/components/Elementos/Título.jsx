export default function Titulo(props) {
    return(
        <>
            <h1 className="
            font-secondary
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            my-8 font-semibold tracking-wide
            ">{props.titulo}</h1>
        </>
    );
}