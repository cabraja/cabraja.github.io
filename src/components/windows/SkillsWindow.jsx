import Window from "./Window"
import useSkillsWindow from "../../hooks/useSkillsWindow"

function SkillsWindow() {

    const skillsWindow = useSkillsWindow()

    const bodyContent = (
        <div>
            <p>Skills</p>
        </div>
    )

  return (
    <>
    <Window 
        bodyContent={bodyContent}
        isOpen={skillsWindow.isOpen}
        onClose={skillsWindow.onClose}
        onMinimize={skillsWindow.onMinimize}
        onQuit={skillsWindow.onQuit}
        title={'Skills'}
    />
    </>
  )
}

export default SkillsWindow