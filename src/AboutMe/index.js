import { Link } from 'react-router-dom';
import ProfilePic from "./profile_new.png";


const SkillSet = ["react", "js", "html5", "css3", "sass", "node-js", "python", "vuejs", "git", "sketch"]

const Skills = () => {
  return (
    <div className="w-75 mb-4">
      <ul className="list-inline d-flex flex-wrap">
        {SkillSet.map(skill => {
          return (
            <li key={skill} className="list-inline-item me-2 my-2 bg-light p-3">
              <i className={`fs-1 fa-brands fa-${skill}`}></i>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const AboutMe = () => {
  return (
    <div id="about" className="min-vh-100 container d-flex flex-column justify-content-center">
      <h1 className="mb-5 display-6 fw-bold"><u>About Me</u></h1>
      <div className="row">
        <div className='col-12 col-md-8'>
          <p className='animate__animated animate__fadeInUp'>
            Hello! My Name is <span className='text-orange fw-bold'>Ravi Kanculakunta</span> , I like to build things that live on internet.
            I started my career in 2012 as a Adobe Flex Developer then transitioned into web development by learning HTML & CSS.
          </p>
          <p>
            Currently, I work as a Sr Front-End Developer at <span className='text-orange fw-bold'>IBM IX</span> making meaningful contributions
            to teams of varying size and scope .
            I'm passionate about learning and development with desire to apply skills on a larger development team.
            Eager to tackle more complex problems and continue to find ways to maximize user efficiency.
          </p>
          <p>
            Here are few technologies I've been working on
          </p>
          <Skills />
          <Link to="/resume" type="button" className='button slide_right animate__animated animate__fadeInUp '>
            VIEW MY RESUME
          </Link>
        </div>
        <div className='col-12 col-md-4 d-flex justify-content-end'>
          <div className='about-me-img-wrapper'>
            <figure className="about-me-img">
              <img src={ProfilePic} alt="Ravi Kanculakunta" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;