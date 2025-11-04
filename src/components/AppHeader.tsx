import { Truck } from "lucide-react";
import UserAccount from "./UserAccount";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
import ErrorBoundary from "./ErrorBoundary";

const AppHeader = () => {
  return (
    <header className="flex flex-row items-center justify-between p-4 bg-transparent border-b border-gray-300 shadow-md">
      <Link to="/">
        <h1 className="text-lg font-semibold text-blue-800">
          <Truck className="inline-block mr-2 text-blue-800" size={24} />
          MyCart
        </h1>
      </Link>
      <div className="flex flex-row items-center space-x-6">
        <ErrorBoundary>
          <NavItems />
        </ErrorBoundary>
        <UserAccount />
      </div>
    </header>
  );
};

export default AppHeader;
