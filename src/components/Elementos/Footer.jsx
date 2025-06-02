export default function Footer() {
    let year = new Date().getFullYear();
    return (
        <footer className=" dark:text-white font-secondary text-center pb-10 mt-8">
                <p className="text-sm md:text-lg lg:text-xl font-semibold">
                    Developer with 💗 by <span className="text-primary">Débora</span> &copy; {year}.
                </p>
        </footer>
    );
}