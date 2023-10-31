import React from 'react'

const Todo = ({todos,users}) => {
  return (
   <>
   {todos.map((todo,index)=>(
    <div className='rounded-md flex flex-row w-full max-w-xs h-56 bg-white' key={index}>
        <img src={todo.image} className='h-full w-40 rounded-tl-md' alt="image"/>
        <h4 className='text-semibold text-sm font-poppins text-black'>{todo.title}</h4>
        <p className='w-full px-1 whitespace-pre max-h-14 overflow-hidden'>{todo.desc}</p>
    </div>
   ))}
   <div className='relative flex'>
    {users.map((user,index)=>(
        <img className=' w-10 h-10 rounded-full p-0.5 ' src={user.avatr} key={index}/>
    ))}
    </div>
   </>
  )
}

export default Todo