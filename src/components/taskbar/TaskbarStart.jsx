import logo from '../../assets/images/logo-small.png'

function TaskbarStart() {
  return (
    <div className="
    flex
    flex-col
    grow-[1]
    justify-center
    items-center
    p-3
    ">
        <img src={logo} className='
        w-[20px]
        md:w-[60px]
        '/>
    </div>
  )
}

export default TaskbarStart