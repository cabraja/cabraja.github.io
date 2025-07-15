import Window from "./Window"
import useSkillsWindow from "../../hooks/useSkillsWindow"
import Heading from "../Heading"

// ICONS
import {SiHtml5,SiCss3,SiJavascript,SiTypescript,SiReact,SiAngular,SiBootstrap,SiTailwindcss,SiFigma,SiAdobe,SiNodedotjs,SiNextdotjs,SiPhp,SiLaravel,SiPostgresql,SiMysql,SiMongodb,SiGit,SiGitlab,SiPrisma, SiDotnet, SiAzuredevops, SiDocker} from 'react-icons/si'
import {DiSass} from 'react-icons/di'
import usa from '../../assets/images/usa.png'
import serbia from '../../assets/images/serbia.png'
import germany from '../../assets/images/germany.png'

import SkillIcon from "../skills/SkillIcon"
import Separator from "../Separator"
import LanguageIcon from "../skills/LanguageIcon"

function SkillsWindow() {

    const skillsWindow = useSkillsWindow()

    const frontSkills = [
      {
        name:'HTML',
        icon: SiHtml5,
        color: '#e34c26'
      },
      {
        name:'CSS',
        icon: SiCss3,
        color: '#2965f1'
      },
      {
        name:'SCSS',
        icon: DiSass,
        color: '#cd6799'
      },
      {
        name:'Javascript',
        icon: SiJavascript,
        color: '#F0DB4F'
      },
      {
        name:'Typescript',
        icon: SiTypescript,
        color: '#007acc'
      },
      {
        name:'React.js',
        icon: SiReact,
        color: '#61DBFB'
      },
      {
        name:'Angular',
        icon: SiAngular,
        color: '#dd1b16'
      },
      {
        name:'Bootstrap',
        icon: SiBootstrap,
        color: '#563d7c'
      },
      {
        name:'Tailwind CSS',
        icon: SiTailwindcss,
        color: '#0f9ee1'
      },
      {
        name: 'Figma',
        icon: SiFigma,
        color: 'black'
      },
      {
        name: 'Adobe XD',
        icon: SiAdobe,
        color: '#5634bc'
      },
    ]

    const backSkills = [
      {
        name:'Node.js',
        icon: SiNodedotjs,
        color: '#3c873a'
      },
      {
        name:'Next.js',
        icon: SiNextdotjs,
        color: 'black'
      },
      {
        name:'.NET',
        icon: SiDotnet,
        color: '#512bd4'
      },
      {
        name:'MySQL',
        icon: SiMysql,
        color: '#00758f'
      },
      {
        name:'PostgreSQL',
        icon: SiPostgresql,
        color: '#0064a5'
      },
      {
        name:'NoSQL',
        icon: SiMongodb,
        color: '#4DB33D'
      },
      {
        name: 'PrismaORM',
        icon:SiPrisma,
        color: 'black'
    },
    ]

    const otherSkills = [
      {
        name:'Git',
        icon: SiGit,
        color: '#f34f29'
      },
      {
        name:'Gitlab',
        icon: SiGitlab,
        color: '#e24329'
      },
      {
        name: 'Azure Devops',
        icon: SiAzuredevops,
        color: '#007FFF'
      },
      {
        name: 'Docker',
        icon: SiDocker,
        color: '#0db7ed'
      }
    ]

    const languages = [
      {
        name:'English (Fluent)',
        icon: usa,
        color: '#f34f29'
      },
      {
        name:'Serbian (Fluent)',
        icon: serbia,
        color: '#e24329'
      },
      {
        name:'German (Basic)',
        icon: germany,
        color: '#e24329'
      },
    ]

    const bodyContent = (
        <div>
            <Heading title={'Front-end'}/>
            <div className="
            grid
            grid-cols-2
            md:grid-cols-4
            lg:grid-cols-6
            xl:grid-cols-7
            gap-x-4
            gap-y-6">
            {
              frontSkills.map((item,index) => <SkillIcon title={item.name} color={item.color} icon={item.icon} key={index}/>)
            }
            </div>

            <Separator size={8}/>

            <Heading title={'Back-end'}/>
            <div className="
            grid
            grid-cols-2
            md:grid-cols-4
            lg:grid-cols-6
            xl:grid-cols-7
            gap-x-4
            gap-y-6">
            {
              backSkills.map((item,index) => <SkillIcon title={item.name} color={item.color} icon={item.icon} key={index}/>)
            }
            </div>

            <Separator size={8}/>
            <Heading title={'Other'}/>
            <div className="
            grid
            grid-cols-2
            md:grid-cols-4
            lg:grid-cols-6
            xl:grid-cols-7
            gap-x-4
            gap-y-6">
            {
             otherSkills.map((item,index) => <SkillIcon title={item.name} color={item.color} icon={item.icon} key={index}/>)
            }
            </div>

            <Separator size={5}/>
            <Heading title={'Languages'}/>
            <div className="
            grid
            grid-cols-2
            md:grid-cols-4
            lg:grid-cols-6
            xl:grid-cols-7
            gap-x-4
            gap-y-6">
            {
             languages.map((item,index) => <LanguageIcon title={item.name} img={item.icon} key={index}/>)
            }
            </div>
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