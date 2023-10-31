"use client"
 
import Sidebar from '@/components/Sidebar'
import BottomNavigation from '@/components/BottomNavigation';
 import Navbar from '@/components/Navbar';
import { Store } from '@/context/Context';

const Template = ({children}) => {
    const {clicked} = Store();
  return (

    <section className='flex flex-row w-full'>
     <div><Sidebar /> <BottomNavigation /></div>
     <div className={`flex flex-col h-auto flex-1  ml-0 transition-transform duration-150 ease-in-out overflow-hidden
      ${clicked ? 'ml-56' : 'ml-0'}`}>
       <Navbar />
       <div className='relative left-3'>{children}</div>
     </div>
    </section>
 
  )
}

export default Template