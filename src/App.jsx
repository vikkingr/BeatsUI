import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Backlog from './components/Backlog/Backlog';
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
        path: '/Backlog',
        element: <Backlog />,
      },
      {
        path: '/About',
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <BeatsContextProvider>
      <RouterProvider router={router} />
    </BeatsContextProvider>
  );
}

export default App;