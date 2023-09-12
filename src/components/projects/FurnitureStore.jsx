
import Heading from '../Heading'
import Separator from '../Separator'
import SkillIcon from '../skills/SkillIcon'
import {SiHtml5,SiCss3,SiJavascript,SiReact,SiGit,SiGithub} from 'react-icons/si'
import {GoLinkExternal} from 'react-icons/go'


function FurnitureStore() {

  const skills = [
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
      name:'Javascript',
      icon: SiJavascript,
      color: '#F0DB4F'
    },
    {
      name:'React.js',
      icon: SiReact,
      color: '#61DBFB'
    },
    {
      name:'Git',
      icon: SiGit,
      color: '#f34f29'
    },
  ]

  const links = [
    {
      name:'Code',
      icon: SiGithub,
      color: '#171515',
      url: 'https://github.com/cabraja/e-commerce/tree/master'
    },
    {
      name:'Live Link',
      icon: GoLinkExternal,
      color: '#2965f1',
      url: 'https://cabraja.github.io/e-commerce/'
    },
  ]

  return (
    <div>

      <Heading title={'Furniture Store'}/>
      
      <Separator size={5}/>

      <p>Furniture online shop built entirely in React using ES6 Javascript and modern React principles like Hooks and utilizing only functional components. Website is fully responsive.</p>

      <Separator size={5}/>
      <Heading title={'Technologies Used'}/>

      <div className="
        grid
        grid-cols-2
        md:grid-cols-4
        lg:grid-cols-6
        xl:grid-cols-7
        gap-x-4
        gap-y-6">
        {
          skills.map((item,index) => <SkillIcon title={item.name} color={item.color} icon={item.icon} key={index}/>)
        }
      </div>

      <Separator size={5}/>
      <Heading title={'Links'}/>

      <div className="
        grid
        grid-cols-2
        md:grid-cols-4
        lg:grid-cols-6
        xl:grid-cols-7
        gap-x-4
        gap-y-6">
        {
          links.map((item,index) => (
            <a href={item.url} key={index} target='_blank'>
              <SkillIcon title={item.name} color={item.color} icon={item.icon}/>
            </a>
          ))
        }
      </div>
      
      <Separator size={5}/>
      <Heading title={'Images'}/>
      <Separator size={5}/>

      <div className='
      flex
      flex-col
      
      md:grid
      grid-cols-2
      grid-rows-2
      gap-4
      '>
        <div className='col-span-1 row-span-1 drop-shadow-xl'>
          <img className='object-cover h-full w-full' src='https://i.imgur.com/HRg6VfU.png' alt='furniture store image 1'/>
        </div>

        <div className='col-span-1 row-span-2 drop-shadow-xl'>
          <img className='object-cover h-full w-full' src='https://i.imgur.com/0I7LOyR.png' alt='furniture store image 2'/>
        </div>

        <div className='col-span-1 row-span-1 drop-shadow-xl'>
          <img className='object-cover h-full w-full' src='https://i.imgur.com/sRmrp1l.png' alt='furniture store image 3'/>
        </div>
      </div>
    </div>
  )
}

export default FurnitureStore