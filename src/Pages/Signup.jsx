import { auth, googleProvider } from "../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Where to redirect after signup, default "/"
  const from = location.state?.from || "/";

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed up with Google!");
      navigate(from, { replace: true }); // Redirect after signup
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created!");
      setEmail("");
      setPassword("");
      navigate(from, { replace: true }); // Redirect after signup
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div
      className="p-10 space-y-4 text-center"
      style={{
        backgroundImage: `
          url('https://www.transparenttextures.com/patterns/binding-dark.png'),
          linear-gradient(to top, white, #517494)
        `,
        backgroundBlendMode: "overlay",
        backgroundSize: "auto, cover",
      }}
    >
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow ">
        <h1 className="text-3xl font-bold font-mono mb-4">Sign up</h1>
        <p className="text-center text-sm mb-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400 hover:underline font-semibold"
          >
            Log in here
          </Link>
        </p>
        <form onSubmit={handleEmailSignUp} className="space-y-4 ">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border p-2 w-full mb-6"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border p-2 w-full"
          />
          <button
            type="submit"
            className="bg-[#517494] text-white px-6 py-2 rounded hover:bg-white hover:text-[#517494] transition-colors"
          >
            Sign up
          </button>
        </form>
        <button
          onClick={handleGoogleSignUp}
          className=" text-gray-700 px-4 py-2 rounded mt-6"
        >
          <div className="flex items-center justify-center space-x-2">
            <FcGoogle size={30} />
            <h2>Sign up with Google</h2>
          </div>
        </button>
      </div>
    </div>
  );
}
