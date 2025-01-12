import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './components/Home/Home';
import About from './components/About';
import Catalogs from './components/Catalogs/Catalogs';
import BeatsContextProvider from './context/BeatsContextProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Catalogs',
        element: <Catalogs />,
      }
    ],
  },
])

const App = () => {
  return (
    <BeatsContextProvider>
      <RouterProvider router={router} />
    </BeatsContextProvider>
  );
}

export default App;