import React, { useState } from "react";

import { Link } from "react-router-dom";

import { auth } from "./firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";

const Daftar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // console.log("success");
      setMsg("Daftar Berhasil, Silahkan Login");
      setTimeout(() => {
        setMsg("");
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container grid">
        <h1>Daftar</h1>

        {msg && <p>{msg}</p>}

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

        <button type="submit">Daftar</button>
        <p>
          Sudah punya akun? <Link to="/login">Login</Link>
        </p>
      </div>
    </form>
  );
};

export default Daftar;
