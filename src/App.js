import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Main from "./pages/Main";
import Competition from "./pages/Competition";
import Seminar from "./pages/Seminar";
import Crossword from "./pages/Crossword";
import FAQ from "./pages/FAQ";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Maintenance from "./pages/Maintenance";
import EventsContent from "./components/EventsContent";

import Dashboard from "./pages/Dashboard";
import RootLayout from "./layouts/RootLayout";
import TestLayout from "./layouts/TestLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Main />} />

        <Route path="events" element={<EventsContent />} />
        <Route path="events/competition" element={<Competition />} />
        <Route path="events/seminar" element={<Seminar />} />
        <Route path="events/challenge" element={<Crossword />} />

        <Route path="faq" element={<FAQ />} />
        <Route path="registration" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="tryout" element={<TestLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<Maintenance />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
