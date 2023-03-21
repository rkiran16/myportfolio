import React from "react";
import Image1 from "./images/img1.png";
import Image2 from "./images/img2.png";
import Image3 from "./images/img3.jpg";
import Image4 from "./images/img4.jpeg";
import Project from "../components/Project";
import { faCss3, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";

const ProjectBritannica = () => {
  const projectData = {
    details: {
      projectName: "Britannica",
      projectDescription:
        "A responsive web application display countries information.",
      projectDetails: [
        {
          name: "Category",
          value: "Web Developemnt"
        },
        {
          name: "URL",
          url: "https://rkiran16.github.io/britannica-countries/",
          urlText: "Britannica Countries",
        }, {
          name: "Date",
          value: "June 10, 2020"
        }, {
          name: "Tech Stack",
          stack: [faHtml5, faCss3, faJs]
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
    <Project data={projectData} />
  )
}


export default ProjectBritannica;