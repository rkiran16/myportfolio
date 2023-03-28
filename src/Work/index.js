import React from "react";
import ProjectCard from "../components/ProjectCard";
import workData from "./data";

const Work = () => {
    return (
        <div id="work" className="d-flex flex-column justify-content-center px-3 min-vh-100 my-4 overflow-hidden">
            <h1 className="mb-5 display-6 fw-bold" id="work"><u>My Work</u></h1>
            <div className="row row-cols-1 row-cols-md-3 g-2 mb-4">
                {workData && workData.map((work, index) => {
                    const { id, title, image, date } = work;
                    //const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    return (
                        <>
                            <div key={`${id}${index}`} className="col" data-bs-toggle="modal" data-bs-target={`#${id}Modal`}>
                                <div className="project-card-wrapper">
                                    <div className="position-absolute top-50 start-50 translate-middle">
                                        <img src={image} className="img-fluid animate__animated shadow" alt={title}></img>
                                    </div>
                                    <div className="position-absolute w-100 bottom-0 p-2">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="text-color7">{title}</h5>
                                            <p className="mb-0 text-color7">{date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ProjectCard work={work} />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Work;