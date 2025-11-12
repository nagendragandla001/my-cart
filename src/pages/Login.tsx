import { useRef, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { persistIntoLocalStorage } from "../utils";
import { useAppDispatch } from "../store/hooks";
import { fetchUserInfo } from "../store/reducers/userReducer";

const Login = () => {
  const { loginUser } = useAppContext();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const userIdRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Username:", userNameRef.current?.value);
    console.log("Password:", passwordRef.current?.value);

    loginUser({
      userName: userNameRef.current?.value ?? "",
      password: passwordRef.current?.value ?? "",
    });

    persistIntoLocalStorage("userName", userNameRef.current?.value ?? "");
    persistIntoLocalStorage("password", passwordRef.current?.value ?? "");

    navigate("/");
  };

  const fetchUserHandler = async () => {
    const id = Number(userIdRef.current?.value) || 1;
    dispatch(fetchUserInfo(id));

    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Login Page</h2>
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            ref={userNameRef}
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            ref={passwordRef}
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>

        <div className="mt-4 border-t pt-4 text-center flex flex-col gap-2">
          <h3> Login with User Id</h3>

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <div className="flex flex-col items-center justify-center">
              <h2 className="font-bold text-red-600">{error}</h2>
            </div>
          ) : (
            <>
              <input
                type="number"
                ref={userIdRef}
                className="border p-2 rounded w-full mt-2"
              />
              <button
                className="bg-blue-500 py-2 px-4 rounded text-white cursor-pointer"
                type="button"
                onClick={fetchUserHandler}
              >
                Fetch User
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
