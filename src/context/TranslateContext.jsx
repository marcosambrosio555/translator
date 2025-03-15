import { createContext, useState } from "react";

export const TranslateContext = createContext()

export function TranslateProvider({ children }) {
    const BrowserLanguage = navigator.language ||
        navigator.languages[0] || navigator.languages[2]

    const [langFrom, setLangFrom] = useState(BrowserLanguage)
    const [langTo, setLangTo] = useState("en-GB")
    const [textFrom, setTextFrom] = useState("")
    const [textTo, setTextTo] = useState("")
    const [error, setError] = useState("")

    return (
        <TranslateContext.Provider value={{
            langFrom, setLangFrom, langTo, setLangTo, textFrom, setTextFrom, textTo, setTextTo,
            error, setError
        }}>
            {children}
        </TranslateContext.Provider>
    )
}