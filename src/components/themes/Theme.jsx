
function Theme({url,color,id,onClick}) {
  return (
    <div
        className='w-full md:w-[23%] relative aspect-square rounded-lg shadow bg-cover hover:opacity-60 transition cursor-pointer'
        style={{backgroundImage:`url(${url})`}}
        onClick={() => onClick(id)}
    >
        <div className='absolute w-[20px] h-[20px] right-3 top-3 rounded-full border' style={{backgroundColor:color}}>
        </div>
    </div>
  )
}

export default Theme