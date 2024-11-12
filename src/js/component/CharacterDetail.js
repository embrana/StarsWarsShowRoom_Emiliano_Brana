import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.getCharacterDetails(`https://swapi.dev/api/people/${id}/`);
    }, [id, actions]);

    const character = store.selectedCharacter;

    if (!character) return <div>Cargando...</div>;

    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = character;

    return (
        <div className="character-detail" style={{ textAlign: "center", padding: "20px" }}>
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                alt={`Imagen de ${name}`}
                onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/300x450"; }}
                style={{ width: "300px", height: "450px", objectFit: "cover", marginBottom: "20px" }}
            />
            <h1>{name}</h1>
            <ul style={{ listStyleType: "none", padding: 0, textAlign: "left", display: "inline-block" }}>
                <li><strong>Altura:</strong> {height}</li>
                <li><strong>Masa:</strong> {mass}</li>
                <li><strong>Color de pelo:</strong> {hair_color}</li>
                <li><strong>Color de piel:</strong> {skin_color}</li>
                <li><strong>Color de ojos:</strong> {eye_color}</li>
                <li><strong>Año de nacimiento:</strong> {birth_year}</li>
                <li><strong>Género:</strong> {gender}</li>
            </ul>
        </div>
    );
};

export default CharacterDetail;

