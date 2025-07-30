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
    <div className="flex flex-col md:flex-row h-screen">
      {/* LEFT SIDE */}
      <div className="w-full md:w-[40%] bg-[#0F172A] p-6 md:p-8">
        <div className="text-left">
          <img src={Logo} alt="Logo" className="w-[50%] md:w-[30%] mb-8 md:mb-[50px]" />
          <h2 className="text-2xl md:text-[32px] font-bold text-white">
            Streamline your business
          </h2>
          <h2 className="text-2xl md:text-[32px] font-bold text-white">
            scheduling and payments.
          </h2>
        </div>
        <p className="text-white font-light text-sm mt-4">
          Our platform helps businesses manage appointments,<br />
          hosts, and payments in one unified interface.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-10 md:mt-[50px]">
          <div className="flex items-start gap-2 md:w-1/2">
            <img src={Unknown} alt="Logo" className="w-6 md:w-[10%]" />
            <div className="text-white font-light text-sm">
              <p className="font-semibold">Centralized Earnings</p>
              <p>All host earnings go to your business account.</p>
            </div>
          </div>
          <div className="flex items-start gap-2 md:w-1/2 mt-4 md:mt-0">
            <img src={Unknown} alt="Logo" className="w-6 md:w-[10%]" />
            <div className="text-white font-light text-sm">
              <p className="font-semibold">Host Management</p>
              <p>Add and manage hosts with per-seat pricing.</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-[60%] flex items-center justify-center bg-white p-6">
        {renderForm()}
      </div>
    </div>
  );
};

export default Authentication;
