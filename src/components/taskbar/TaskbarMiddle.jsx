import TaskbarIcon from "./TaskbarIcon"
import useResumeWindow from "../../hooks/useResumeWindow"
import useAboutWindow from "../../hooks/useAboutWindow"
import useSkillsWindow from "../../hooks/useSkillsWindow"

import pdf from '../../assets/images/resume-small.jpg'
import info from '../../assets/images/info.png'
import skills from '../../assets/images/skills.png'



function TaskbarMiddle() {

  const aboutWindow = useAboutWindow()
  const resumeWindow = useResumeWindow()
  const skillsWindow =useSkillsWindow()

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
       <TaskbarIcon image={skills} isActive={skillsWindow.isMinimized} onClick={skillsWindow.onOpen}/>
    </div>
  )
}

export default TaskbarMiddle