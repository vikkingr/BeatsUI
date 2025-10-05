import './App.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Backlog from './components/Backlog/Backlog';
import BeatsContextProvider from './context/BeatsContextProvider';


const App = () => {
  return (
    <BeatsContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Backlog" element={<Backlog />} />
            <Route path="About" element={<About />} />
          </Route>
        </Routes>
      </HashRouter>
    </BeatsContextProvider>
  );
}

export default App;