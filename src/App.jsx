import Taskbar from "./components/taskbar/Taskbar"
import ResumeWindow from "./components/windows/ResumeWindow"
import Desktop from "./components/desktop/Desktop"
import AboutWindow from "./components/windows/AboutWindow"
import SkillsWindow from "./components/windows/SkillsWindow"
import ProjectsWindow from "./components/windows/ProjectsWindow"
import ContactWindow from "./components/windows/ContactWindow"

function App() {
  return (
    <>
       <ResumeWindow />
       <AboutWindow />
       <SkillsWindow />
       <ProjectsWindow />
       <ContactWindow />

        <Desktop />

       <Taskbar />
    </>
  )
}

export default App
