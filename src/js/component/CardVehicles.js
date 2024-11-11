import React, { useContext } from "react";
import { Context } from "../store/appContext";

const CardVehicles = (props) => {
  const { store, actions } = useContext(Context);
	const isFavorite = store.favorites.some(fav => fav.name === props.item.name);
  return (
    <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
      <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + props.uid + ".jpg"} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.item?.name || "Nombre desconocido"}</h5>
        <p className="card-text"></p>
      </div>
      <button
                    className="btn"
                    onClick={() => actions.addFavorite(props.item)}
                >
                    <i className={`fa${isFavorite ? 's' : 'r'} fa-heart`} style={{ color: isFavorite ? 'red' : 'gray' }}></i>
      </button>
    </div>
  )
}

export default CardVehicles