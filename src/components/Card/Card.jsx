//Importação de Componentes
import WrapperBlur from "./WrapperBlur";
import Avatar from "../Elementos/Avatar";
import Titulo from "../Elementos/Título";
import Subtitulo from "../Elementos/Subtitulo";
import Texto from "../Elementos/Texto";
import Button from "../Elementos/Button";
import Icone from "../Elementos/Icone";
import Footer from "../Elementos/Footer";   
import { Toggle } from "../Elementos/Toggle";
//Importação de Ícones
import { FaFileCsv, FaSquareInstagram, FaSquareWhatsapp, FaLinkedin   } from "react-icons/fa6";

//Importação de Estilos
const estilizacaoIcones = "sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-14 lg:w-14 cursor-pointer hover:scale-105 transition-transform duration-300";


export default function Card(){
    return(
        <>
            <div className="
            dark:text-white dark:bg-gradient-to-b dark:from-blue-start dark:to-blue-end
            text-secondary bg-gradient-to-b from-light-start to-light-end
            font-primary flex flex-col items-center
            pt-32 min-h-fit 
            sm:pt-20">
                <Toggle/>
                <WrapperBlur>
                    <Avatar/>
                </WrapperBlur>
                <Titulo titulo={"Débora Vitória☕"}/>
                <Subtitulo subtiulo={"Desenvolvedora Front-end..."}/>
                <Texto texto={"Te ajudo a se conectar com seu público através de experiências digitais incríveis🌟"}/>
                <Button botao={"Ver Portifólio Completo"} />
                <Texto texto={"Saiba mais sobre mim:"}/>

                <div className="
                flex justify-center items-center flex-row
                gap-4 mt-6 mb-16
                sm:gap-6 md:gap-8 lg:gap-10
                ">
                    <Icone href={'#'}>
                        <FaFileCsv className={`${estilizacaoIcones}`}/>
                    </Icone>
                    <Icone href={'https://www.linkedin.com/in/deboravsilva/'}>
                        <FaLinkedin className={`${estilizacaoIcones}`} />
                    </Icone>
                    <Icone href={'www.whatsapp.com/+5521999999999'}>
                        <FaSquareWhatsapp className={`${estilizacaoIcones}`} />
                    </Icone>
                    <Icone href={'https://www.instagram.com/deboravitoria_silva?igsh=Y3o2dzMxd2M1MGFz'}>
                        <FaSquareInstagram className={`${estilizacaoIcones}`} />
                    </Icone>
                </div>
                <Footer/>
                    
            </div>
        </>
    );
}