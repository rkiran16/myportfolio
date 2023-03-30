import * as React from 'react'
import Header from './components/Header';
import Footer from "./components/Footer";
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
      path: "/resume",
      element: <Resume />
   },
]);

const App = () => (
   <div className='bg-color1'>
      <Header />
      <RouterProvider router={router} />
      <Footer  />
   </div>
);

export default App;