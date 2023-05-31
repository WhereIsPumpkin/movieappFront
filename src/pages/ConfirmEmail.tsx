import { Link } from "react-router-dom";

const ConfirmEmail = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="bg-semidarkblue font-outfit shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[275px] ">
        <h1 className="block text-white font-bold mb-2 text-xl text-center">
          Verify your account
        </h1>
        <p className="text-white font-outfit text-base text-center">
          An account activation link has been sent to your email. Please click
          on the link to confirm your email.
        </p>
        <div className="text-center mt-4">
          <Link
            to="/login"
            className="text-red-500 font-outfit text-base hover:underline md:cursor-pointer"
          >
            Go to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
