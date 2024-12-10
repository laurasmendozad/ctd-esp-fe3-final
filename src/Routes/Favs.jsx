import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Context/Context";

const Favs = () => {
  const { state } = useGlobalStates();

  return (
    <>
      <h1>Favorite Dentists</h1>
      <div className="card-grid">
        {state.favs.map((dentista) => (
          <Card key={dentista.id} dentista={dentista} />
        ))}
      </div>
    </>
  );
};

export default Favs;
