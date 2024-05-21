import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="absolute px-10 pt-5 bg-gradient-to-b from-black h-20 w-full z-10 flex justify-between">
      <img
        className="w-40 pb-1"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        alt="logo"
      />
      {user && (
        <div className="flex gap-4 p-1">
          <img
            className="rounded-md w-8 h-8 mt-1"
            src={user.photoURL}
            alt="user-icon"
          />
          <button
            className="w-24 h-12 font-bold pb-1 text-white"
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
