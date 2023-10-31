import React from 'react'

const PostSkeleton = () => {
    const data = [1,2,3,4,5,6,7,8];
  return (
    <>     {data.map((_,index)=>(
        <div className='h-56 w-56 rounded-md bg-gray-400 animate-pulse' key={index}></div>
     ))}
  </>
  )

}

export default PostSkeleton