import Footer from "./components/footer"
import { Header } from "./components/header"
import AboutMe from "./sections/about-me"
import Areas from "./sections/areas"
import FAQs from "./sections/faqs"
import Hero from "./sections/hero"
import Schedule from "./sections/schedule"

export function App() {
  return (
    <div className="flex min-h-dvh flex-col mx-auto max-w-[1920px]">
      <Header/>
      <hr></hr>
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
    </div>
  )
}

export default App
