import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleIsSignInToggle = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
        />
      </div>
      <form className="absolute bg-black p-12 w-4/12 mx-auto left-0 my-36 right-0 text-white opacity-85 rounded-sm">
        <h1 className=" font-bold text-3xl pl-1 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-zinc-900 rounded-lg box border-white font-medium text-base"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-2 w-full bg-zinc-900 rounded-lg box border-white font-medium text-base"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-zinc-900 rounded-lg box border-white font-medium text-base"
        />
        <button
          type="submit"
          className="p-3 my-3 bg-[#FE0000] w-full rounded font-semibold text-base hover:bg-red-700"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-base pt-4">
          {isSignInForm ? "New to Netflix?" : "Already a User?"}
          <span
            className="font-semibold cursor-pointer hover:underline px-1"
            onClick={handleIsSignInToggle}
          >
            {isSignInForm ? "Sign up now." : "Sign In."}
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
