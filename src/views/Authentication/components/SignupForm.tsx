import { useState } from "react";
import { usePostRegisterMutation } from "../../../api/services/authService";

const SingupForm = ({ setStep }: { setStep: (step: string) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [postRegister, { isLoading, isError, error }] =
    usePostRegisterMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await postRegister({ email, password }).unwrap();
      console.log("Registered:", response);
      setStep("auth");
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  return (
    <form
      className="w-[544px]  bg-gray-100 p-8 rounded shadow"
      onSubmit={handleLogin}
    >
      <h2 className="text-lg font-semibold mb-4">Signup account</h2>

      {/* Error Message */}
      {isError && (
        <div className="text-sm text-red-700 bg-red-100 px-2 py-1 rounded mb-2 text-center">
          {/* @ts-ignore */}
          {error?.data?.error}
        </div>
      )}

      <div className="my-6">
        <p className="text-[14px] text-[#475569]">Email address</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 mb-2 border bg-white rounded-[8px] outline-none"
          required
        />
        <p className="text-[14px] text-[#475569]">Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-3 border bg-white rounded-[8px] outline-none"
          required
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            setStep("auth");
          }}
          className="w-1/2 flex items-center justify-center gap-1 bg-white border border-gray-300 text-gray-700 p-2 rounded-[8px] hover:bg-gray-50 text-sm"
        >
          <span> Cancel</span>
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="w-1/2 flex items-center justify-center gap-1 bg-black text-white p-2 rounded-[8px] hover:bg-gray-900 text-sm"
        >
          {isLoading ? "Signing up..." : "Sign up"}
        </button>
      </div>
    </form>
  );
};

export default SingupForm;
