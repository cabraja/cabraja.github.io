import Window from "./Window"
import useAboutWindow from "../../hooks/useAboutWindow"

function AboutWindow() {

    const aboutWindow = useAboutWindow()

    const bodyContent = (
        <div>
            <p>Hello, my name is Mihajlo, I am a software developer and a student with expertise in front-end technologies. I am currently wrapping up my studies as I am planning to complete my bachelor's degree this year.</p>
            <br />
            <p>🖥 With my proficiency in front-end technologies such as HTML and CSS, I am able to design and develop visually appealing and user-friendly web pages. I have experience working with React.js and Vue.js to build complex and scalable web applications, including integrating APIs and designing intuitive user interfaces.</p>
            <br />
            <p>🗃 In addition, my expertise in PHP and SQL enables me to build dynamic web applications with robust server-side functionality, including authentication and database integration. I am able to design and implement efficient database schemas and perform complex queries.</p>
            <br />
            <p>💡 I am passionate about improving my skills and learning new tools and frameworks. Even though I specialize in front-end technologies, I am eager to learn more about backend as I would love to work as a Full-stack developer in the future.</p>
        </div>
    )

  return (
    <>
    <Window 
        bodyContent={bodyContent}
        isOpen={aboutWindow.isOpen}
        onClose={aboutWindow.onClose}
        onMinimize={aboutWindow.onMinimize}
        onQuit={aboutWindow.onQuit}
        title={'AboutMe.txt'}
    />
    </>
  )
}

export default AboutWindow