import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const VehicleDetail = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        actions.getVehicleDetails(id);
    }, [id, actions]);

    if (!store.selectedVehicle) return <div>Cargando...</div>;

    const { name, model, vehicle_class, manufacturer, cost_in_credits, length, crew, passengers, max_atmosphering_speed, cargo_capacity } = store.selectedVehicle;

    return (
        <div className="vehicle-detail">
            <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
                alt={name || "Imagen de vehículo"}
                onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150"; }}
            />
            <h1>{name}</h1>
            <ul>
                <li><strong>Modelo:</strong> {model}</li>
                <li><strong>Clase:</strong> {vehicle_class}</li>
                <li><strong>Fabricante:</strong> {manufacturer}</li>
                <li><strong>Costo:</strong> {cost_in_credits}</li>
                <li><strong>Longitud:</strong> {length}</li>
                <li><strong>Tripulación:</strong> {crew}</li>
                <li><strong>Pasajeros:</strong> {passengers}</li>
                <li><strong>Velocidad máxima:</strong> {max_atmosphering_speed}</li>
                <li><strong>Capacidad de carga:</strong> {cargo_capacity}</li>
            </ul>
        </div>
    );
};

export default VehicleDetail;
