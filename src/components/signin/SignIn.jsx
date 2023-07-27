import { useState } from 'react'
import user from '../../assets/images/user.svg'

function SignIn() {

  const [showSignin, setShowSignin] = useState(true)

  return (
    <div 
    id="signin-wrapper"
    className={`
    inset-0
    z-50
    fixed
    transition
    duration-500
    ${showSignin ? 'translate-y-0' : 'translate-y-full'}
    `}>
      <div className="
      w-full
      h-full
      bg-neutral-800/30
      flex
      items-center
      justify-center
      ">
        <div 
        id='signin-content'
        className="
        flex
        flex-col
        items-center
        ">

          <div 
          className="
          rounded-full
          bg-neutral-100/50
          w-[160px]
          h-[160px]
          md:w-[250px]
          md:h-[250px]
          flex
          items-center
          justify-center
          ">
            <img src={user} alt="User" className='w-9/12 h-9/12'/>
          </div>

          <h1 className='text-white mt-6 text-2xl md:text-4xl'>Mihajlo Čabraja's Portfolio</h1>

          <button className='
          text-white
          mt-5
          px-8
          py-2
          border-neutral-100
          border-2
          bg-neutral-100/30
          hover:bg-neutral-100/10
          transition
          text-md
          '
          onClick={() => setShowSignin(false)}>
            Sign in
          </button>

        </div>
      </div>
    </div>
  )
}

export default SignIn