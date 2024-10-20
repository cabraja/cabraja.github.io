import { useState,useCallback,useEffect } from 'react'

function Window({bodyContent,isOpen,onClose,title,onMinimize,onQuit}) {

  const [showWindow, setShowWindow] = useState(isOpen)

    useEffect(() => {
      setShowWindow(isOpen);
  },[isOpen])

  const handleClose = useCallback(() => {
    setShowWindow(false);
    onQuit()

    setTimeout(() => {
        onClose()
    }, 300);

  },[])

  const handleMinimize = useCallback(() => {
    setShowWindow(false);

    setTimeout(() => {
        onMinimize()
        onClose()
    }, 300);

  },[])

  if(!isOpen){
    return null;
  }

  return (
    <div className={`
    fixed
    inset-x-8
    md:inset-x-[24vw]
    top-[5vh]
    bottom-[18vh]
    md:top-[18vh]
    p-[1px]
    bg-white
    translate
    duration-300
    ${showWindow ? "translate-y-0" : "translate-y-full"}
    ${showWindow ? "opacity-100" : "opacity-0"}
    ${showWindow ? "scale-100" : "scale-0"}
    z-50
    `}>


      <div className="
      w-full
      flex
      flex-row
      items-stretch
      justify-between
      text-neutral-500
      border-b-[1px]
      ">
        <div>
        <i className="fa-regular fa-folder-closed py-1 px-3 text-lg"></i>| {title}
        </div>

        <div className='flex flex-row'>
          <div className='
          hover:bg-blue-400
          transition
          cursor-pointer
          px-5
          py-1
          hover:text-white
          '
          onClick={handleMinimize}
          >
            <i className="fa-solid fa-minus pt-[6px]"></i>
          </div>

          <div className='
          hover:bg-red-600
          transition
          cursor-pointer
          px-5
          py-1
          hover:text-white
          '
          onClick={handleClose}
          >
            <i className="fa-solid fa-xmark pt-[6px]"></i>
          </div>
        </div>
      </div>

      <div className='
      p-7
      h-[88%]
      overflow-auto
      '>
        {bodyContent}
      </div>
    </div>
  )
}

export default Window