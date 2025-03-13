import { useState } from "react"

export function useMicrophone() {

    const [listining, setListining] = useState(false)
    const [text, setText] = useState("")

    const speechRecognition = window.SpeechRecognition
        || window.webkitSpeechRecognition

    const recognition = speechRecognition !== undefined ? new speechRecognition() : null

    if (!recognition) {
        setText("Speech Recognition is not found!")
        return null
    }

    recognition.onstart = () => {
        setListining(true)
        console.log("Ligando")
    }
    recognition.onend = () => {
        setListining(false)
        console.log("Desligando")
    }

    recognition.onerror = (e) => {
        console.log("error : ", e)
    }

    recognition.onresult = (e) => {
        console.log(recognition)
        console.log(e.results[0][0].transcript)
        console.log("Transcrevendo")
        setText(e.results[0][0].transcript)
    }

    function handleMicrofone() {
        if (!recognition) return
        listining ? recognition.stop() : recognition.start()
    }

    return {
        recognition,
        text,
        listining,
        handleMicrofone,
    }

}