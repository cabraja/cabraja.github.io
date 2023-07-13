import Taskbar from "./components/taskbar/Taskbar"
import ResumeWindow from "./components/windows/ResumeWindow"
import Desktop from "./components/desktop/Desktop"
import AboutWindow from "./components/windows/AboutWindow"

function App() {
  return (
    <>
       <ResumeWindow />
       <AboutWindow />

        <Desktop />

       <Taskbar />
    </>
  )
}

export default App
