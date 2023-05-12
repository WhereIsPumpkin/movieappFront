import React from "react";

import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
type RegisterProps = {
  setHasRegistered: (value: boolean) => void;
};

const Register = ({ setHasRegistered }: RegisterProps) => {
  const navigate = useNavigate();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.elements[0] as HTMLInputElement).value;
    const password = (form.elements[1] as HTMLInputElement).value;
    const repeatPassword = (form.elements[2] as HTMLInputElement).value;
    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        "https://movieback.onrender.com/register",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      setHasRegistered(true);
      navigate("/confirm-email");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <img src={logo} alt="logo" />
      <div className="max-w-custom  bg-semidarkblue w-full px-6 pt-6 pb-8 rounded-[10px]">
        <h1 className="text-white text-3xl">Create an account</h1>
        <form className="mt-10 mb-6" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            className="w-full pl-4 mb-6 bg-transparent text-base border-b border-custom-gray pb-4 text-white outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-4 mb-6 bg-transparent text-base border-b border-custom-gray pb-4 text-white outline-none"
          />
          <input
            type="password"
            placeholder="Repeat password"
            className="w-full pl-4 mb-10 bg-transparent text-base border-b border-custom-gray pb-4 text-white outline-none"
          />
          <button
            type="submit"
            className="bg-red-500 w-full text-white h-12 rounded-md"
          >
            Create an account
          </button>
        </form>
        <p className="text-white text-center text-sm">
          Already have an account?
          <Link to={"/login"} className="text-red-500 ml-2">
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
