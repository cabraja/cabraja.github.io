import TaskbarIcon from "./TaskbarIcon"
import useResumeWindow from "../../hooks/useResumeWindow"
import useAboutWindow from "../../hooks/useAboutWindow"

import pdf from '../../assets/images/resume-small.jpg'
import info from '../../assets/images/info.png'


function TaskbarMiddle() {

  const aboutWindow = useAboutWindow()
  const resumeWindow = useResumeWindow()

  return (
    <div className="
    flex
    grow-[4]
    flex-row
    items-center
    px-6
    w-3/5
    md:w-full
    ">
       <TaskbarIcon image={pdf} isActive={resumeWindow.isMinimized} onClick={resumeWindow.onOpen}/>
       <TaskbarIcon image={info} isActive={aboutWindow.isMinimized} onClick={aboutWindow.onOpen}/>
    </div>
  )
}

export default TaskbarMiddle