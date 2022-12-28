import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (username.trim() && password.trim() && email.trim()) {
      e.preventDefault();
      console.log({ email, username, password });
      setPassword("");
      setUsername("");
      setEmail("");
    }
  };
  return (
    <main className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Signup</h2>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="username"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="password"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password"
        ></input>

        <button className="signupButton">Signup</button>
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          Don't have an account?{""}
          <Link className="link" to="/">
            Sign In
          </Link>
        </p>
      </form>
    </main>
  );
};
export default Signup;
