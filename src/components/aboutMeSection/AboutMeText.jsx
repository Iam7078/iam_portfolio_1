import { Link } from "react-scroll"

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Ilham, a web developer with a strong interest in front-end development, 
        especially using React. I enjoy building user-friendly interfaces 
        and learning modern web technologies through hands-on projects. Currently, 
        I’m in the process of growing my experience in the industry while continuously 
        improving my skills. Outside of coding, I enjoy learning new things 
        and exploring better ways to build digital solutions.
      </p>
      <button className="border-[2px] border-hover rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-hover transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  )
}

export default AboutMeText
