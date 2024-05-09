import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faSquareGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const data = [
  {
    icon: faSquareGithub,
    link: 'https://github.com/rkiran16',
    className: 'github',
  },
  {
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/ravikanculakunta/',
    className: 'linkedin',
  },
  // {
  //   icon: faBox,
  //   link: 'https://codesandbox.io/u/rkiran16',
  // },
  {
    icon: faEnvelope,
    link: 'mailto: ravikancula@gmail.com',
    className: 'mail',
  },
];

const Social = () => {
  return (
    <div>
      <ul className="mt-4 list-inline d-flex align-items-center">
        <li className="animate__animated animate__zoomIn animate__delay-1s pe-2 list-inline-item">
          <a
            href="/resume"
            className="btn btn-lg rounded-pill neo-btn neo-btn-primary"
          >
            <strong>View My Resume</strong>
          </a>
        </li>
        {data.map((social) => {
          return (
            <li
              className="animate__animated animate__zoomIn btn neo-btn rounded-circle list-inline-item d-flex justify-content-center align-items-center"
              style={{ width: '50px', height: '50px' }}
            >
              <a
                href={social.link}
                className={`link-secondary ${social.className}`}
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="fs-4"
                  icon={social.icon}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Social;
