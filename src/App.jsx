import './App.css'

import { useContext, useEffect } from 'react'
import { BiCopy, BiMicrophone, BiTransfer, BiVolumeFull, } from 'react-icons/bi'

import { TranslateContext } from './context/TranslateContext'
import { countries } from './data/countries'

import { useTranslate } from './hooks/useTranslate'
import { useVoice } from './hooks/useVoice'
import { useMicrophone } from './hooks/useMicrophone'


function App() {

  const {
    langFrom,
    setLangFrom,
    langTo,
    setLangTo,
    textFrom,
    setTextFrom,
    textTo,
    setTextTo
  } = useContext(TranslateContext)

  useEffect(() => {
    console.log("pick")
  }, [])

  const { getTanslation } = useTranslate()
  const { command } = useVoice()
  const { handleMicrofone, listining } = useMicrophone()


  async function handleTranslate() {
    console.log({ textFrom, langFrom, langTo })
    if (textFrom) {
      const textTranslated = await getTanslation(textFrom, langFrom, langTo)
      console.log(textTranslated)
      setTextTo(textTranslated)
    }
  }

  return (
    <div className='h-screen flex items-start bg-white text-slate-900 p-4 py-12'>

      <div className='bg-slate-50 border border-zinc-300 w-[768px] mx-auto p-2 rounded'>

        <main className="flex flex-col">

          <div className='grid sm:grid-cols-2  gap-px  p-2rounded'>

            <div>
              {/* From */}
              <textarea
                name=""
                id=""
                value={textFrom}
                onChange={(e) => setTextFrom(e.target.value)}
                className='p-2 rounded h-44 w-full text-sm text-zinc-500 border border-zinc-300'
              >
              </textarea>
              <div className='flex gap-2 my-2 py-1'>

                <select
                  defaultValue={langFrom}
                  onChange={(e) => {
                    setLangFrom(e.target.value)
                  }} name="from-lang" id="from-lang" className='p-px pl-2 rounded outline-none w-32 bg-white border border-zinc-300 hover:bg-slate-100'>
                  {
                    countries.map((item => {
                      return <option value={item.code} key={item.code}>{item.name}</option>
                    }))
                  }
                </select>

                <button
                  className='p-2 rounded bg-white border border-zinc-300 hover:bg-slate-100'
                  onClick={() => {
                    handleMicrofone()
                  }}
                >
                  <BiMicrophone className={`${listining && 'text-emerald-600'}`} />
                </button>

                <button
                  className='p-2 rounded bg-white border border-zinc-300 hover:bg-slate-100'
                  onClick={() => navigator.clipboard.writeText(textFrom)}
                >
                  <BiCopy />
                </button>

                <button
                  className='p-2 rounded bg-white border border-zinc-300 hover:bg-slate-100'
                  onClick={() => command.speakText(textFrom, langFrom)}
                >
                  <BiVolumeFull />
                </button>

                <button className='p-2 rounded font-semibold text-[10px] bg-white border border-zinc-300 hover:bg-slate-100'>
                  IA
                </button>

              </div>

            </div>

            <div>
              {/* To */}
              <textarea
                name=""
                id=""
                value={textTo}
                readOnly
                className='p-2 rounded h-44 w-full text-sm text-zinc-500 border border-zinc-300 outline-none'
              ></textarea>
              <div className='flex gap-2 my-2 py-1'>

                <select
                  defaultValue={langTo}
                  onChange={(e) => {
                    setLangTo(e.target.value)
                  }}
                  name="to-lang" id="to-lang" className='p-px pl-2 rounded outline-none w-32 bg-white border border-zinc-300 hover:bg-slate-100'>
                  {
                    countries.map((item => {
                      return <option value={item.code} key={item.code}>{item.name}</option>
                    }))
                  }
                </select>

                <button
                  className='p-2 rounded bg-white border border-zinc-300 hover:bg-slate-100'
                  onClick={() => navigator.clipboard.writeText(textTo)}
                >
                  <BiCopy />
                </button>

                <button
                  className='p-2 rounded bg-white border border-zinc-300 hover:bg-slate-100'
                  onClick={() => command.speakText(textTo, langTo)}
                >
                  <BiVolumeFull />
                </button>

              </div>

            </div>


          </div>

          <footer className='grid grid-cols-3'>
            <button
              onClick={() => handleTranslate()}
              className='p-1 text-sm rounded bg-blue-500 hover:bg-blue-700 transition-all text-zinc-50'
            >Translate text</button>
            <div className='flex justify-center'>
              <button
                onClick={() => {
                  // const tfrom = textFrom
                  // const tto = textTo
                  // setTextFrom(tto)
                  // setTextTo(tfrom)

                  setTextFrom(textTo)
                  setTextTo(textFrom)

                  const lfrom = langFrom
                  const lto = langTo

                  setLangFrom(lto)
                  setLangTo(lfrom)

                  document.querySelector("#to-lang").value = lfrom
                  document.querySelector("#from-lang").value = lto

                }}
                className='rounded-sm text-sm p-2 bg-white border border-zinc-300 hover:bg-slate-100'

              ><BiTransfer /></button>
            </div>
            <button
              className='rounded-sm text-sm p-2 bg-white border border-zinc-300 hover:bg-slate-100 block w-auto text-center'
              onClick={() => {
                setTextFrom("")
                setTextTo("")
              }}
            >
              Clean
            </button>
          </footer>

        </main>
      </div>
    </div>
  )
}


export default App
