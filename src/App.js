import Dashboard from "./Components/Dashboard/Dashboard";
import LandingPage from "./Components/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import UserDetails from "./Components/UserDetails&All/UserDetails";
import UserVerification from "./Components/MobileNumber&OtpVerification/UserVerification";
import TermsCondition from "./Components/Terms&Condition/Terms&condition";
import Documentation from "./Components/Documentation/Documentation";
import { EmploymentFinancialDetails } from "./Components/UserDetails&All/EmploymentFinancialDetails";
import { LoanDetails } from "./Components/UserDetails&All/LoanDetails";
import PanVerify from "./Components/PanCardVerification/PanVerify";
import PanScan from "./Components/PanCardScan/PanScan";
import AddressProof from "./Components/AddressVerification/AddressProof";
import { LoanAgreement } from "./Components/UserDetails&All/LoanAgreement";
import AddressProofScan from "./Components/AddressVerification/AddressProofScan";
import UploadSelfie from "./Components/SelfieVerification/UploadSelfie";
import TakeSelfie from "./Components/SelfieVerification/TakeSelfie";
import OtpVerification from "./Components/MobileNumber&OtpVerification/OtpVerification";
import { Welcome } from "./Components/UserDetails&All/Welcome";
import { SetPassword } from "./Components/UserDetails&All/SetPassword";
import { Login } from "./Components/Login/Login";
import { LoanAvailment } from "./Components/UserDetails&All/LoanAvailment";
import { LoanSummary } from "./Components/UserDetails&All/LoanSummary";
import { Authentication } from "./Components/UserDetails&All/Authentication";
import { Congratulations } from "./Components/UserDetails&All/Congratulations";

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
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/congratulations" element={<Congratulations />} />
      </Routes>
    </div>
  );
}

export default App;
