import Icon from "./Icon"
import resume from '../../assets/images/resume-small.jpg'

function Desktop() {
  return (
    <div className="
    w-fit
    text-white
    grid
    grid-cols-2
    gap-4
    p-6
    ">
        <Icon title={'My Resume'} image={resume}/>
        <Icon title={'My Resume'} image={resume}/>
        <Icon title={'My Resume'} image={resume}/>
        <Icon title={'My Resume'} image={resume}/>
        <Icon title={'My Resume'} image={resume}/>
        <Icon title={'My Resume'} image={resume}/>
    </div>
  )
}

export default Desktop