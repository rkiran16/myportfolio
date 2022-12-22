import React from "react";
import Image1 from "./images/img1.png";
import Image2 from "./images/img2.png";
import Image3 from "./images/img3.png";
import Image4 from "./images/img4.png";
import Project from "../components/Project";
import { faCss3, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";

const ProjectCurryBowl = () => {
  const projectSBData = {
    details: {
      projectName: "Curry Bowl",
      projectDescription:
        "A responsive web application for Restaurant",
      projectDetails: [
        {
          name: "Category",
          value: "Web Developemnt"
        },
        {
          name: "URL",
          url: "https://rkiran16.github.io/restaurant/",
          urlText: "Curry Bowl",
        }, {
          name: "Date",
          value: "September 22, 2017"
        }, {
          name: "Tech Stack",
          stack: [faReact, faHtml5, faCss3, faJs]
        }
      ]

    },
    images: [
      {
        src: Image1,
        name: "Project Storyboook"
      },
      {
        src: Image2,
        name: "Project Storyboook"
      }, {
        src: Image3,
        name: "Project Storyboook"
      }, {
        src: Image4,
        name: "Project Storyboook"
      }
    ]
  }

  return (
    <Project data={projectSBData} />
  )
}


export default ProjectCurryBowl;