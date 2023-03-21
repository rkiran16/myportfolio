import React from "react";
import DesignSystem from "./images/designsystem.png";
import CurryBowl from "./images/currybowl.png";
import Brittanica from "./images/britannica.jpg";
import Exposure from "./images/exposure.png";
import { Link } from "react-router-dom";

const Work = () => {
    const workData = [
        {
            url: "projectexposure",
            image: Exposure,
            title: "Exposure"
        },
        {
            url: "projectstorybook",
            image: DesignSystem,
            title: "Design System with Storybook"
        },
        {
            url: "projectcurrybowl",
            image: CurryBowl,
            title: "Curry Bowl"
        },
        {
            url: "projectbrittanica",
            image: Brittanica,
            title: "Brittanica"
        }
    ]
    return (
        <div id="work" className="d-flex flex-column justify-content-center container min-vh-100 my-4">
            <h1 className="mb-5 display-6 fw-bold" id="work"><u>My Work</u></h1>
            <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
                {workData && workData.map((work, index) => {
                    return (
                        <div key={`${work.title}${index}`} className="col">
                            <Link className="d-block underline animate__animated" to={`/${work.url}`}>
                                <div className="card h-100 border-success text-end bg-transparent">
                                    <img src={work.image} className="img-fluid object-fit-cover" style={{ maxHeight: '231px', objectFit: "cover" }} alt={work.title}></img>
                                    <div className="card-body bg-white">
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