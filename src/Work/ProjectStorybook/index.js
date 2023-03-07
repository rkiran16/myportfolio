import React from "react";
import Image1 from "./images/image1.png";
import Image2 from "./images/image2.png";
import Image3 from "./images/image3.png";
import Image4 from "./images/image4.png";
import Project from "../components/Project";
import { faCss3, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";

const ProjectStorybook = () => {
    const projectSBData = {
        details: {
            projectName: "Design System",
            projectDescription:
                "Design System is a reusable component library that helps design system contributors build UIs faster.Design system is built with Atomic Design Methodology by leverging bootstrap styles.",
            projectDetails: [
                {
                    name: "Category",
                    value: "Web Developemnt"
                },
                {
                    name: "URL",
                    url: "https://storybook-rcp9.vercel.app/?path=/story/introduction--page&globals=selectedStylesheetID:global",
                    urlText: "Design System",
                }, {
                    name: "Date",
                    value: "August 18, 2022"
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
        <Project data={projectSBData} />
    )
}


export default ProjectStorybook;