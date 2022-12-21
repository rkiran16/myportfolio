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


 const Home = () => {
   return (
      <>
         <div className="container mt-5 mb-5">
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
      path: "/resume",
      element: <Resume />
   }
 ]);

const App = () => (
   <>
      <Header/>
      <RouterProvider router={router} />
   </>
);

  export default App;