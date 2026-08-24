import { Button } from "@/components/ui/button"
import {Dot} from "lucide-react"

function Hero() {
    return (
        <section className="flex sm:h-150 h-100  relative">
            <div className="bg-[url(hero-bg.jpg)] inset-0 absolute bg-cover bg-center bg-no-repeat"></div>
            <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-transparent"/>
            
            <div className="z-10 flex flex-col max-w-200 sm:m-20 m-5 justify-evenly" >
                <div className="sm:space-y-5">
                    <h1 className="font-heading sm:text-5xl text-3xl font-bold">Terapia da Fala</h1>
                    <h1 className="font-heading sm:text-5xl text-3xl text-primary font-bold">não é só "ensinar a falar"</h1>
                </div>
                <div className="font-heading flex sm:flex-row flex-col sm:items-start items-center  justify-evenly text-primary/90 text-xl">
                    <h3 >COMUNICAÇÂO</h3>
                    <Dot/>
                    <h3>LIGAÇÃO</h3>
                    <Dot/>
                    <h3>DESENVOLVIMENTO</h3>
                </div>
                <div>
                    <Button variant={"outlined_primary"} size={"lg"}>
                        <a href="#about">SABER MAIS</a>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero
