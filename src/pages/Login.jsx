import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const ok = login(email.trim(), password.trim());

    if (ok) {
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center">

      <form
        onSubmit={submit}
        className="w-[450px] bg-slate-900 border border-slate-700 rounded-3xl p-10 space-y-6"
      >

        <div>
          <h1 className="text-4xl font-bold text-white">
            TransitOps
          </h1>

          <p className="text-slate-400 mt-2">
            Smart Fleet ERP Login
          </p>
        </div>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-xl bg-slate-800 text-white outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-xl bg-slate-800 text-white outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-xl text-white font-semibold"
        >
          Login
        </button>

        <div className="text-sm text-slate-400 border-t border-slate-700 pt-5 space-y-2">

          <p className="font-semibold text-white">
            Demo Accounts
          </p>

          <div>
            <strong>Fleet Manager</strong><br />
            manager@transitops.com<br />
            123456
          </div>

          <div>
            <strong>Safety Officer</strong><br />
            safety@transitops.com<br />
            123456
          </div>

          <div>
            <strong>Financial Analyst</strong><br />
            finance@transitops.com<br />
            123456
          </div>

        </div>

      </form>

    </div>
  );
}

export default Login;