import perfil from '/public/avatar.png';
export default function Avatar() {
    return(
        <>
            <div className="
                w-full flex justify-center items-center
            ">
                <img src={perfil} alt="foto de usuário"
                className="
                min-w-0 rounded-full
                shadow-sm drop-shadow-[0_8px_12px_rgba(0,0,0,0.4)]
                bg-blend-overlay
                w-full
                aspect-square object-contain    
                "/>
            </div>
        </>
    );
}
