"use client";

import "./LoginModal.css";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

export default function LoginModal({ open, onClose }: {
  open: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!open) return null;

  return (
    <div className="modal">
  <div className="modal-content">

    {/* Close Button */}
    <button onClick={onClose} className="close-btn">
      <IoClose size={26} />
    </button>

    <h2 className="modal-title">Log in to Summarist</h2>

    {/* Login as Guest */}
    <button className="guest-login-btn">
      <span>Login as a Guest</span>
    </button>

    <div className="divider">
      <div></div>
      <span>or</span>
      <div></div>
    </div>

    {/* Google Login */}
    <button className="google-login-btn">
      <FcGoogle size={24} className="google-icon" />
      Login with Google
    </button>

    <div className="divider">
      <div></div>
      <span>or</span>
      <div></div>
    </div>

    <input
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="input-field"
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="input-field"
    />

    {/* LOGIN BUTTON */}
    <button className="login-btn">
      Login
    </button>

    <div className="bottom-links">
      <button className="link">Forgot your password?</button>
      <button className="link">Don’t have an account?</button>
    </div>

  </div>
</div>
  );
}
