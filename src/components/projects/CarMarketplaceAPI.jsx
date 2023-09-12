
import Heading from '../Heading'
import Separator from '../Separator'
import SkillIcon from '../skills/SkillIcon'
import {SiGit,SiGithub,SiCsharp,SiDotnet} from 'react-icons/si'
import {AiFillCodeSandboxCircle} from 'react-icons/ai'


function CarMarketplaceAPI() {

  const skills = [
    {
        name: 'C#',
        icon: SiCsharp,
        color: '#8550af'
    },
    {
        name: 'ASP.NET',
        icon: SiDotnet,
        color: '#8A2BE2'
    },
    {
        name: 'EF Core',
        icon: AiFillCodeSandboxCircle,
        color: '#8A2BE2'
    },
    {
        name:'Git',
        icon: SiGit,
        color: '#f34f29'
    }
  ]

  const links = [
    {
      name:'Code',
      icon: SiGithub,
      color: '#171515',
      url: 'https://github.com/cabraja/ASP.NET-52-20-Used-Cars'
    }
  ]

  return (
    <div>

      <Heading title={'Car Marketplace API'}/>
      
      <Separator size={5}/>

      <p>The project idea is a website for selling used cars through advertisements, similar to websites like "Polovni automobili" or "Moj Auto." Registered users can post their own ads and follow others'. In addition, administrators have the ability to review audit logs and all user information.</p>

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
    </div>
  )
}

export default CarMarketplaceAPI