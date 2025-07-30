import { useState } from "react";
import FormLogin from "./components/SignInForm";
import VerifyForm from "./components/VerifyForm";
import Unknown from "../../assets/unknown.png";
import Logo from "../../assets/logo.png";
import SingupForm from "./components/SignupForm";

const Authentication = () => {
  const [step, setStep] = useState("auth");

  const renderForm = () => {
    switch (step) {
      case "auth":
        return <FormLogin setStep={setStep} />;
      case "verify":
        return <VerifyForm setStep={setStep} />;
      case "signup":
        return <SingupForm setStep={setStep} />;
      default:
        return <FormLogin setStep={setStep} />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* LEFT SIDE */}
      <div className="w-[40%] bg-[#0F172A] p-8">
        <div className="text-left">
          <img src={Logo} alt="Logo" className="w-[30%] mb-[50px]" />
          <h2 className="text-[32px] font-bold text-white">
            Streamline your business
          </h2>
          <h2 className="text-[32px] font-bold text-white ">
            scheduling and payments.
          </h2>
        </div>
        <p className="text-white font-light text-sm">
          Our platform helps businesses manage appointments, <br />
          hosts, and payments in one unified interface.
        </p>

        <div className="flex gap-2 mt-[50px]">
          <div className="w-1/2 flex items-center justify-center gap-1">
            <img src={Unknown} alt="Logo" className="w-[10%]" />
            <h2 className="text-white font-light text-sm">
              Centralized Earnings
              <p> All host earnings go to your business account.</p>
            </h2>
          </div>
          <div className="w-1/2 flex items-center justify-center gap-1">
            <img src={Unknown} alt="Logo" className="w-[10%]" />
            <h2 className="text-white font-light text-sm">
              Host Management
              <p> Add and manage hosts with per-seat pricing</p>
            </h2>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE*/}
      <div className="w-[60%] flex items-center justify-center bg-white">
        {renderForm()}
      </div>
    </div>
  );
};

export default Authentication;
