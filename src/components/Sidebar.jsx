"use client"
import React from 'react'
import { links } from '@/utils/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Store } from '@/context/Context'
import { motion, AnimatePresence } from "framer-motion";
const Sidebar = () => {
  const {clicked} = Store();
  const pathname = usePathname();
  console.log(pathname);
  return (
   <AnimatePresence>
   {clicked ?  <motion.aside className='flex-col hidden w-56 border-r bg-white py-6  fixed  h-screen  sm:flex'
    initial={{   x: -100+"%" }}
    animate={{   x: 0 }}
    exit={{   x: -100+"%"}}
    transition={{ duration: 0.5, ease: "easeInOut" }}
   >
        <h4 className='relative mx-auto font-bold '>NextJS <span className='text-sky-600 font-bold text-xs absolute -rotate-45'>14</span></h4>
        <div className='relative top-10 links  w-full flex flex-col gap-3 items-center px-3'>
           {links.map((link,index)=>(
            <Link key={index} href={link.path} className={`cursor-pointer flex gap-2 rounded-md py-1 px-2 justify-normal w-full bg-white shadow-sm items-center ${pathname ===link.path && 'bg-sky-400 text-white'}`}><span className='h-6 w-6 text-slate-900'>{link.icon}</span><label className='  text-sm font-[500] text-gray-700 cursor-pointer'>{link.label}</label></Link>
           ))}      </div>
    </motion.aside>: null}
   </AnimatePresence>
  )
}

export default Sidebar