// components/GoogleLoginButton.tsx
import { useEffect } from "react";

interface GoogleLoginButtonProps {
  onSuccess: (response: any) => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onSuccess }) => {
  useEffect(() => {
    const win = window as any;
    if (win.google) {
      // Client Id: 127241611679-28l53bnnmq47ph8fvobjhlaj4bj0i5es.apps.googleusercontent.com
      // Client secret: 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

      win.google.accounts.id.initialize({
        client_id: "127241611679-28l53bnnmq47ph8fvobjhlaj4bj0i5es.apps.googleusercontent.com",
        callback: onSuccess,
      });

      win.google.accounts.id.renderButton(
        document.getElementById("google-login-btn"),
        {
          theme: "outline",
          size: "large",
          width: "100%",
        }
      );
    }
  }, []);

  return <div id="google-login-btn" className="w-1/2 "></div>;
};

export default GoogleLoginButton;
