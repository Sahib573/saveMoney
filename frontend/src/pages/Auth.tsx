import { Navigate } from "react-router-dom";

const Auth :React.FC= ({ children } : any) => {
  if (localStorage.getItem("token")) {
    return children;
  }

  return <Navigate to="/auth/signin" />;
};
export default Auth;