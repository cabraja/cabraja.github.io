import { IconContext } from "react-icons"

function SkillIcon({color,icon:Icon,title}) {
  return (
    <IconContext.Provider value={{ color: color }}>
        <div className="
        flex
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
            <Icon size={35}/>
            <p className="mt-1">{title}</p>
        </div>
    </IconContext.Provider>
  )
}

export default SkillIcon