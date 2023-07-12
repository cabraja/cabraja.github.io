
function Icon({image,title}) {
  return (
    <div className="
    flex
    flex-col
    items-center
    relative
    cursor-pointer
    transition
    rounded-sm
    p-2
    border-[1px]
    border-transparent
    hover:border-[1px]
    hover:border-blue-200
    hover:bg-blue-50
    hover:bg-opacity-50
    ">
        <img src={image} alt={title} className="w-[48px]"/>
        <p className="text-sm">{title}</p>
    </div>
  )
}

export default Icon