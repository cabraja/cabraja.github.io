
function Icon({image,title,onClick}) {
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
    "
    onClick={onClick}>
        <img src={image} alt={title} className="h-[56px]"/>
        <p className="text-sm mt-1">{title}</p>
    </div>
  )
}

export default Icon