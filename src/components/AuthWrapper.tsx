import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

interface AuthWrapperProps {
  children: React.ReactNode;
  isProtected: boolean;
}
const AuthWrapper = ({ children, isProtected }: AuthWrapperProps) => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

  if (!isProtected) {
    return <>{children}</>;
  }

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  return <>{children}</>;
};

export default AuthWrapper;
