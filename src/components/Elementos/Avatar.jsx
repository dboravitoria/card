import perfil from '/public/avatar.png';
export default function Avatar() {
    return(
        <>
            <div className="
            ">
                <img src={perfil} alt="foto de usuário"
                className="
                   min-w-0 mx-16 rounded-full
                   drop-shadow-2xl shadow-sm
                   bg-blend-overlay
                "/>
            </div>
        </>
    );
}
