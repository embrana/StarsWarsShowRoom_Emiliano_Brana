import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import CardPlanets from "./CardPlanets";

const PlanetsList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadPlanets();
    }, [actions]);

    return (
        <div className="planets-list" style={{ display: "flex", flexWrap: "wrap" }}>
            {store.planets.map((planet, index) => (
                <CardPlanets key={index} uid={planet.uid} item={planet} />
            ))}
        </div>
    );
};

export default PlanetsList;

