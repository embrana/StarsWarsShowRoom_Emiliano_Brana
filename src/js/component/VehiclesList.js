import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardVehicles from "./CardVehicles";

const VehiclesList = () => {
    const { store } = useContext(Context);

    return (
        <div className="vehicles-list" style={{ display: "flex", flexWrap: "wrap" }}>
            {store.vehicles.map((vehicle, index) => (
                <CardVehicles key={index} uid={index + 1} item={vehicle} />
            ))}
        </div>
    );
};

export default VehiclesList;