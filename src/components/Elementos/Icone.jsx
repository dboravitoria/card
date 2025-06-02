import WrapperBlur from "../Card/WrapperBlur";

export default function Icone({href, children}) {
    return (
       <>
            <WrapperBlur className="mb-12">
                <div className="
                    flex justify-center items-center
                    min-w-0
                    rounded-full p-4
                    shadow-custom bg-blend-overlay
                    backdrop-blur-lg bg-white/20
                    dark:bg-secondary/20 
                    ">
                   <a href={href} target="_blank" >{children}</a>
                </div>
            </WrapperBlur>
       </>
    );
}