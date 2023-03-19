import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Social = () => {
  return (
    <div className='position-fixed top-50 end-0 translate-middle-y p-2 bg-green shadow me-4'>
      <ul className='list-unstyled mb-0'>
        <li className='p-2'>
          <a href='https://github.com/rkiran16' rel="noreferrer" target="_blank">
            <FontAwesomeIcon className='fs-1' icon={faSquareGithub} />
          </a>
        </li>
        <li className='p-2'>
          <a href='https://www.linkedin.com/in/ravikanculakunta/' rel="noreferrer" target="_blank">
            <FontAwesomeIcon className='fs-1' icon={faLinkedin} />
          </a>
        </li>
        <li className='p-2'>
          <a href="mailto: ravikancula@gmail.com"><FontAwesomeIcon className='fs-1' icon={faEnvelope} /></a>
        </li>
      </ul>
    </div>
  )
}

export default Social;