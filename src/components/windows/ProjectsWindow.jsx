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
import CarMarketplaceAPI from "../projects/CarMarketplaceAPI"
import BudgetBeam from "../projects/BudgetBeam"

function ProjectsWindow() {

    const projectsWindow = useProjectsWindow()

    const projects = [
      {
        id:4,
        name: 'BudgetBeam',
        isStarred:true,
        component: <BudgetBeam />
      },
      {
        id:1,
        name: 'Furniture Store',
        isStarred:false,
        component: <FurnitureStore />
      },
      {
        id:2,
        name: 'Sneakers Store',
        isStarred:false,
        component: <SneakersStore />
      },
      {
        id:3,
        name: 'Car Marketplace API',
        isStarred:false,
        component: <CarMarketplaceAPI />
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
        <div className="grid
            grid-cols-2
            md:grid-cols-4
            xl:grid-cols-6
            2xl:grid-cols-7
            gap-x-4
            gap-y-6">
          {projects.map(item => <Icon title={item.name} key={item.id} image={folder} isStarred={item.isStarred} onClick={() => handleClick(item.id)} />)}
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