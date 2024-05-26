import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGE_CODE } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const gptSearchView = useSelector((store) => store.gpt?.showGptSearch);
  const dispatch = useDispatch();

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView(true));
  };

  const handleLanguageChange = (e) => {
    const languageSelected = e.target.value;
    dispatch(changeLanguage(languageSelected));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(toggleGptSearchView(false));
      })
      .catch((error) => {});
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe;
  }, []);

  return (
    <div className="absolute px-10 pt-5 bg-gradient-to-b from-black h-20 w-full z-10 flex justify-between">
      <img className="w-40 pb-2" src={LOGO} alt="logo" />
      {user && (
        <div className="flex gap-4 p-1">
          <button
            className="bg-gradient-to-l from-slate-400 to-[#f54848] w-24 py-1 px-2 mr-4 h-8 rounded-md mt-1 font-bold text-sm"
            onClick={handleGptSearchClick}
          >
            {gptSearchView ? "Home" : "GPT Search"}
          </button>
          {gptSearchView && (
            <select
              className="w-28 py-1 px-2 mr-3 h-8 rounded-md mt-1 font-bold text-sm text-white bg-gray-500"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE_CODE.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <img
            className="rounded-md w-8 h-8 mt-1"
            src={user.photoURL}
            alt="user-icon"
          />
          <button
            className="w-24 h-12 font-bold mb-1 text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
