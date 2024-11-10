import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardPlanets from "./CardPlanets";

const PlanetsList = () => {
    const { store } = useContext(Context);

    return (
        <div className="planets-list" style={{ display: "flex", flexWrap: "wrap" }}>
            {store.planets.map((planet, index) => (
                <CardPlanets key={index} uid={index + 1} item={planet} />
            ))}
        </div>
    );
};

export default PlanetsList;