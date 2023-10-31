"use client"
import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter();
    const [data,setData] = useState({
        email : '',
        password: ''
    })
    const handleInput = (e) =>{
      const {name,value} = e.target;
    
      setData({...data,[name]: value})
    }
    const handleSignin = () =>{
         localStorage.setItem('user',JSON.stringify(data));
        router.push('/dashboard/')
        
    }
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('user'));
        if(data){
            router.push('/dashboard/')
        }
        else return;
    },[])
  return (
    <section className='h-full w-full flex justify-center mt-16'>
        <div className='relative w-full max-w-sm border h-56 flex flex-col gap-3 items-center py-6'>
             <div className='flex flex-col'>
                <label className='text-gray-400 text-sm' htmlFor="email">email</label>
                <input type='text' className='w-full px-1 rounded-md outline-none max-w-sm border py-1' placeholder='email' name='email' onChange={handleInput}/>
             </div>
             <div className='flex flex-col'>
                <label className='text-gray-400 text-sm' htmlFor="email">password</label>
                <input type='text' className='w-full px-1 rounded-md outline-none max-w-sm border py-1' placeholder='password ' name='password' onChange={handleInput}/>
             </div>
             <button className='bg-sky-500 px-4 py-2 rounded-md text-white font-semibold' onClick={handleSignin}>Sign in</button>
        </div>
    </section>
  )
}

export default page