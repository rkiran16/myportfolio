import { Link } from 'react-router-dom';


const SkillSet = ["html5", "css3", "sass", "js", "node-js", "python", "react", "vuejs", "git", "yarn", "sketch"]
const Skills = () => {
  return (
    <div className="min-vh-100 container d-flex flex-column justify-content-center">
      <h1 className="mb-5 display-6 fw-bold" id="work"><u>About Me</u></h1>
      <div className="p-5 rounded shadow mb-5">
        <p className='animate__animated animate__fadeInUp'>
          I'm a front-end developer with a background in computer science.My 8 years of IT expereince has given me a
          strong foundation for web development and building complex solutions. I am passionate about coding
          and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much
          more!
        </p>
        <Link to="/resume" type="button" className='btn  btn-dark me-4 btn-lg animate__animated animate__fadeInUp '>
          View Resume
        </Link>
      </div>
      <h1 className="mb-5 display-6 fw-bold"><u>Skills</u></h1>
      <div className="p-5 rounded shadow">
        <ul className="list-inline d-flex flex-wrap">
          {SkillSet.map(skill => {
            return (
              <li className="list-inline-item me-5 my-4 border bg-green p-3">
                <i className={`display-4 fa-brands fa-${skill}`}></i>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Skills;