import * as React from 'react'
import Header from './components/Header';
import Hero from "./Hero";
import Work from './Work';
import {
   createBrowserRouter,
   RouterProvider,
} from "react-router-dom";
import ProjectStorybook from './Work/ProjectStorybook';
import Resume from './Resume';
import ProjectCurryBowl from './Work/ProjectCurrybowl';
import ProjectBritannica from './Work/ProjectBritannica';
import ProjectExposure from "./Work/ProjectExposure";
import AboutMe from './AboutMe';


const Home = () => {
   return (
      <>
         <Hero />
         <AboutMe />
         <Work />
      </>
   )
}

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/projectstorybook",
      element: <><ProjectStorybook /></>
   },
   {
      path: "/projectcurrybowl",
      element: <><ProjectCurryBowl /></>
   },
   {
      path: "/resume",
      element: <Resume />
   },
   {
      path: "/projectbrittanica",
      element: <><ProjectBritannica /></>
   },
   {
      path: "/projectexposure",
      element: <ProjectExposure />
   }
]);

const App = () => (
   <>
      <Header />
      <RouterProvider router={router} />
   </>
);

export default App;