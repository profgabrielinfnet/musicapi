import Home from "../Home";
import { useContext } from "react";
import UserContext from "../../context/user";
import Login from "../Login";

export default function Wrapper() {
  const userData = useContext(UserContext);
  return userData.user != null ? <Home></Home> : <Login />;
}
