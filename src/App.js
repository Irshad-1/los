import Dashboard from './Components/Dashboard';
import LandingPage from './Components/LandingPage';
import { Routes, Route } from "react-router-dom";
import UserVerification from './Components/UserVerification';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/landingpage' element={<LandingPage />} />
      <Route path='/userverification' element={<UserVerification />} />
      </Routes>
    </div>
  );
}

export default App;
