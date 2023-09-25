
import Heading from '../Heading'
import Separator from '../Separator'
import SkillIcon from '../skills/SkillIcon'
import {SiHtml5,SiCss3,SiJavascript,SiGit,SiGithub,SiBootstrap,SiPhp,SiMysql} from 'react-icons/si'
import {GoLinkExternal} from 'react-icons/go'


function SneakersStore() {

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
      name:'Bootstrap',
      icon: SiBootstrap,
      color: '#563d7c'
    },
    {
      name:'PHP',
      icon: SiPhp,
      color: '#8993be'
    },
    {
      name:'MySQL',
      icon: SiMysql,
      color: '#00758f'
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
      url: 'https://github.com/cabraja/sajt-patike'
    },
    {
      name:'Live Link',
      icon: GoLinkExternal,
      color: '#2965f1',
      url: 'https://patike-rs.000webhostapp.com/index.php'
    },
  ]

  return (
    <div>

      <Heading title={'Sneakers Store'}/>
      
      <Separator size={5}/>

      <p>Full-stack web application built using PHP, hosted online with an SQL database. Website has a ton of features, including registration and logging in, adding to cart, search functionality, pagination etc. Front-End was mainly built using Bootstrap.</p>

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
          <img className='object-scale-down h-full w-full' src='https://i.imgur.com/QJOc5Zs.png' alt='Sneakers store image 1'/>
        </div>

        <div className='col-span-1 row-span-2 drop-shadow-xl'>
          <img className='object-scale-down h-full w-full' src='https://i.imgur.com/8x1INMk.png' alt='Sneakers store image 2'/>
        </div>

        <div className='col-span-1 row-span-1 drop-shadow-xl'>
          <img className='object-scale-down h-full w-full' src='https://i.imgur.com/hjBdCul.png' alt='Sneakers store image 3'/>
        </div>
      </div>
    </div>
  )
}

export default SneakersStore