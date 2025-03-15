import axios from 'axios'
const api = import.meta.env.VITE_API


export function useTranslate() {

    async function getTanslation(text, from, to) {
        console.log(text, from, to)
        const response = await axios.get(`${api}get?q=${text}&langpair=${from}|${to}`)
        const data = await response.data
        return await data.responseData.translatedText
    }

    return {
        getTanslation
    }

}