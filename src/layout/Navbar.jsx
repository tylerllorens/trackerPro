import { NavLink } from "react-router-dom";
import { Link, Links } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <NavLink to="/activities">Activities</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        {token ? <a onClick={() => logout()}>Log out</a> : <></>}
      </nav>
    </header>
  );
}
