import {links} from '@/utils/utils'
import Link from 'next/link'

const BottomNavigation = () => {
  return (
    <nav className='fixed bottom-0 left-0 w-full h-8  bg-white items-center shadow-lg drop-shadow-xl flex sm:hidden border z-50'>
       <div className='flex justify-between px-3 w-full'>
       {links.map((link,index)=>(
            <Link key={index} href={link.path} className='h-7 w-7'><span className='h-5 w-5 text-black'>{link.icon}</span></Link>
        ))}
       </div>
    </nav>
  )
}

export default BottomNavigation