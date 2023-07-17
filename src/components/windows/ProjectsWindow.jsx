import { useMemo,useState } from "react"
import useProjectsWindow from "../../hooks/useProjectsWindow"
import Window from "./Window"
import Icon from "../desktop/Icon"
import folder from '../../assets/images/folder.png'
import {BiArrowBack} from 'react-icons/bi'
import Separator from '../Separator'
// PROJECTS
import FurnitureStore from "../projects/FurnitureStore"
import SneakersStore from "../projects/SneakersStore"

function ProjectsWindow() {

    const projectsWindow = useProjectsWindow()

    const projects = [
      {
        id:1,
        name: 'Furniture Store',
        component: <FurnitureStore />
      },
      {
        id:2,
        name: 'Sneakers Store',
        component: <SneakersStore />
      },
    ]

    const [openedProject, setOpenedProject] = useState(null)

    const handleClick = (id) => {
      const project = projects.find(item => item.id === id);
      setOpenedProject(project)
    }

    const bodyContent = useMemo(() => {
      if(openedProject){
        return (
          <>
            <div className="flex flex-row items-center justify-between text-neutral-500">
              <BiArrowBack className="fill-neutral-500 cursor-pointer" size={24} onClick={() => setOpenedProject(null)}/>

              <h6 className="text-sm text-end">C: &gt; Desktop &gt; My Projects &gt; {openedProject.name}</h6>
            </div>

            <Separator size={5}/>
            {openedProject.component}
          </>
        );
      }

      return (
        <>
        <div className="flex flex-row gap-8 justify-between md:justify-start">
          {projects.map(item => <Icon title={item.name} key={item.id} image={folder} onClick={() => handleClick(item.id)} />)}
        </div>
        </>
        
      )
    },[openedProject])

  return (
    <>
    <Window 
        bodyContent={bodyContent}
        isOpen={projectsWindow.isOpen}
        onClose={projectsWindow.onClose}
        onMinimize={projectsWindow.onMinimize}
        onQuit={projectsWindow.onQuit}
        title={'My Projects'}
    />
    </>
  )
}

export default ProjectsWindow