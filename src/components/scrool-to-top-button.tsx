import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { ArrowUp } from "lucide-react"

function ScrollToTopButton() {

    const [isVisible, setIsVisible] = useState(false)

    useEffect(()=> {
        const toggleVisibility = () => setIsVisible(window.scrollY > 400)
        window.addEventListener("scroll",toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    },[])

    const scrollToTop = () => {
        window.scrollTo({top:0, behavior: "smooth"})
    }



    return (
        <Button
            onClick={scrollToTop}
            size="icon"
            className={`fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-all duration-300 ${
                isVisible 
                    ? "opacity-100 translate-y-0 pointer-events-auto" 
                    : "opacity-0 translate-y-4 pointer-events-none"
            }`}
            aria-label="Voltar ao topo"
        >
            <ArrowUp className="h-5 w-5" />
        </Button>
    )
}

export default ScrollToTopButton
