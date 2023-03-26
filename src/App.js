import * as React from 'react'
import Header from './components/Header';
import Hero from "./Hero";
import Work from './Work';
import {
   createBrowserRouter,
   RouterProvider,
} from "react-router-dom";
import Resume from './Resume';
import AboutMe from './AboutMe';


const Home = () => {
   return (
      <div className='bg-green-white'>
         <Hero />
         <Work />
         <AboutMe />
      </div>
   )
}

const router = createBrowserRouter([
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/resume",
      element: <Resume />
   },
]);

const App = () => (
   <>
      <Header />
      <RouterProvider router={router} />
   </>
);

export default App;