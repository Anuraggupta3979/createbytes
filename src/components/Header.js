import classes from "./Header.module.css";
import { useDispatch } from "react-redux";
// import { authActions } from "../store";
import { authActions } from "../store/auth-slice";
import { useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Anurag Gupta</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
