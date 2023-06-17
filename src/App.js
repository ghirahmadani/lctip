import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

import {Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Main from './pages/Main';
import Competition from './pages/Competition'
import Seminar from './pages/Seminar'
import Crossword from './pages/Crossword';
import FAQ from './pages/FAQ';
import Register from './pages/Register';
import Login from './pages/Login';
import Maintenance from './pages/Maintenance';
import EventsContent from './components/EventsContent';
import TryOutNavbar from './components/TryOutNavbar';

import Dashboard from './pages/Dashboard'

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, [pathname]);

  return (
      <div className="App">
        {
          pathname !== "/tryout" ? <Navbar/> : <TryOutNavbar/>
        }
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/events' element={<EventsContent/>} />
            <Route path='/events/competition' element={<Competition/>} />
            <Route path='/events/seminar' element={<Seminar/>} />
            <Route path='/events/challenge' element={<Crossword/>} />
            <Route path='/faq' element={<FAQ/>} />
            <Route path='/registration' element={<Register/>} />
            <Route path='/login' element={<Login/>} />

            <Route path='/tryout' element={<Dashboard/>} />
          </Routes>
        {
          pathname !== "/tryout" ? <Footer/> : <></>
        }
      </div>
  );
}

export default App;
