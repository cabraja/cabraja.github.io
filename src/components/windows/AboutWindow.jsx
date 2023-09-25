import Window from "./Window"
import useAboutWindow from "../../hooks/useAboutWindow"

function AboutWindow() {

    const aboutWindow = useAboutWindow()

    const bodyContent = (
        <div>
            <p>🖥️ I am an experienced frontend developer with a passion for learning new technologies and a strong desire to expand my skill set into backend development, aspiring to become a fullstack developer in the future. With over two years of hands-on experience in the industry, I have honed my expertise in various frontend technologies including HTML, CSS, JavaScript, and TypeScript. I am proficient in popular frontend frameworks such as React, Angular, and Next.js, allowing me to create dynamic and user-friendly web applications.
            <br/>
            <br/>
            ⌨️ My proficiency extends to backend technologies as well, with a solid foundation in Node.js. I have a keen eye for design, enhancing user experiences through SCSS, TailwindCSS, and Bootstrap. My database management skills encompass MySQL, NoSQL, and PostgreSQL, and I am adept at working with Restful APIs for seamless data integration.
            <br/>
            <br/>
            💼 To streamline development and collaboration, I am well-versed in package management with NPM and version control using Git and GitLab. As a holder of an EU passport, I bring international flexibility to my work, enabling me to contribute to projects across borders.</p>
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