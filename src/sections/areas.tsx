import { useTheme } from "@/components/theme-provider"
import { AudioWaveform, Brain, MessageCircle, Speech, Apple, Waves, Wind } from "lucide-react"
import type { ReactNode } from "react"

function Areas() {
    const areas: { name: string, icon: ReactNode }[] = [
        { name: "Comunicação", icon: <MessageCircle size={"40"}/> },
        { name: "Linguagem", icon: <Brain size={"40"}/> },
        { name: "Fala e Articulação", icon: <Speech size={"40"}/> },
        { name: "Deglutição e Alimentação", icon: <Apple size={"40"}/> },
        { name: "Voz", icon: <AudioWaveform size={"40"}/> },
        { name: "Fluência", icon: <Waves size={"40"}/> },
        { name: "Motricidade Orofacial", icon: <Wind size={"40"}/> },
    ]

    const {resolvedTheme }  = useTheme()

    return (
        <section id="areas" className="flex gap-5 flex-col py-10 scroll-mt-20">
            <h1 className="sm:ml-10 ml-5 sm:text-4xl text-2xl font-heading">Áreas onde intervenho</h1>
            <hr className="sm:ml-10 ml-5 bg-primary h-1 rounded-4xl w-20"></hr>
            <div className="sm:py-12 py-5 overflow-hidden relative bg-accent">

                <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-background to-transparent z-10" />

                <div className="flex w-max animate-marquee">
                    {[...areas, ...areas].map((area, i) => (
                        <div key={i} className={`flex flex-col ${resolvedTheme  === "dark" ? "text-primary": "text-background"} items-center gap-2 sm:mx-20 mx-5  shrink-0 font-bold`}>
                            {area.icon}
                            <h1 className="font-heading text-sm whitespace-nowrap sm:text-xl">{area.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Areas