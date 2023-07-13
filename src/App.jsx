import Taskbar from "./components/taskbar/Taskbar"
import ResumeWindow from "./components/windows/ResumeWindow"
import Desktop from "./components/desktop/Desktop"
import AboutWindow from "./components/windows/AboutWindow"
import SkillsWindow from "./components/windows/SkillsWindow"

function App() {
  return (
    <>
       <ResumeWindow />
       <AboutWindow />
       <SkillsWindow />

        <Desktop />

       <Taskbar />
    </>
  )
}

export default App
