import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loginWithEmail } from "../../../stores/slices/authSlice";
import { usePostLoginMutation } from "../../../api/services/authService";
import type { AppDispatch, RootState } from "../../../stores/store";
import { send2FAEmail } from "../../../utils/sendMail";
import GoogleLoginButton from "./GoogleLogin";
import { useNavigate } from "react-router-dom";

const FormLogin = ({ setStep }: { setStep: (step: string) => void }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [postLogin, { isLoading }] = usePostLoginMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await dispatch(loginWithEmail({ email, password }));

    if (res.meta.requestStatus === "fulfilled") {
      const response = await postLogin({
        email,
      }).unwrap();

      if (response?.code) {
        send2FAEmail(email, response?.code);
        setStep("verify");
      }
    }
  };

  const handleGoogleSuccess = (credentialResponse: any) => {
    if (!credentialResponse?.credential) {
      return;
    }
    navigate("/dashboard");
  };

  return (
    <form
      className="w-[544px] h-[500px] bg-gray-100 p-8 rounded shadow"
      onSubmit={handleLogin}
    >
      <h2 className="text-lg font-semibold mb-4">Login to your account</h2>
      {error && (
        <div className="text-sm text-red-700 bg-red-100 px-2 py-1 rounded mb-2 text-center">
          {error}
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

      <button
        type="submit"
        disabled={loading || isLoading}
        className="w-full bg-black text-white p-2 rounded hover:bg-gray-900"
      >
        {loading || isLoading ? "Signing in..." : "Sign in"}
      </button>

      {/* Divider */}
      <div className="flex items-center my-2">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="mx-2 text-gray-500 text-sm">OR</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Social Buttons Side by Side */}
      <div className="flex gap-2">
        <GoogleLoginButton onSuccess={handleGoogleSuccess} />
        <button
          type="button"
          className="w-1/2 flex items-center justify-center gap-1 bg-white border border-gray-300 text-gray-700  p-2 rounded-[8px] hover:bg-gray-900 text-sm"
        >
          <FaApple />
          <span> Sign in with Apple ID</span>
        </button>
      </div>

      <p className="text-center mt-10 text-sm text-[#475569]">
        Don’t have an account?{" "}
        <a
          onClick={() => setStep("signup")}
          className="text-[#3B82F6] pointer-cursor"
        >
          Sign up
        </a>
      </p>
    </form>
  );
};

export default FormLogin;
