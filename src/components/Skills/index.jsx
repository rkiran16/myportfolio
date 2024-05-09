  
const Skills = ({skills}) => {
    return (
      <div className="mt-4">
        <ul className="list-inline d-flex flex-wrap">
          {skills.map((skill) => {
            return (
              <li
                key={skill}
                className={`list-inline-item me-2 my-2 p-3 shadow-inset ${skill}`}
              >
                <i className={`fs-3 fa-brands fa-${skill}`}></i>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

export default Skills