import Window from "./Window"
import useSettingsWindow from "../../hooks/useSettingsWindow"

function SettingsWindow() {

    const settingsWindow = useSettingsWindow()

    const bodyContent = (
        <div>
            <h1>SETTINGS TO DO</h1>
        </div>
    )

  return (
    <>
    <Window 
        bodyContent={bodyContent}
        isOpen={settingsWindow.isOpen}
        onClose={settingsWindow.onClose}
        onMinimize={settingsWindow.onMinimize}
        onQuit={settingsWindow.onQuit}
        title={'Settings'}
    />
    </>
  )
}

export default SettingsWindow