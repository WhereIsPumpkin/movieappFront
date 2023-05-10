import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Login = () => {


  return (
    <>
      <img src={logo} alt="logo" />
      <div className="max-w-custom max-h-custom bg-semidarkblue w-full px-6 pt-6 pb-8 rounded-[10px]">
        <h1 className="text-white text-3xl">Login</h1>
        <form className="mt-10 mb-6">
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
          <button type="submit" className="bg-red-500 w-full text-white h-12 rounded-md">Login to your account</button>
        </form>
        <p className="text-white text-center text-sm">
            Don't have an account?
            <Link to={"/register"} className="text-red-500 ml-2">
                Sign up
            </ Link>
        </p>
      </div>
    </>
  );
};

export default Login;