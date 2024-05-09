import * as React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Resume from './Resume';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/resume',
    element: <Resume />,
  },
]);

const App = () => (
  <div>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </div>
);

export default App;
