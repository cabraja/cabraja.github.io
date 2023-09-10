import TaskbarIcon from "./TaskbarIcon"
import useResumeWindow from "../../hooks/useResumeWindow"
import useAboutWindow from "../../hooks/useAboutWindow"
import useSkillsWindow from "../../hooks/useSkillsWindow"
import useProjectsWindow from "../../hooks/useProjectsWindow"
import useContactWindow from "../../hooks/useContactWindow"
import useSettingsWindow from "../../hooks/useSettingsWindow"

import pdf from '../../assets/images/resume-small.jpg'
import info from '../../assets/images/info.png'
import skills from '../../assets/images/skills.png'
import folder from '../../assets/images/folder.png'
import contact from '../../assets/images/contact.png'
import settings from '../../assets/images/gear.png'



function TaskbarMiddle() {

  const aboutWindow = useAboutWindow()
  const resumeWindow = useResumeWindow()
  const skillsWindow = useSkillsWindow()
  const projectsWindow = useProjectsWindow()
  const contactWindow = useContactWindow()
  const settingsWindow = useSettingsWindow()

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
       <TaskbarIcon image={folder} isActive={projectsWindow.isMinimized} onClick={projectsWindow.onOpen}/>
       <TaskbarIcon image={contact} isActive={contactWindow.isMinimized} onClick={contactWindow.onOpen}/>
       <TaskbarIcon image={settings} isActive={settingsWindow.isMinimized} onClick={settingsWindow.onOpen}/>
    </div>
  )
}

export default TaskbarMiddle