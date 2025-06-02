export default function Texto(props) {
    return (
        <>
            <div className="my-4 flex justify-center flex-wrap max-w-[55%] items-center">
                <p className="
                text-center font-secondary
                md:text-lg lg:text-xl
                ">{props.texto}</p>
            </div>
        </>
    );
}