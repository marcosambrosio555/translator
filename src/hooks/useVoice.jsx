import { useEffect, useState } from "react"


export function useVoice() {

    const [voicesList, setVoicesList] = useState([]);
    const [isSpeaking, setIsSpeaking] = useState(false)


    window.speechSynthesis.addEventListener("voiceschanged", () => {
        setVoicesList([...window.speechSynthesis.getVoices()])
    })

    useEffect(() => {
        setVoicesList([...window.speechSynthesis.getVoices()])
    }, [])

    function speakText(text, lang) {
        console.log(text, lang)
        if (text) {
            const ut = new SpeechSynthesisUtterance(text)
            ut.lang = lang
            console.log(ut)
            window.speechSynthesis.speak(ut)
        }
    }

    function stopSpeak() {
        window.speechSynthesis.cancel()
    }

    function pauseSpeak() {
        window.speechSynthesis.pause()
    }

    function continueSpeak() {
        window.speechSynthesis.resume()
    }

    useEffect(() => {
        updateSpeaking()
    },)

    function updateSpeaking() {
        setIsSpeaking(window.speechSynthesis.speaking)
        requestAnimationFrame(updateSpeaking)
    }

    return {
        voicesList,
        command: {
            speakText,
            stopSpeak,
            pauseSpeak,
            continueSpeak,
            isSpeaking
        }
    }

}