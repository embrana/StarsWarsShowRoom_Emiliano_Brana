import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CharactersList from "../component/CharacterList";
import PlanetsList from "../component/PlanetsList";
import VehiclesList from "../component/VehiclesList";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Warriors</h1>
			<div className="d-flex flex-row overflow-auto">
				<CharactersList items={store.characters} />
			</div>
			<h1>Planets</h1>
			<div className="d-flex flex-row overflow-auto">
				<PlanetsList items={store.planets} />
			</div>
			<h1>Vehicles</h1>
			<div className="d-flex flex-row overflow-auto">
				<VehiclesList items={store.vehicles} />
			</div>
		</div>
	);
};