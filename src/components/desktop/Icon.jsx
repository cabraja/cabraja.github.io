import {AiFillStar} from 'react-icons/ai'

function Icon({image,title,onClick,isStarred = false}) {
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
    text-center
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

      {
        isStarred && <AiFillStar size={22} className='absolute top-0 right-4 md:right-0 text-yellow-500'/>
      }
    </div>
  )
}

export default Icon