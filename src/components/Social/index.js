import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBox } from '@fortawesome/free-solid-svg-icons';
import {
  faSquareGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const data = [
  {
    icon: faSquareGithub,
    link: 'https://github.com/rkiran16',
  },
  {
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/ravikanculakunta/',
  },
  {
    icon: faBox,
    link: 'https://codesandbox.io/u/rkiran16',
  },
  {
    icon: faEnvelope,
    link: 'mailto: ravikancula@gmail.com',
  },
];

const Social = () => {
  return (
    <div>
      <ul className="mt-4 list-inline d-flex align-items-center">
        <li className="animate__animated animate__zoomIn animate__delay-1s pe-2 list-inline-item">
          <a
            href="mailto: ravikancula@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="btn btn-lg rounded-pill neo-btn"
          >
            Download Resume
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
                className="link-secondary link-body-emphasis"
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
