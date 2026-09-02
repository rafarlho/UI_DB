import { BadgeCheck } from "lucide-react"
import { useMediaQuery } from "react-responsive"
function AboutMe() {

    const isSmallScreen = useMediaQuery({maxWidth:640})

    if(isSmallScreen) 
        return <section id="about" className="flex flex-col min-h-[calc(100dvh-80px)] items-start justify-center gap-5 sm:p-10 p-5 bg-foreground/2 font-sans text-xl scroll-mt-20">
            <div className="flex flex-row items-center w-full justify-between">
                <div className="flex flex-col gap-5 ">
                    <h1 className="text-2xl font-heading">Sobre mim</h1>
                    <hr className="bg-primary h-1 rounded-4xl w-20"></hr>
                    <p>Olá, sou a Diana.</p>
                </div>
                <img alt="Profile picture" src="perfil.jpeg" className="rounded-4xl max-h-40 border-5 border-primary"></img>

            </div>
            <p className="text-sm">Acredito que comunicar é muito mais do que falar: é poder expressar quem somos, criar relações, participar e fazer parte.</p>
            <p className="text-sm">Ao longo da minha formação e experiência clínica, tive oportunidade de acompanhar crianças e adultos, em diferentes áreas da Terapia da Fala, desenvolvendo uma abordagem centrada na pessoa e nas suas necessidades</p>
            <p className="text-sm">A minha experiência no contexto hospitalar permitiu-me contactar com diferentes realidades clínicas e aprofundar conhecimentos em áreas como a comunicação, linguagem, fala, motricidade orofacial e deglutição.</p>
            <p className="text-sm">Procuro que cada intervenção seja individualizada, baseada na evidência e construída em conjunto, respeitando o ritmo, os objetivos e a realidade de cada pessoa e família.</p>
            <p className="text-sm"></p>
            {/* <div className="flex flex-wrap gap-2">
                <div className="border-accent border-4 rounded-4xl max-w-max p-4 flex flex-row items-center gap-4">
                    <GraduationCap size="30"/>
                    <div>
                        <h6 className="font-heading">Licenciatura em Terapia da Fala</h6>
                        <p className="text-sm">Universidade de Aveiro</p>
                    </div>
                </div>
                
                <div className="border-accent border-4 rounded-4xl max-w-max p-4 flex flex-row items-center gap-4">
                    <Stethoscope size="30" />
                    <div>
                        <h6 className="font-heading">Experiência Clínica</h6>
                        <p className="text-sm">Estágios em diferentes contextos</p>
                    </div>
                </div>
                <div className="border-accent border-4 rounded-4xl max-w-max p-4 flex flex-row items-center gap-4">
                    <Sprout size="30"/>
                    <div>
                        <h6 className="font-heading">Início de Carreira</h6>
                        <p className="text-sm">A iniciar o caminho como Terapeuta da Fala</p>
                    </div>
                </div>
            </div> */}
            <div className="flex flex-row gap-1 border-primary border-5 p-2 rounded-xl font-heading text-sm w-full justify-center">
                <BadgeCheck/>
                Cédula Profissional
                <p className="font-bold text-primary">C-101921179</p>
            </div>
        </section>

    return (
        <section id="about" className="h-[calc(100dvh-80px)] min-h-min max-h-250 grid grid-cols-3  items-center justify-center py-10 bg-foreground/2 scroll-mt-20">
            <img alt="Profile picture" src="perfil.jpeg" className="rounded-4xl max-h-80 border-10 border-primary justify-self-center"></img>
            <div className="flex flex-col gap-5 col-span-2 text-xl px-10">
                <h1 className="text-4xl font-heading">Sobre mim</h1>
                <hr className="bg-primary h-1 rounded-4xl w-20"></hr>
                
                <p>Olá, sou a Diana.</p>
                <p>Acredito que comunicar é muito mais do que falar: é poder expressar quem somos, criar relações, participar e fazer parte.</p>
                <p>Ao longo da minha formação e experiência clínica, tive oportunidade de acompanhar crianças e adultos, em diferentes áreas da Terapia da Fala, desenvolvendo uma abordagem centrada na pessoa e nas suas necessidades</p>
                <p>A minha experiência no contexto hospitalar permitiu-me contactar com diferentes realidades clínicas e aprofundar conhecimentos em áreas como a comunicação, linguagem, fala, motricidade orofacial e deglutição.</p>
                <p>Procuro que cada intervenção seja individualizada, baseada na evidência e construída em conjunto, respeitando o ritmo, os objetivos e a realidade de cada pessoa e família.</p>
                <p></p>
                {/* <div className="flex flex-wrap gap-2">
                    <div className="border-accent border-4 rounded-4xl max-w-max p-4 flex flex-row items-center gap-4">
                        <GraduationCap size="30"/>
                        <div>
                            <h6 className="font-heading">Licenciatura em Terapia da Fala</h6>
                            <p className="text-sm">Universidade de Aveiro</p>
                        </div>
                    </div>
                    
                    <div className="border-accent border-4 rounded-4xl max-w-max p-4 flex flex-row items-center gap-4">
                        <Stethoscope size="30" />
                        <div>
                            <h6 className="font-heading">Experiência Clínica</h6>
                            <p className="text-sm">Estágios em diferentes contextos</p>
                        </div>
                    </div>
                    <div className="border-accent border-4 rounded-4xl max-w-max p-4 flex flex-row items-center gap-4">
                        <Sprout size="30"/>
                        <div>
                            <h6 className="font-heading">Início de Carreira</h6>
                            <p className="text-sm">A iniciar o caminho como Terapeuta da Fala</p>
                        </div>
                    </div>
                </div> */}
                <div className="flex gap-2 border-primary border-5 p-5 max-w-max rounded-xl font-heading">
                    <BadgeCheck/> Cédula Profissional <p className="font-bold text-primary">C-101921179</p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
