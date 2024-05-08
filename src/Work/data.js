import DesignSystem from './images/designsystem.png';
import CurryBowl from './images/currybowl.png';
import Brittanica from './images/britannica.jpg';
import Exposure from './images/exposure.png';
import Planets from './images/3d-planets.png';
import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faAws,
  faStripe,
} from '@fortawesome/free-brands-svg-icons';

// Exposure Images
import exp1 from './images/ProjectExposure/img1.png';
import exp2 from './images/ProjectExposure/img2.png';
import exp3 from './images/ProjectExposure/img3.png';
import exp4 from './images/ProjectExposure/img4.png';

// Storybook Images

import sb1 from './images/ProjectStorybook/image1.png';
import sb2 from './images/ProjectStorybook/image2.png';
import sb3 from './images/ProjectStorybook/image3.png';
import sb4 from './images/ProjectStorybook/image4.png';

// CurryBowl Images

import cb1 from './images/ProjectCurrybowl/img1.png';
import cb2 from './images/ProjectCurrybowl/img2.png';
import cb3 from './images/ProjectCurrybowl/img3.png';
import cb4 from './images/ProjectCurrybowl/img4.png';

// Britannica Images

import b1 from './images/ProjectBritannica/img1.png';
import b2 from './images/ProjectBritannica/img2.png';
import b4 from './images/ProjectBritannica/img4.jpeg';

const workData = [
  {
    id: 'planets',
    image: Planets,
    title: '3D Planets with Three.js',
    projectDescription: '',
    projectDetails: [
      {
        name: 'Category',
        value: 'Web Developemnt',
      },
      {
        name: 'URL',
        url: 'https://3d-two-ruddy.vercel.app/',
        urlText: '3D Planets',
      },
      {
        name: 'Tech Stack',
        stack: [faReact, faHtml5, faCss3, faJs],
      },
    ],
  },
  {
    id: 'curryBowl',
    image: CurryBowl,
    title: 'Curry Bowl',
    images: [cb1, cb2, cb3, cb4],
    projectDescription: 'A responsive web application for Restaurant',
    projectDetails: [
      {
        name: 'Category',
        value: 'Web Developemnt',
      },
      {
        name: 'URL',
        url: 'https://rkiran16.github.io/restaurant/',
        urlText: 'Curry Bowl',
      },
      {
        name: 'Tech Stack',
        stack: [faReact, faHtml5, faCss3, faJs],
      },
    ],
  },
  {
    id: 'exposure',
    image: Exposure,
    title: 'Exposure',
    images: [exp1, exp2, exp3, exp4],
    projectDescription:
      'A responsive E-commerce application that let users buy photos online. This is a Serverless application built using AWS Lambda and Mock Stripe payment service.',
    projectDetails: [
      {
        name: 'Category',
        value: 'Web Developemnt',
      },
      {
        name: 'URL',
        url: 'https://exposure-eta.vercel.app',
        urlText: 'Exposure',
      },
      {
        name: 'Tech Stack',
        stack: [faHtml5, faCss3, faJs, faReact, faAws, faStripe],
      },
    ],
  },
  {
    id: 'designSystem',
    image: DesignSystem,
    title: 'Design System with Storybook',
    images: [sb1, sb2, sb3, sb4],
    projectDescription:
      'Design System is a reusable component library that helps design system contributors build UIs faster.Design system is built with Atomic Design Methodology by leverging bootstrap styles.',
    projectDetails: [
      {
        name: 'Category',
        value: 'Web Developemnt',
      },
      {
        name: 'URL',
        url: 'https://storybook-rcp9.vercel.app/?path=/story/introduction--page&globals=selectedStylesheetID:global',
        urlText: 'Design System',
      },
      {
        name: 'Tech Stack',
        stack: [faHtml5, faCss3, faJs],
      },
    ],
  },
  {
    id: 'brittanica',
    image: Brittanica,
    title: 'Brittanica',
    images: [b1, b2, b4],
    projectDescription:
      'A responsive web application display countries information.',
    projectDetails: [
      {
        name: 'Category',
        value: 'Web Developemnt',
      },
      {
        name: 'URL',
        url: 'https://rkiran16.github.io/britannica-countries/',
        urlText: 'Britannica Countries',
      },
      {
        name: 'Tech Stack',
        stack: [faHtml5, faCss3, faJs],
      },
    ],
  },
];

export default workData;
