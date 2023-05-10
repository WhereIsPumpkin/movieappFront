import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <img src={logo} alt="logo" />
      <div className="max-w-custom  bg-semidarkblue w-full px-6 pt-6 pb-8 rounded-[10px]">
        <h1 className="text-white text-3xl">Create an account</h1>
        <form className="mt-10 mb-6">
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
          <button type="submit" className="bg-red-500 w-full text-white h-12 rounded-md">Create an account</button>
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