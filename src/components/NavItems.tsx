import { Link } from "react-router-dom";

const NavItems = () => {
  // throw new Error("NavItems component error", { cause: "RUN_TIME" }); // For testing ErrorBoundary

  return (
    <div className="flex flex-row space-x-4">
      <Link to="/products">
        <button className="text-blue-800 px-4 py-2 cursor-pointer hover:bg-blue-100 hover:rounded">
          Products
        </button>
      </Link>
      <Link to="/about">
        <button className="text-blue-800 px-4 py-2 cursor-pointer hover:bg-blue-100 hover:rounded">
          About
        </button>
      </Link>

      <Link to="/contact">
        <button className="text-blue-800 px-4 py-2 cursor-pointer hover:bg-blue-100 hover:rounded">
          Contact
        </button>
      </Link>
    </div>
  );
};

export default NavItems;
