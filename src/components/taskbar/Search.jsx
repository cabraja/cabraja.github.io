import {LiaSearchSolid} from 'react-icons/lia'
import { useState } from 'react'
import {RiCloseFill} from 'react-icons/ri'
import SearchIcon from './SearchIcon'
import resume from '../../assets/images/resume-small.jpg'
import info from '../../assets/images/info.png'
import skills from '../../assets/images/skills.png'
import folder from '../../assets/images/folder.png'
// HOOKS
import useResumeWindow from "../../hooks/useResumeWindow"
import useAboutWindow from "../../hooks/useAboutWindow"
import useSkillsWindow from "../../hooks/useSkillsWindow"
import useProjectsWindow from "../../hooks/useProjectsWindow"

function Search() {

  const resumeWindow = useResumeWindow()
  const aboutWindow = useAboutWindow()
  const skillsWindow = useSkillsWindow()
  const projectsWindow = useProjectsWindow()

  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className='
    flex
    flex-row
    grow-[4]
    items-center
    bg-gray-50
    text-gray-600
    border-y-[1px]
    border-neutral-300
    ps-2
    pe-6
    relative
    z-10
    '
    >
        <div className='
        flex
        flex-row
        '

        onClick={() => setIsSearchOpen(true)}>
          <LiaSearchSolid size={20}/>

          <input type='text' placeholder='Type here to search' className='
          ps-3
          outline-none
          '/>
        </div>

        <div className={`
        absolute
        -top-[35vh]
        left-0
        bg-neutral-800
        backdrop-opacity-70
        w-full
        h-[35vh]
        transition
        duration-300
        backdrop-blur
        ${isSearchOpen ? "translate-y-0" : "translate-y-[200%]"}
        ${isSearchOpen ? "opacity-100" : "opacity-0"}
        `}>
          <div className='
          h-full
          w-full
          relative
          z-0
          '>
            <div className='
            transition
            cursor-pointer
            flex
            flex-row
            items-center
            justify-end
            p-1
            '
            onClick={() => setIsSearchOpen(false)}>
              <RiCloseFill className='transition hover:text-neutral-400' size={26}/>
            </div>

            <div className='
            flex
            flex-col
            gap-4
            px-2
            text-white
            '>
              <SearchIcon title={'My Resume'} image={resume} onClick={resumeWindow.onOpen}/>
              <SearchIcon title={'About Me'} image={info} onClick={aboutWindow.onOpen}/>
              <SearchIcon title={'Skills'} image={skills} onClick={skillsWindow.onOpen}/>
              <SearchIcon title={'My Projects'} image={folder} onClick={projectsWindow.onOpen}/>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Search