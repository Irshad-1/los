import Dashboard from "./Components/Dashboard";
import LandingPage from "./Components/LandingPage";
import { Routes, Route } from "react-router-dom";
import UserDetails from "./Components/UserDetails";
import UserVerification from "./Components/UserVerification";
import TermsCondition from "./Components/Terms&condition";
import Documentation from "./Components/Documentation";
import { EmploymentFinancialDetails } from "./Components/EmploymentFinancialDetails";
import { LoanDetails } from "./Components/LoanDetails";
import PanVerify from "./Components/PanVerify";
import PanScan from "./Components/PanScan";
import AddressProof from "./Components/AddressProof";
import { LoanAgreement } from "./Components/LoanAgreement";
import AddressProofScan from "./Components/AddressProofScan";
import UploadSelfie from "./Components/UploadSelfie";
import TakeSelfie from "./Components/TakeSelfie";
import OtpVerification from "./Components/OtpVerification";

import { Welcome } from "./Components/Welcome";
import { SetPassword } from "./Components/SetPassword";
import { Login } from "./Components/Login";
import { LoanAvailment } from "./Components/LoanAvailment";
import { LoanSummary } from "./Components/LoanSummary";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/userverification" element={<UserVerification />} />
        <Route path="/otpverification" element={<OtpVerification />} />
        <Route path="/userdetails" element={<UserDetails />} />
        <Route path="/terms&condition" element={<TermsCondition />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route
          path="/employmentFinancialDetails"
          element={<EmploymentFinancialDetails />}
        />
        <Route path="/loanDetails" element={<LoanDetails />} />
        <Route path="/loanAgreement" element={<LoanAgreement />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/setPassword" element={<SetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panverify" element={<PanVerify />} />
        <Route path="/panscan" element={<PanScan />} />
        <Route path="/addressproof" element={<AddressProof />} />
        <Route path="/addressproofscan" element={<AddressProofScan />} />
        <Route path="/uploadselfie" element={<UploadSelfie />} />
        <Route path="/takeselfie" element={<TakeSelfie />} />

        <Route path="/loanAvailment" element={<LoanAvailment />} />
        <Route path="/loanSummary" element={<LoanSummary />} />
      </Routes>
    </div>
  );
}

export default App;
