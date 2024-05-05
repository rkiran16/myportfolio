const SkillSet = [
    'react',
    'js',
    'html5',
    'css3',
    'sass',
    'node-js',
    'python',
    'vuejs',
    'git',
    'figma',
    'aws',
  ];
  
const Skills = () => {
    return (
      <div className="mt-4">
        <ul className="list-inline d-flex flex-wrap">
          {SkillSet.map((skill) => {
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