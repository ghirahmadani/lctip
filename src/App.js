import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';

import {Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
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
import RootLayout from './layouts/RootLayout';
import TestLayout from './layouts/TestLayout';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});
  }, [pathname]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path ='/lctip' element={<RootLayout/>}>
            <Route index element={<Main/>} />
            
            <Route path='events' element={<EventsContent/>}>
              <Route path='competition' element={<Competition/>} />
              <Route path='seminar' element={<Seminar/>} />
              <Route path='challenge' element={<Crossword/>} />
            </Route>

            <Route path='/faq' element={<FAQ/>} />
            <Route path='/registration' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
        </Route>
        <Route path='/tryout' element={<TestLayout/>}>
          <Route path='dashboard' element={<Dashboard/>} />
        </Route>

        <Route path='*' element={<Maintenance/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;
