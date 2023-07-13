import Icon from "./Icon"
import resume from '../../assets/images/resume-small.jpg'
import info from '../../assets/images/info.png'
import skills from '../../assets/images/skills.png'
// HOOKS
import useResumeWindow from "../../hooks/useResumeWindow"
import useAboutWindow from "../../hooks/useAboutWindow"
import useSkillsWindow from "../../hooks/useSkillsWindow"

function Desktop() {

  const resumeWindow = useResumeWindow()
  const aboutWindow = useAboutWindow()
  const skillsWindow = useSkillsWindow()

  return (
    <div className="
    w-fit
    text-white
    grid
    grid-cols-2
    gap-4
    p-6
    ">
        <Icon title={'My Resume'} image={resume} onClick={resumeWindow.onOpen}/>
        <Icon title={'About Me'} image={info} onClick={aboutWindow.onOpen}/>
        <Icon title={'Skills'} image={skills} onClick={skillsWindow.onOpen}/>
    </div>
  )
}

export default Desktop