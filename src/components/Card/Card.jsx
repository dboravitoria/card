//Importação de Componentes
import WrapperBlur from "./WrapperBlur";
import Avatar from "../Elementos/Avatar";
import Titulo from "../Elementos/Título";
import Subtitulo from "../Elementos/Subtitulo";
import Texto from "../Elementos/Texto";


export default function Card(){
    return(
        <>
            <div className="
            dark:text-white dark:bg-secondary
            text-secondary bg-white
            font-primary flex flex-col items-center
            pt-32 min-h-screen
            sm:pt-20">
                <WrapperBlur>
                    <Avatar/>
                </WrapperBlur>
                <Titulo titulo={"Débora Vitória☕"}/>
                {/* <Subtitulo subtiulo={"Desenvolvedora Front-end..."}/> */}
                <h2 className="font-primary text-primary
                font-bold tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Desenvolvedora Front-end</h2>
                <Texto texto={"Te ajudo a se conectar com seu público através de experiências digitais incríveis🌟"}/>
            </div>
        </>
    );
}