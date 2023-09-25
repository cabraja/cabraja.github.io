import Window from "./Window"
import useResumeWindow from '../../hooks/useResumeWindow'
import resume from '../../assets/images/resume.jpg'
import Button from "../Button"

function ResumeWindow() {

    const resumeWindow = useResumeWindow()

    const bodyContent = (
        <div>
            <img src={resume} className="mb-8" alt="Resume"/>
            <a href="resume.pdf" download><Button label={'Download as PDF'} small={false}/></a>
        </div>
    )

  return (
    <>
    <Window 
        bodyContent={bodyContent}
        isOpen={resumeWindow.isOpen}
        onClose={resumeWindow.onClose}
        onMinimize={resumeWindow.onMinimize}
        onQuit={resumeWindow.onQuit}
        title={'Resume.jpg'}
    />
    </>
  )
}

export default ResumeWindow