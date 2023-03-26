import DesignSystem from "./images/designsystem.png";
import CurryBowl from "./images/currybowl.png";
import Brittanica from "./images/britannica.jpg";
import Exposure from "./images/exposure.png";
import { faCss3, faHtml5, faJs, faReact, faAws, faStripe } from "@fortawesome/free-brands-svg-icons";

// Exposure Images 
import exp1 from "./images/ProjectExposure/img1.png";
import exp2 from "./images/ProjectExposure/img2.png";
import exp3 from "./images/ProjectExposure/img3.png";
import exp4 from "./images/ProjectExposure/img4.png";

// Storybook Images

import sb1 from "./images/ProjectStorybook/image1.png";
import sb2 from "./images/ProjectStorybook/image2.png";
import sb3 from "./images/ProjectStorybook/image3.png";
import sb4 from "./images/ProjectStorybook/image4.png";

// CurryBowl Images

import cb1 from "./images/ProjectCurrybowl/img1.png";
import cb2 from "./images/ProjectCurrybowl/img2.png";
import cb3 from "./images/ProjectCurrybowl/img3.png";
import cb4 from "./images/ProjectCurrybowl/img4.png";

// Britannica Images

import b1 from "./images/ProjectBritannica/img1.png";
import b2 from "./images/ProjectBritannica/img2.png";
import b4 from "./images/ProjectBritannica/img4.jpeg";



const workData = [
  {
    id: "exposure",
    image: Exposure,
    title: "Exposure",
    date: "Feb 6th, 2023",
    images: [exp1, exp2, exp3, exp4],
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
        name: "Tech Stack",
        stack: [faHtml5, faCss3, faJs, faReact, faAws, faStripe]
      }
    ]
  },
  {
    id: "designSystem",
    image: DesignSystem,
    title: "Design System with Storybook",
    date: "August 18, 2022",
    images: [sb1, sb2, sb3, sb4],
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
  {
    id: "curryBowl",
    image: CurryBowl,
    title: "Curry Bowl",
    date: "September 22, 2017",
    images: [cb1, cb2, cb3, cb4],
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
  {
    id: "brittanica",
    image: Brittanica,
    title: "Brittanica",
    date: "June 10, 2020",
    images: [b1, b2, b4],
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

  }
]

export default workData;