import Window from "./Window"
import useSettingsWindow from "../../hooks/useSettingsWindow"
import useDesktopTheme from "../../hooks/useDesktopTheme"
import Heading from "../Heading"
import Separator from "../Separator"
import Theme from "../themes/Theme"

function SettingsWindow() {

    const settingsWindow = useSettingsWindow()
    const desktopTheme = useDesktopTheme()

    const handleClick = (id) => {
      desktopTheme.changeTheme(id)
    }

    const bodyContent = (
        <div>
            <Heading title={'Change desktop theme'}/>
      
            <Separator size={5}/>

            <div className="flex flex-row flex-wrap justify-between gap-y-4">
              {
                desktopTheme.themes.map((theme,index) => <Theme key={index} id={index} url={theme.image} color={theme.color} onClick={handleClick}/>)
              }
            </div>
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