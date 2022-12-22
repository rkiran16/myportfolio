import * as React from 'react'
import Header from './Header';
import Intro from "./Intro";
import Work from './Work';
import {
   createBrowserRouter,
   RouterProvider,
} from "react-router-dom";
import ProjectStorybook from './Work/ProjectStorybook';
import Resume from './Resume';
import ProjectCurryBowl from './Work/ProjectCurrybowl';


const Home = () => {
   return (
      <>
         <div className="container-lg mt-5 mb-5">
            <Intro />
            <Work />
         </div>
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
   }
]);

const App = () => (
   <>
      <Header />
      <RouterProvider router={router} />
   </>
);

export default App;