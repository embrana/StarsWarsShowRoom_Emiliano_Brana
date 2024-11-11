import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar mb-3 sticky-top" style={{backgroundImage: "url(https://img.freepik.com/free-photo/background_53876-32170.jpg?t=st=1730574678~exp=1730578278~hmac=7749a498e54bee0f6a379f411199353dd8e326be1ef8532f1afb62ee997e3710&w=740)"}}>
            <div>
                <img className="ms-5" src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG37.png" alt="Star Wars Logo" style={{height:"90px"}}/>
            </div>
            <div className="ml-auto dropdown me-5">
                <button className="btn btn-primary dropdown-toggle" type="button" id="favoritesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
                    {store.favorites.length > 0 ? (
                        store.favorites.map((fav, index) => (
                            <li key={index} className="d-flex justify-content-between align-items-center">
                                <span className="dropdown-item">{fav.name}</span>
                                <button
                                    className="btn btn-sm btn-outline-danger ms-2"
                                    onClick={() => actions.removeFavorite(fav.name)}
                                >
                                    ✖️
                                </button>
                            </li>
                        ))
                    ) : (
                        <li><span className="dropdown-item">No favorites added</span></li>
                    )}
                </ul>
            </div>
        </nav>
    );
};
