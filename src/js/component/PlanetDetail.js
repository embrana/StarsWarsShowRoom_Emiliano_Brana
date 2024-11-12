import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetDetail = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadPlanetDetails(id);
    }, [id, actions]);

    const planet = store.selectedPlanet;

    if (!planet) return <div>Cargando...</div>;

    const { name, diameter, rotation_period, orbital_period, climate, surface_water } = planet;

    return (
        <div className="planet-detail" style={{ textAlign: "center", padding: "20px" }}>
            <img 
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
                alt={`Imagen de ${name}`} 
                onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150"; }} 
                style={{ width: "300px", height: "auto", marginBottom: "20px" }}
            />
            <h1>{name}</h1>
            <ul style={{ listStyleType: "none", padding: 0, textAlign: "left", display: "inline-block" }}>
                <li><strong>Diámetro:</strong> {diameter}</li>
                <li><strong>Periodo de rotación:</strong> {rotation_period}</li>
                <li><strong>Periodo orbital:</strong> {orbital_period}</li>
                <li><strong>Clima:</strong> {climate}</li>
                <li><strong>Superficie de agua:</strong> {surface_water}</li>
            </ul>
        </div>
    );
};

export default PlanetDetail;


