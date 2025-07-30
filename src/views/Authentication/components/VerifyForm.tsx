import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usePostVerifyMutation } from "../../../api/services/authService";

const VerifyForm = ({ setStep }: { setStep: (step: string) => void }) => {
  const [inputCode, setInputCode] = useState("");
  const [postVerify, { isLoading, error }] = usePostVerifyMutation();

  const navigate = useNavigate();
  const email = useSelector((state: any) => state.auth.email);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postVerify({ email, code: inputCode }).unwrap();
      navigate("/dashboard");
      setStep("auth");
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  return (
    <form
      className="w-[544px] bg-gray-100 p-8 rounded shadow"
      onSubmit={handleVerify}
    >
      <h2 className="text-lg font-semibold mb-4">Verify your account</h2>
      {error && (
        <div className="text-sm text-red-700 bg-red-100 px-2 py-1 rounded mb-2 text-center">
          {/* @ts-ignore */}
          {error?.data?.error}
        </div>
      )}

      <div className="my-6">
        <p className="text-[14px] text-[#475569]">Code</p>
        <input
          type="number"
          inputMode="numeric"
          placeholder="Verification Code"
          className="w-full p-2 mb-2 border bg-white rounded-[8px] outline-none"
          onChange={(e) => setInputCode(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setStep("auth")}
          className="w-1/2 flex items-center justify-center gap-1 bg-white border border-gray-300 text-gray-700 p-2 rounded-[8px] hover:bg-gray-50 text-sm"
        >
          <span>Cancel</span>
        </button>
        <button
          disabled={isLoading}
          type="submit"
          className="w-1/2 flex items-center justify-center gap-1 bg-black text-white p-2 rounded-[8px] hover:bg-gray-900 text-sm"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default VerifyForm;
