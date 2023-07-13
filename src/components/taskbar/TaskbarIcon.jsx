
function TaskbarIcon({image,isActive,onClick}) {

    if(!isActive){
        return null;
    }

  return (
    <div 
    className="
    hover:bg-violet-50
    hover:bg-opacity-50
    h-full
    transition
    cursor-pointer
    flex
    flex-col
    items-center
    justify-center
    px-4
    " 
    onClick={onClick}>
        <img src={image} alt="taskbar-icon" className="h-[30px]"/>
    </div>
  )
}

export default TaskbarIcon