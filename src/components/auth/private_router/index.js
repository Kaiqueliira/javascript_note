import { Navigate } from "react-router-dom";

const privateRouter = ({ children }) =>
  localStorage.getItem("user") ? children : <Navigate to="/login" />;

export default privateRouter;
