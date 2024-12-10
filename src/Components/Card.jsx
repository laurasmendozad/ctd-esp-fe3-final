import { Link } from "react-router-dom";
import { useGlobalStates } from "../Context/Context";

const Card = ({ dentista }) => {
  const { state, dispatch } = useGlobalStates();

  const findFav = state.favs.some((fav) => fav.id === dentista.id);
  console.log(findFav);

  const toggleFav = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAVS", payload: dentista });
  };

  return (
    <div className="card">
      <Link to={`/dentist/${dentista.id}`}>
        <img src="/images/doctor.jpg" alt="" width={"100%"} />
        <p>
          <b>Name: </b> {dentista.name} <br />
          <b>Username: </b>
          {dentista.username}
          <br />
          <b>ID: </b>
          {dentista.id}
        </p>
      </Link>

      <button onClick={toggleFav} className="favButton">
        {findFav ? "🌟 Quitar" : "⭐ Añadir"}
      </button>
    </div>
  );
};

export default Card;
