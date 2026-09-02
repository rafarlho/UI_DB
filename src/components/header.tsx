import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useMediaQuery } from "react-responsive";

export function Header() {

    const { resolvedTheme, setTheme }  = useTheme()
    const isSmallScreen = useMediaQuery({maxWidth:640})

    return (
        <div className="max-h-20 flex justify-between items-center w-full p-6">
            <div className="flex gap-2 items-center">
                <img className="max-h-20" alt="TF Diana Botelho Logo" src={resolvedTheme  === "light" ? "DB_Logo.svg": "DB_Logo_White.svg"}/>
                <div>
                    <h1 className="font-heading sm:text-4xl text-2xl">Diana Botelho</h1>
                    <h3 className="font-heading text-lg">Terapeuta da fala</h3>
                </div>
            </div>
            {isSmallScreen ? 
                (<DropdownMenu>
                    <DropdownMenuTrigger><Menu/></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <a href="#about"><DropdownMenuItem>Sobre</DropdownMenuItem></a>
                        <a href="#areas"><DropdownMenuItem>Áreas</DropdownMenuItem></a>
                        <a href="#faqs"><DropdownMenuItem>FAQs</DropdownMenuItem></a>
                        <a href="#contacts"><DropdownMenuItem>Contactos</DropdownMenuItem></a>
                        <DropdownMenuItem  onClick={() => (setTheme(resolvedTheme === "light" ? "dark": "light"))}> Mudar tema {resolvedTheme === "light" ? <Moon /> : <Sun/>}</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>)
                :
                (<div>
                    <Button variant="link"><a href="#about">SOBRE</a></Button>
                    <Button variant="link"><a href="#areas">ÁREAS</a></Button>
                    <Button variant="link"><a href="#faqs">FAQS</a></Button>
                    <Button variant="link"><a href="#contacts">CONTACTOS</a></Button>
                    <Button variant={"ghost"} onClick={() => (setTheme(resolvedTheme === "light" ? "dark": "light"))}>{resolvedTheme === "light" ? <Moon className={resolvedTheme=== "light" ? "text-primary" :""}/> : <Sun/>}</Button> 
                </div>)
            }
        </div>
    )
}