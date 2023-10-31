const Posts = ({data}) => {
 
  return (
    <>
    {data.map((post,index)=>(
        <div className='h-56 w-56 rounded-md border p-1 shadow-md flex-wrap' key={index}>
            <label>{post.title}</label>
        </div>
    ))}
    </>
  )
}

export default Posts