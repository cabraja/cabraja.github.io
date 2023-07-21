import {LiaSearchSolid} from 'react-icons/lia'
import { useState } from 'react'
import {RiCloseFill} from 'react-icons/ri'
import SearchIcon from './SearchIcon'
// ICON IMAGES
import resume from '../../assets/images/resume-small.jpg'
import info from '../../assets/images/info.png'
import skills from '../../assets/images/skills.png'
import folder from '../../assets/images/folder.png'
import github from '../../assets/images/github-mark-white.png'
import linkedin from '../../assets/images/linkedin-logo.png'
import contact from '../../assets/images/contact.png'
// HOOKS
import useResumeWindow from "../../hooks/useResumeWindow"
import useAboutWindow from "../../hooks/useAboutWindow"
import useSkillsWindow from "../../hooks/useSkillsWindow"
import useProjectsWindow from "../../hooks/useProjectsWindow"
import useContactWindow from '../../hooks/useContactWindow'

function Search() {

  const resumeWindow = useResumeWindow()
  const aboutWindow = useAboutWindow()
  const skillsWindow = useSkillsWindow()
  const projectsWindow = useProjectsWindow()
  const contactWindow = useContactWindow()

  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [keyword, setKeyword] = useState('')

  let icons = [
    {
      title: 'Github',
      img: github,
      onClick: null,
      url: 'https://github.com/cabraja'
    },
    {
      title: 'LinkedIn',
      img: linkedin,
      onClick: null,
      url: 'https://www.linkedin.com/in/mcabraja/'
    },
    {
      title: 'My Resume',
      img: resume,
      onClick: resumeWindow.onOpen,
    },
    {
      title: 'About Me',
      img: info,
      onClick: aboutWindow.onOpen,
    },
    {
      title: 'Skills',
      img: skills,
      onClick: skillsWindow.onOpen,
    },
    {
      title: 'My Projects',
      img: folder,
      onClick: projectsWindow.onOpen,
    },
    {
      title: 'Contact',
      img: contact,
      onClick: contactWindow.onOpen,
    },
  ]

  icons = icons.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()));

  return (
    <div
    id='search'
    className='
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

          <input 
            type='text'
            placeholder='Type here to search'
            className='
            ps-3
            outline-none
          '
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          />
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
        overflow-y-scroll
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
            sticky
            top-0
            bg-neutral-800
            z-50
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
            pb-2
            '>
              {
                icons.length > 0
                ?
                icons.map((item,index) => {
                  if(!item.url) return <SearchIcon title={item.title} image={item.img} key={index} onClick={item.onClick}/>

                  return (
                    <a href={item.url} key={index} target='_blank'>
                      <SearchIcon title={item.title} image={item.img} onClick={item.onClick}/>
                    </a>
                  )
                })
                :
                <div className='
                h-[28vh]
                w-full
                flex
                flex-col
                items-center
                justify-center
                '>
                  <p className='text-neutral-500 mt-5 text-center'>Nothing found...</p>
                </div>
              }
            </div>

          </div>
        </div>
    </div>
  )
}

export default Search