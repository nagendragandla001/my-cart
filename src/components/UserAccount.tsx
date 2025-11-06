import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setUser } from "../store/reducers/userReducer";

const UserAccount = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const handleLogin = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/users/2");
      const data = await res.json();
      dispatch(setUser(data));
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  console.log("User data:", user);

  if (user.id && user.name.firstname && user.name.lastname) {
    return (
      <div className="h-8 w-8 flex items-center justify-center">
        {user.name.firstname} {user.name.lastname}
      </div>
    );
  }

  return (
    // <Link to="/login">
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 transition"
      onClick={handleLogin}
    >
      Get user
    </button>
    // </Link>
  );
};

export default UserAccount;
