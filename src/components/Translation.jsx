import { BiCopy, BiMicrophone, BiVolumeFull } from "react-icons/bi";


export function Translation() {
    return (
        <div>
            {/* Area write */}
            <textarea name="" id="" className='p-2 rounded h-44 w-full text-sm text-zinc-500'></textarea>
            <div className='flex gap-2 my-2 p-1'>
                <select name="from-lang" id="from-lang" className=' p-1 rounded outline-none w-32'>
                    <option value="pt-PT">Português</option>
                    <option value="en-ENG">Inglês</option>
                </select>
                <button className='bg-zinc-50 p-2 rounded'>
                    <BiMicrophone />
                </button>

                <button className='bg-zinc-50 p-2 rounded'>
                    <BiCopy />
                </button>
                <button className='bg-zinc-50 p-2 rounded'>
                    <BiVolumeFull />
                </button>
                <button className='bg-zinc-50 p-2 rounded font-semibold'>
                    IA
                </button>
            </div>
        </div>
    )
}