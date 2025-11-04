import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { retrieveFromLocalStorage } from "../utils";

const UserAccount = () => {
  const { user } = useAppContext();

  const userName = retrieveFromLocalStorage("userName") ?? "";

  if (user.userName || userName) {
    return (
      <div className="h-8 w-8 flex items-center justify-center bg-blue-500 text-white rounded-full cursor-pointer">
        {user.userName.charAt(0).toUpperCase() ||
          userName.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <Link to="/login">
      <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition">
        Login
      </button>
    </Link>
  );
};

export default UserAccount;
