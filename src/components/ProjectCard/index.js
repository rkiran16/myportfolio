import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectCard = ({ work }) => {
  const { id, title, images, projectDescription, projectDetails } = work;
  return (
    <div className="modal fade" id={`${id}Modal`} tabindex="-1" aria-labelledby={`${id}ModalLabel`} aria-hidden="true">
      <div className="modal-dialog modal-fullscreen-sm-down modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-3 text-color7" id={`${id}ModalLabel`}>{title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body p-0">
            <div id={`carousel${id}Fade`} className="carousel slide carousel-fade">
              <div className="carousel-inner">
                {images && images.map((image, index) => {
                  return (
                    <div id={`${index}${id}`} className={`carousel-item border ${index === 1 ? 'active' : ''}`}>
                      <img src={image} className="d-block w-100" alt="..."></img>
                    </div>
                  )
                })}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${id}Fade`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target={`#carousel${id}Fade`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="p-3">
              <p className="mt-5 lh-base animate__animated animate__fadeInDown text-color7">{projectDescription}</p>
              <div className="my-3 animate__animated animate__fadeInDown">
                <dl className="row">
                  {projectDetails && projectDetails.map((detail) => {
                    return (
                      <>
                        <dt className="col-sm-3 text-color7">{detail?.name}</dt>
                        <dd className="col-sm-9 d-flex text-color7">
                          {detail?.value}
                          {detail.urlText ? <a target="_blank" className="underline" rel="noopener noreferrer" href={detail.url}>{detail.urlText}</a> : ''}
                          {detail.stack ? detail.stack.map((s) => <div className="border d-flex justify-content-center bg-orange me-2 p-2"><FontAwesomeIcon className='text-white' icon={s} size='2x' /></div>) : ''}
                        </dd>
                      </>
                    )
                  })}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;