// src/component/CardPeople.js
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardPeople = (props) => {
    const { store, actions } = useContext(Context);
    const isFavorite = store.favorites.some(fav => fav.name === props.item.name);

    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`}
                className="card-img-top"
                alt="Imagen de personaje"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150"; }}
            />
            <div className="card-body">
                <h5 className="card-title">{props.item?.name || "Nombre desconocido"}</h5>
            </div>
            <button
                className="btn"
                onClick={() => actions.addFavorite(props.item)}
            >
                <i className={`fa${isFavorite ? 's' : 'r'} fa-heart`} style={{ color: isFavorite ? 'red' : 'gray' }}></i>
            </button>
            <Link to={`/character/${props.uid}`} className="btn btn-primary mt-2">
                Ver más
            </Link>
        </div>
    );
};

export default CardPeople;



