import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const UserAccount = () => {
  const user = useAppSelector((state) => state.user);

  console.log("User data:", user);

  if (user.id && user.name.firstname && user.name.lastname) {
    return (
      <div className="h-8 w-8 flex items-center justify-center">
        {user.name.firstname} {user.name.lastname}
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
