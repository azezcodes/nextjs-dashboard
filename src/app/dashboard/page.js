"use client"
import React,{useEffect,useState,Suspense} from 'react'
import PostSkeleton from '@/components/PostSkeleton';
import dynamic from 'next/dynamic';
const Posts = dynamic(()=>import('@/components/Posts'),{
  ssr: false,
  loading: ()=><PostSkeleton />
})
const page = () => {
  const [data,setData] = useState([]);
   const getData = async() =>{
   
     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setData(data);
   
  }  
      useEffect(()=>{
         getData();
      },[])
  return (
    
       <Suspense >
        <div className='flex w-full flex-wrap gap-5 justify-center mt-10 '>

        <Posts data={data}/>
        </div>
       </Suspense>
   
  )
}

export default page