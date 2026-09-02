import { Button } from "@/components/ui/button"
import {ArrowDown, Dot} from "lucide-react"

function Hero() {
    return (
        <section className="flex h-[calc(100dvh-80px)] max-h-250 relative w-full">
            <div className="bg-[url(/hero-bg.jpg)] inset-0 absolute bg-cover bg-center bg-no-repeat"></div>
            <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-transparent"/>
            
            <div className="z-10 flex flex-col sm:max-w-200 w-dvw sm:m-20 m-5 justify-evenly" >
                <div className="sm:space-y-5">
                    <h1 className="font-heading sm:text-5xl text-2xl font-bold">Terapia da Fala</h1>
                    <h1 className="font-heading sm:text-5xl text-2xl text-primary font-bold">não é só "ensinar a falar"</h1>
                </div>
                <div className="font-heading flex sm:flex-row flex-col sm:items-start items-center max-w-150 justify-between text-primary/90 text-xl">
                    <h3 >COMUNICAÇÂO</h3>
                    <Dot/>
                    <h3>LIGAÇÃO</h3>
                    <Dot/>
                    <h3>DESENVOLVIMENTO</h3>
                </div>
                <div className="flex sm:justify-start justify-center">
                    <a href="#about">
                        <Button variant={"outlined_primary"} size={"lg"} >
                            SABER MAIS <ArrowDown/>
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
