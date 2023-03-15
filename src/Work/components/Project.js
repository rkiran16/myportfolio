import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const BackButton = () => {
    return (
        <div className="d-flex mb-4">
            <Link className="text-uppercase underline fs-5" to="/">
                <FontAwesomeIcon className='me-2' icon={faArrowLeft} />
                Back
            </Link>
        </div>
    )
}

const ProjectDetails = ({ details }) => {
    const { projectName, projectDescription, projectDetails } = details;
    return (
        <>
            {details &&
                <>
                    <h1 className="text-uppercase animate__animated animate__fadeInDown">{projectName}</h1>
                    <p className="mt-5 lh-base animate__animated animate__fadeInDown">{projectDescription}</p>
                    <div className="my-3 animate__animated animate__fadeInDown">
                        <dl className="row">
                            {projectDetails && projectDetails.map((detail) => {
                                return (
                                    <>
                                        <dt className="col-sm-3">{detail?.name}</dt>
                                        <dd className="col-sm-9 d-flex">
                                            {detail?.value}
                                            {detail.urlText ? <a target="_blank" className="underline" rel="noopener noreferrer" href={detail.url}>{detail.urlText}</a> : ''}
                                            {detail.stack ? detail.stack.map((s) => <div className="border d-flex justify-content-center me-2 p-2"><FontAwesomeIcon icon={s} size='2x' /></div>) : ''}
                                        </dd>
                                    </>
                                )
                            })}
                        </dl>
                    </div>
                </>
            }
        </>
    )
}

const ProjectImages = ({ images }) => {
    return (
        <>
            {images && images.map((image, index) => {
                return (
                    <figure key={`${index}-${image.name}`} className="figure animate__animated animate__fadeInRight">
                        <img src={image.src} className="figure-img img-fluid rounded" alt={image.name}></img>
                    </figure>
                )
            })}
        </>
    )
}

const Project = ({ data }) => {
    return (
        <>
            {data &&
                <div className="container mt-5">
                    <BackButton />
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <ProjectDetails details={data.details} />
                        </div>
                        <div className="col-12 col-md-6">
                            <ProjectImages images={data.images} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Project;