  
const Skills = ({skills}) => {
    return (
      <div className="mt-4">
        <ul className="list-inline d-flex flex-wrap">
          {skills.map((skill) => {
            const icon = skill === "react-native" ? 'react' : skill;
            return (
              <li
                key={skill}
                className={`list-inline-item me-2 my-2 py-2 px-3 d-flex flex-column justify-content-center align-items-center shadow-inset ${skill}`}
              >
                <i className={`fs-3 fa-brands fa-${icon}`}></i>
                <small className="text-primary-emphasis">{skill}</small>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

export default Skills