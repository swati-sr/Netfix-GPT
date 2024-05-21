import { useRef, useState } from "react";
import Header from "./Header";
import { checkFormValidation } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitButton = () => {
    const validityCheckMessage = checkFormValidation(
      fullName.current?.value,
      email.current?.value,
      password.current?.value
    );
    setErrorMessage(validityCheckMessage);
    if (validityCheckMessage) return;

    if (!isSignInForm) {
      //For Signup form
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          //below is the code to update user data
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/85557143?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      //for signin form
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  const handleIsSignInToggle = () => {
    setErrorMessage(null);
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
      <form
        className="absolute bg-black p-12 w-4/12 mx-auto left-0 my-36 right-0 text-white opacity-85 rounded-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className=" font-bold text-3xl pl-1 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-zinc-900 rounded-lg box border-white font-medium text-base"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 my-2 w-full bg-zinc-900 rounded-lg box border-white font-medium text-base"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-zinc-900 rounded-lg box border-white font-medium text-base"
        />
        <span className="py-2 pl-1 font-bold text-[#FE0000] text-base">
          {errorMessage}
        </span>
        <button
          type="submit"
          className="p-3 my-3 bg-[#FE0000] w-full rounded font-semibold text-base hover:bg-red-700"
          onClick={handleSubmitButton}
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
