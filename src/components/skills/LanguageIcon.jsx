import { IconContext } from "react-icons"

function LanguageIcon({img,title}) {
  return (
    <div className="flex 
    flex-col 
    items-center 
    text-center
    cursor-pointer
    transition
    rounded-sm
    p-2
    border-[1px]
    border-transparent
    hover:border-[1px]
    hover:border-blue-200
    hover:bg-blue-50
    hover:bg-opacity-50"
    >
        <img src={img} alt="title" className="h-[35px]"/>
        <p className="mt-1">{title}</p>
    </div>
  )
}

export default LanguageIcon