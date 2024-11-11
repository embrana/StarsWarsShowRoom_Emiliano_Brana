import React, { useContext } from "react";
import { Context } from "../store/appContext";

const CardPeople = (props) => {
    const { store, actions } = useContext(Context);
	const isFavorite = store.favorites.some(fav => fav.name === props.item.name);


    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img
                src={"https://starwars-visualguide.com/assets/img/characters/" + props.uid + ".jpg"}
                className="card-img-top"
                alt={props.item?.name || "Imagen de personaje"}
            />
            <div className="card-body">
                <h4 className="card-title">{props.item?.name || "Nombre desconocido"}</h4>
                <p className="card-text">{props.item?.gender || "Género desconocido"}</p>
                <p className="card-text">{props.item?.eye_color || "Color de ojos desconocido"}</p>
				 <button
                    className="btn"
                    onClick={() => actions.addFavorite(props.item)}
                >
                    <i className={`fa${isFavorite ? 's' : 'r'} fa-heart`} style={{ color: isFavorite ? 'red' : 'gray' }}></i>
                </button>
            </div>
        </div>
    );
};

export default CardPeople;

