import React, { useState } from "react";

import { Link } from "react-router-dom";

import { auth } from "./firebase";

import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

import "../components/sass/form.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("success");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setMsg(
        "Email Atau Password Yang Anda Masukkan Salah, Silahkan Coba Lagi."
      );

      setTimeout(() => {
        setMsg("");
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__container container grid">
        <div className="content">
          <h1>Login</h1>
          {msg && <p>{msg}</p>}

          <div className="box">
            <label>
              Username
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <div className="btn">
              <button type="submit">Login</button>
              <p>
                Belum Punya Akun? <Link to="/daftar">Daftar</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
