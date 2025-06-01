//Importação de Componentes
import WrapperBlur from "./WrapperBlur";
import Avatar from "../Elementos/Avatar";

export default function Card({ children }){
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
                {children}
            </div>
        </>
    );
}