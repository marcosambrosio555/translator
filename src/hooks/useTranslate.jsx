import axios from 'axios'
// import { useState } from 'react'

const api = import.meta.env.VITE_API


export function useTranslate() {

    // const [text , setText] = useState(null)

    async function getTanslation(text, from, to) {
        console.log(text, from, to)
        const response = await axios.get(`${api}get?q=${text}&langpair=${from}|${to}`)
        const data = await response.data
        console.log(data)
        console.log(data.responseData)
        console.log(data.responseData.translatedText)
        return await data.responseData.translatedText
    }

    return {
        getTanslation
    }

}