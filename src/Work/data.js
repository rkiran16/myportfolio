import DesignSystem from './images/designsystem.png';
import CurryBowl from './images/currybowl.png';
import Brittanica from './images/britannica.jpg';
import Exposure from './images/exposure.png';
import Planets from './images/planets.jpg';

const workData = [
  {
    id: 'curryBowl',
    image: CurryBowl,
    title: 'Curry Bowl',
    url: 'https://rkiran16.github.io/restaurant/',
    projectDescription:
      'Online food ordering system that uses digital menus that allow customers to place and pay for orders in restaurants.',
    stack: ['react'],
  },
  {
    id: 'designSystem',
    image: DesignSystem,
    title: 'Design System with Storybook',
    url: 'https://storybook-rcp9.vercel.app/?path=/story/introduction--page&globals=selectedStylesheetID:global',
    projectDescription:
      'Design System is a reusable component library that helps design system contributors build UIs faster.Design system is built with Atomic Design Methodology by leverging bootstrap styles.',
    stack: ['js'],
  },
  {
    id: 'exposure',
    image: Exposure,
    title: 'Exposure',
    url: 'https://exposure-eta.vercel.app',
    projectDescription:
      'A responsive E-commerce application that let users buy photos online. This is a Serverless application built using AWS Lambda and Mock Stripe payment service.',
    stack: ['react', 'stripe', 'js', 'html5', 'css3', 'sass', 'aws'],
  },
  {
    id: 'planets',
    image: Planets,
    title: '3D Planets with React Three Fiber',
    url: 'https://3d-two-ruddy.vercel.app/',
    projectDescription:
      'Application which display 3D models of planets built using React Three Fiber',
    stack: ['react'],
  },
  {
    id: 'brittanica',
    image: Brittanica,
    title: 'Brittanica',
    url: 'https://rkiran16.github.io/britannica-countries/',
    projectDescription:
      'A responsive web application display countries information.',
    stack: ['js'],
  },
];

export default workData;
