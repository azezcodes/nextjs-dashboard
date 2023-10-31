"use client"
import { useEffect} from "react";
import { useRouter } from "next/navigation";
// import { Store } from "@/context/Context";
const page = ({children}) => {
  // const {myname} = Store();
  
  const router = useRouter();
  useEffect(()=>{
     const key = localStorage.getItem('user');
     if(key){
       router.push('dashboard/')
     }
     else{
      router.push('/login')
     }
     
   },[])
   return(
  <div className="flex ">
    {/* <h4>{myname}</h4> */}
    <div className="bg-red-500 h-full w-full flex-1">{children}</div>
  </div>
   );
}
export default page