import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";

import "@fontsource/libre-franklin/400.css";
import "@fontsource/libre-franklin/500.css";
import "@fontsource/libre-franklin/600.css";

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)
