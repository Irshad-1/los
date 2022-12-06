import Dashboard from './Components/Dashboard';
import LandingPage from './Components/LandingPage';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/landingpage' element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
