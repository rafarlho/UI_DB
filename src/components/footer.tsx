
function Footer() {
    const year: number = new Date().getFullYear()

    return (
        <footer className="bg-primary h-50 flex justify-between items-center text-white sm:px-10 px-5">
            <img src="DB_Logo_White.svg" className="h-40  sm:hidden" />
            <img src="DB_Logo_Horizontal_Signature.png" className="h-40  hidden sm:block" />

            <div className="text-end">
                <p className="font-sans">© {year} Diana Botelho - Terapeuta da Fala</p>
                <p className="font-sans">Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default Footer
