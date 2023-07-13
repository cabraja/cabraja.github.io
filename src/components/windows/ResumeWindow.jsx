import Window from "./Window"
import useResumeWindow from '../../hooks/useResumeWindow'
import resume from '../../assets/images/resume.jpg'
import Button from "../Button"
import useWindows from "../../hooks/useWindows"

async function ResumeWindow() {

    const useWindows = await useWindows();

    const index = useWindows.windows.findIndex(item => item.id == 'resume')

    const bodyContent = (
        <div>
            <img src={resume} className="mb-8" alt="Resume"/>
            <Button label={'Download as PDF'} onClick={() => {}} small={false}/>
        </div>
    )

  return (
    <>
    <Window 
        bodyContent={bodyContent}
        isOpen={useWindows[index].isOpen}
        onClose={useWindows[index].onClose}
        onMinimize={useWindows[index].onMinimize}
        onQuit={useWindows[index].onQuit}
        title={'Resume.jpg'}
    />
    </>
  )
}

export default ResumeWindow