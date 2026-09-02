import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

function Schedule() {
    const WHATSAPP_NUMBER = "351966153642"
    const WHATSAPP_MESSAGE = "Olá! Gostaria de marcar uma consulta."
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

    const {resolvedTheme} = useTheme()

    return (
        <section id="contacts" className="flex gap-5 flex-col py-10 scroll-mt-20">
            <h1 className="sm:ml-10 ml-5 sm:text-4xl text-2xl font-heading">Marcação de consultas</h1>
            <hr className="sm:ml-10 ml-5 bg-primary h-1 rounded-4xl w-20"></hr>
            
            <div className="flex flex-wrap gap-5 px-5">
                <Card className="relative mx-auto w-full max-w-sm pt-0 justify-center">
                    <div>
                        <img alt="Diana Botelho - Terapeura da fala" src={ resolvedTheme ==="light" ? "DB_Logo_Name.png": "DB_Logo_Name_OffWhite.png"} className="h-50 block mx-auto"/>
                    </div>
                    <CardHeader>
                        <CardTitle className="justify-self-center text-primary font-bold text-2xl">Contacto Direto</CardTitle>
                    </CardHeader>
                    <CardFooter>
                        <Button className="w-full " size={"lg"} variant={"outlined_primary"}>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex gap-2"><FaWhatsapp/>Enviar mensagem</a>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="relative mx-auto w-full max-w-sm pt-0 justify-center">
                    <div>
                        {/* <img alt="Diana Botelho - Terapeura da fala" src="DB_Logo_Name.png" className="h-50 justify-self-center"/> */}
                    </div>
                    <CardHeader>
                        <CardTitle className="justify-self-center text-foreground font-bold text-2xl text-center">São Mateus Hospital Viseu</CardTitle>
                    </CardHeader>
                    <CardFooter>
                        <Button className="w-full " size={"lg"} variant={"outlined_primary"}><a href="https://saomateushospital.pt/" target="_blank" className="flex gap-2"><ExternalLink/>Contactar</a></Button>
                    </CardFooter>
                </Card>
                <Card className="relative mx-auto w-full max-w-sm pt-0 justify-center">
                    <div>
                        {/* <img alt="Diana Botelho - Terapeura da fala" src="DB_Logo_Name.png" className="h-50 justify-self-center"/> */}
                    </div>
                    <CardHeader>
                        <CardTitle className="justify-self-center text-foreground font-bold text-2xl text-center">JS Clínica Médica</CardTitle>
                    </CardHeader>
                    <CardFooter>
                        <Button className="w-full " size={"lg"} variant={"outlined_primary"}><a href="https://jsclinica.pt/" target="_blank" className="flex gap-2"><ExternalLink/>Contactar</a></Button>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}

export default Schedule
