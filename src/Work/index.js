import React from "react";
import DesignSystem from "./images/designsystem.png";
import CurryBowl from "./images/currybowl.png";
import Brittanica from "./images/britannica.jpg";
import { Link } from "react-router-dom";

const Work = () => {
    const workData = [
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
        <div className="mt-5">
            <h1 className="mb-5 display-4 fw-bold" id="work">My Work</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {workData && workData.map((work, index) => {
                    return (
                        <div key={`${work.title}${index}`} className="col d-flex align-items-stretch">
                            <Link to={`/${work.url}`}>
                                <div className="card h-100 border-success text-end bg-transparent">
                                    <img src={work.image} className="img-fluid" alt={work.title}></img>
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