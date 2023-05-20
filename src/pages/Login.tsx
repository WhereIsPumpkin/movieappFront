import logo from "../assets/logo.svg";
import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.elements[0] as HTMLInputElement).value;
    const password = (form.elements[1] as HTMLInputElement).value;
    try {
      const response = await axios.post(
        "https://movieback.onrender.com/login",
        {
          email,
          password,
        }
      );
      Cookies.set("token", response.data.token);
      navigate("/home");
    } catch (error) {
      console.error(error);
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center px-6 py-12 flex-col font-outfit font-light gap-14 ">
      <img src={logo} alt="logo" />
      <div className="max-w-custom max-h-custom bg-semidarkblue w-full px-6 pt-6 pb-8 rounded-[10px]">
        <h1 className="text-white text-3xl">Login</h1>
        <form className="mt-10 mb-6" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="w-full pl-4 mb-6 bg-transparent text-base border-b border-custom-gray pb-4 text-white outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-4 mb-10  bg-transparent text-base border-b border-custom-gray pb-4 text-white outline-none"
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            type="submit"
            className="bg-red-500 w-full text-white h-12 rounded-md"
          >
            Login to your account
          </button>
        </form>
        <p className="text-white text-center text-sm">
          Don't have an account?
          <Link to={"/register"} className="text-red-500 ml-2">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
