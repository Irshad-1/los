import Dashboard from "./Components/Dashboard";
import LandingPage from "./Components/LandingPage";
import { Routes, Route } from "react-router-dom";
import UserDetails from "./Components/UserDetails";
import UserVerification from "./Components/UserVerification";
import TermsCondition from "./Components/Terms&condition";
import Documentation from "./Components/Documentation";
import { EmploymentFinancialDetails } from "./Components/EmploymentFinancialDetails";
import { LoanDetails } from "./Components/LoanDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/userverification" element={<UserVerification />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/terms&condition" element={<TermsCondition />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route
          path="/employmentFinancialDetails"
          element={<EmploymentFinancialDetails />}
        />
        <Route path="/loanDetails" element={<LoanDetails />} />
      </Routes>
    </div>
  );
}

export default App;
