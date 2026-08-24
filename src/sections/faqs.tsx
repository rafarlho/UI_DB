import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

function FAQs() {

    const faqs: { question: string, answer: string }[] = [
        {
            question: "Que idades acompanha?",
            answer: "Acompanho bebés, crianças, adolescentes e adultos, adaptando a avaliação e a intervenção às necessidades, características e objetivos de cada pessoa."
        },
        {
            question: "Em que áreas intervém?",
            answer: "A Terapia da Fala abrange muito mais do que a fala. A intervenção pode envolver áreas como fala e articulação, linguagem, comunicação, voz, fluência, motricidade orofacial, alimentação e deglutição, de acordo com a idade e as necessidades de cada pessoa."
        },
        {
            question: "Quais são as situações em que posso procurar acompanhamento?",
            answer: "Entre outras situações, o acompanhamento pode ser indicado perante dificuldades na produção dos sons da fala, desenvolvimento da linguagem, comunicação, leitura e escrita, fluência, voz, alimentação (incluindo amamentação) e deglutição, ou alterações da motricidade orofacial."
        },
        {
            question: "É preciso ter um diagnóstico para marcar uma consulta?",
            answer: "Não, não é necessário ter um diagnóstico prévio. A avaliação permite compreender as dificuldades apresentadas, identificar as áreas que necessitam de intervenção e definir os objetivos terapêuticos mais adequados."
        },
        {
            question: "Como funciona a primeira consulta?",
            answer: "A primeira consulta é dedicada à recolha de informação, avaliação das áreas relevantes e definição dos objetivos de intervenção. O processo é adaptado à idade, às necessidades e ao motivo que levou à procura de acompanhamento."
        },
        {
            question: "Preciso de uma referenciação médica?",
            answer: "Não necessariamente. A marcação de uma consulta de Terapia da Fala pode ser feita diretamente. No entanto, em determinadas situações, pode ser recomendada uma avaliação ou articulação com outros profissionais de saúde."
        },
        {
            question: "As consultas são comparticipadas por seguros de saúde?",
            answer: "A comparticipação depende das condições específicas do seguro de saúde e do respetivo plano. Alguns seguros incluem Terapia da Fala nas suas coberturas, podendo existir requisitos específicos para acesso à comparticipação ou reembolso. Para mais informações sobre as seguradoras com as quais tenho protocolo, deverá informar-se no momento da marcação da consulta, junto da respetiva clínica."
        },
        {
            question: "Onde são realizadas as consultas?",
            answer: "As consultas são realizadas presencialmente em Viseu, em duas unidades de saúde: São Mateus Hospital Viseu e JS Clínica Médica. Para informações sobre moradas, horários e marcações, poderá consultar diretamente os respetivos sites ou contactar a clínica."
        },
        {
            question: "Como posso marcar uma consulta?",
            answer: "Através de um dos contactos disponíveis no site ou presencialmente nas unidades de saúde anteriormente referidas."
        },
    ]

    return (
        <section id="faqs" className="flex gap-5 flex-col p-10 bg-foreground/2">
            <h1 className="text-4xl font-heading">FAQs</h1>
            <hr className="bg-primary h-1 rounded-4xl w-20"></hr>

            {faqs.map((faq,i) => (
                <Accordion key={i}>
                    <AccordionItem>
                        <AccordionTrigger className="font-heading sm:text-3xl text-xl font-bold">{faq.question}</AccordionTrigger>
                        <AccordionContent className={"font-sans sm:text-2xl text-lg"}>{faq.answer}</AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}
        </section>
    )
}

export default FAQs
