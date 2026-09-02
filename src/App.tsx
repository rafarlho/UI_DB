import Footer from "./components/footer"
import { Header } from "./components/header"
import ScrollToTopButton from "./components/scrool-to-top-button"
import AboutMe from "./sections/about-me"
import Areas from "./sections/areas"
import FAQs from "./sections/faqs"
import Hero from "./sections/hero"
import Schedule from "./sections/schedule"
import { motion } from "framer-motion"
export function App() {
  return (
    <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.8}}
      className="flex min-h-dvh flex-col mx-auto max-w-[1920px]"
    >
      <div className="sticky top-0 z-50 bg-background w-full">
        <Header/>
        <hr></hr>
      </div>
      <Hero/>
      <AboutMe/>
      <div className="sm:h-20 h-10"></div>
      <Areas/>
      <div className="sm:h-20 h-10"></div>
      <FAQs/>
      <div className="sm:h-20 h-10"></div>
      <Schedule/>
      <div className="sm:h-20 h-10"></div>
      <Footer/>
      <ScrollToTopButton/>
    </motion.div>
  )
}

export default App
