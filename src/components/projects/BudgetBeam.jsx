
import Heading from '../Heading'
import Separator from '../Separator'
import SkillIcon from '../skills/SkillIcon'
import {SiTailwindcss,SiTypescript,SiReact,SiGit,SiGithub,SiNextdotjs,SiPostgresql,SiPrisma,SiSupabase} from 'react-icons/si'
import {GoLinkExternal} from 'react-icons/go'

function BudgetBeam() {

const skills = [
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
        name:'Next.js',
        icon: SiNextdotjs,
        color: 'black'
    },
    {
        name:'Tailwind CSS',
        icon: SiTailwindcss,
        color: '#0f9ee1'
    },
    {
        name:'PostgreSQL',
        icon: SiPostgresql,
        color: '#0064a5'
    },
    {
        name: 'PrismaORM',
        icon:SiPrisma,
        color: 'black'
    },
    {
        name:'Supabase',
        icon:SiSupabase,
        color:'#34996b'
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
      url: 'https://github.com/cabraja/budget-beam'
    },
    {
      name:'Live Link',
      icon: GoLinkExternal,
      color: '#2965f1',
      url: 'https://budget-beam.vercel.app/'
    },
  ]

  return (
    <div>

      <Heading title={'BudgetBeam'}/>
      
      <Separator size={5}/>

      <p>This React/Next.js budgeting app simplifies financial management by allowing users to track expenses and income. It offers graphical data representations for spending patterns, income trends, and a detailed calendar view for daily expenses. Users can categorize transactions, set budgets, and export financial data. The app promotes informed financial decisions and helps users achieve their financial goals. Calendar feature is also available as a practical and intuitive way of keeping your expenses and income in order.</p>

      <Separator size={5}/>
      <Heading title={'Technologies Used'}/>

      <div className="
        grid
        grid-cols-2
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
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
      grid-rows-3
      gap-4
      '>
        <div className='col-span-1 row-span-1 drop-shadow-xl'>
          <img className='object-scale-down h-full w-full' src='https://i.imgur.com/pBppH73.png' alt='BudgetBeam image 1'/>
        </div>

        <div className='col-span-1 row-span-3 drop-shadow-xl'>
          <img className='object-scale-down h-full w-full' src='https://i.imgur.com/HdfrES2.png' alt='Sneakers store image 2'/>
        </div>

        <div className='col-span-1 row-span-1 drop-shadow-xl'>
          <img className='object-scale-down h-full w-full' src='https://i.imgur.com/ul432Bi.png' alt='BudgetBeam image 1'/>
        </div>

        <div className='col-span-1 row-span-1 drop-shadow-xl'>
          <img className='object-scale-down h-full w-full' src='https://i.imgur.com/Jv80csx.png' alt='Sneakers store image 3'/>
        </div>
      </div>
    </div>
  )
}

export default BudgetBeam