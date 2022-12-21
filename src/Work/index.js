import React from "react";
import DesignSystem from "./images/designsystem.png";
import { Link } from "react-router-dom";

const Work = () => {
    const workData = [
        {
            url: "projectstorybook",
            image: DesignSystem,
            title: "Design System with Storybook"
        }
    ]
    return (
        <div className="mt-5">
            <h1 className="mb-5 display-4 fw-bold" id="work">My Work</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {workData && workData.map((work) => {
                    return (
                        <div className="col">
                            <Link to={`/${work.url}`}>
                                <div className="card border-success text-end bg-transparent">
                                    <img src={work.image} className="figure-img img-fluid rounded" alt={work.title}></img>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{work.title}</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Work;