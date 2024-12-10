import { Link } from "react-router-dom";
import { routes } from "../Components/utils/routes";
import { useGlobalStates } from "../Context/Context";

const Navbar = () => {
  const { dispatch } = useGlobalStates();
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav>
      <Link to={routes.home}>
        {" "}
        <h4>Home</h4>{" "}
      </Link>
      <Link to={routes.contact}>
        {" "}
        <h4>Contact</h4>{" "}
      </Link>
      <Link to={routes.favs}>
        {" "}
        <h4>Favorites</h4>{" "}
      </Link>

      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
