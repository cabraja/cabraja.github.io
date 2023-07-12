import {useEffect,useState} from 'react'
import {AiOutlineWifi} from 'react-icons/ai'

function TaskbarEnd() {

    // CLOCK TIME AND DATE
    const [datetime, setDatetime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDatetime(new Date())
    }, 1000);


    return () => clearInterval(intervalId);
  }, []);
    
    const formatedTime = (
        <div className='flex flex-col items-center text-sm'>
            <p>{String(datetime.getHours()).padStart(2, '0')}:{String(datetime.getMinutes()).padStart(2, '0')} {datetime.getHours() < 12 ? 'AM' : 'PM'}</p>
            <p>{datetime.getDay()}/{datetime.getMonth()}/{datetime.getFullYear()}</p>
        </div>
    );

  return (
    <div className="
    flex
    grow-[1]
    flex-row
    items-center
    w-2/5
    md:w-full
    justify-end
    px-5
    py-3
    md:py-0
    ">
        <div className='
        flex
        flex-row
        px-5
        '>
          <AiOutlineWifi size={21} className='hidden md:block'/>
          <p className='text-sm items-center px-2 hidden md:flex'>ENG</p>
        </div>

        <div>
          {formatedTime}
        </div>
    </div>
  )
}

export default TaskbarEnd