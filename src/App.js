import Dashboard from "./Components/Dashboard";
import LandingPage from "./Components/LandingPage";
import { Routes, Route } from "react-router-dom";
import UserDetails from "./Components/UserDetails";
import UserVerification from './Components/UserVerification';
import TermsCondition from './Components/Terms&condition';
import Documentation from './Components/Documentation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/userverification" element={<UserVerification />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path='/terms&condition' element={<TermsCondition />} />
        <Route path='/documentation' element={<Documentation />} />
      </Routes>
    </div>
  );
}

export default App;
