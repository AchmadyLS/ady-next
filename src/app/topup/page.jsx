import Image from "next/image"
import logo from "../images/icon.jpg"
export default function topup() {
    return (
        <>
            <div className='bg-neutral-800 w-screen h-screen'>
                <div className='bg-yellow-500 w-screen h-16 flex'>
                    <Image className="relative w-12 h-12 rounded-md object-cover top-1/2 -translate-y-1/2 left-x-3 translate-x-3" src={ logo } alt=""/>
                    <h2 className="relative bg-neutral-800 rounded-2xl p-2 vina w-27 h-7 top-1/2 -translate-y-1/2 translate-x-5 font-normal text-xl"><p className="relative vina w-27 h-7 rounded-2xl text-white top-1/2 -translate-y-1/2 tracking-widest">ADYNDASHOP</p></h2>
                </div>
            </div>
        </>
    );
}