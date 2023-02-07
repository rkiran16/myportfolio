import Project from "../components/Project";
import Image1 from "./images/img1.png";
import Image2 from "./images/img2.png";
import Image3 from "./images/img3.png";
import Image4 from "./images/img4.png";
import { faCss3, faHtml5, faJs, faReact, faAws, faStripe } from "@fortawesome/free-brands-svg-icons";

const ProjectExposure = () => {
  const projectData = {
    details: {
      projectName: "Exposure",
      projectDescription: "A responsive E-commerce application that let users buy photos online. This is a Serverless application built using AWS Lambda and Mock Stripe payment service.",
      projectDetails: [
        {
          name: "Category",
          value: "Web Developemnt"
        },
        {
          name: "URL",
          url: "https://exposure-eta.vercel.app",
          urlText: "Exposure",
        }, {
          name: "Date",
          value: "Feb 6th, 2023"
        }, {
          name: "Tech Stack",
          stack: [faHtml5, faCss3, faJs, faReact, faAws, faStripe]
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

export default ProjectExposure;