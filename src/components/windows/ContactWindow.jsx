import Window from "./Window"
import contact from '../../assets/images/contact.png'
import useContactWindow from '../../hooks/useContactWindow'
import Heading from '../Heading'
import Separator from '../Separator'
import {FiMail} from 'react-icons/fi'
import {FaGithub,FaLinkedin,FaPhone} from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";


function ContactWindow() {

    const contactWindow = useContactWindow()

    const bodyContent = (
        <div>
            <Heading title={'Contact Info'}/>
            <Separator size={3}/>
            <a href="mailto:cabrajamihajlo@gmail.com" className="hover:text-neutral-400 transition flex flex-row mb-4">
              <FiMail size={24} className="me-3"/> 
              cabrajamihajlo@gmail.com
            </a>
            <p className="flex flex-row mb-4">
              <FaPhone size={24} className="me-3"/> 
              +43 676 733 8133
            </p>

            <Separator size={5}/>
            <Heading title={'Social Media'}/>
            <Separator size={3}/>

            <a href="https://github.com/cabraja" target="_blank" className="hover:text-neutral-400 transition flex flex-row mb-4">
              <FaGithub size={24} className="me-3 fill-[#171515]"/>
              https://github.com/cabraja
            </a>
            <a href="https://www.linkedin.com/in/mcabraja/" target="_blank" className="hover:text-neutral-400 transition flex flex-row mb-4">
              <FaLinkedin size={24} className="me-3 fill-[#0077b5]"/>
              https://www.linkedin.com/in/mcabraja/
            </a>

            <Heading title={'Location'}/>
            <Separator size={3}/>
            <p className="flex flex-row mb-4">
              <FaLocationDot size={24} className="me-3"/> 
              Vienna, Austria 🇦🇹
            </p>
        </div>
    )

  return (
    <>
    <Window 
        bodyContent={bodyContent}
        isOpen={contactWindow.isOpen}
        onClose={contactWindow.onClose}
        onMinimize={contactWindow.onMinimize}
        onQuit={contactWindow.onQuit}
        title={'Contact.txt'}
    />
    </>
  )
}

export default ContactWindow