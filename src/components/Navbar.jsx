"use client"
import {Bars4Icon} from '@heroicons/react/24/outline';
import { Store } from '@/context/Context';
const Navbar = () => {
    const {setClicked} = Store();
  return (
    <nav className='sticky top-0 bg-white flex border h-14  z-50 w-full items-center justify-between'>
        <div className='h-6 w-6 outline-none hidden sm:flex cursor-pointer ml-6 group' onClick={()=>setClicked((prev)=>!prev)}>
            <Bars4Icon className='h-full w-full group-hover:text-sky-500'/>
        </div>
    </nav>
  )
}
export default Navbar