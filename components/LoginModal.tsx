"use client";

import "./LoginModal.css";
import { useState } from "react";
import { FcGoogle, FcBusinessman } from "react-icons/fc";
import { IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

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
    <FaUser size={24} className="guest-icon" />
      <span className="guest-icon-text">Login as a Guest</span>
    </button>

    <div className="divider">
      <div></div>
      <span>or</span>
      <div></div>
    </div>

    {/* Google Login */}
    <button className="google-login-btn">
      <FcGoogle size={24} className="google-icon" />
      <div className="google-login-text">
      Login with Google
      </div>
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
      <button className="link_2">Don’t have an account?</button>
    </div>

  </div>
</div>
  );
}
