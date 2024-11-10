import React, { useState, useEffect, useContext } from "react"
import { Context } from "../store/appContext";
import "../../styles/home.css";
// import CardPeople from "../component/cardPeople";
// import CardPlanets from "../component/CardPlanets";
// import CardVehicles from "../component/CardVehicles"
import CharactersList from "../component/CharacterList"
import PlanetsList from "../component/PlanetsList";
import VehiclesList from "../component/VehiclesList";

export const Home = () => {

	const [people, setPeople] = useState([])
	const [planet, setPlanet] = useState([])
	const [vehicle, setVehicle] = useState([])

	const loadPeopleWithDetails = async () => {
		const response = await fetch("https://www.swapi.tech/api/people")
		const data = await response.json()

		const peopleDetailsPromises = data.results.map(async (people) => {
			const resPeople = await fetch(people.url);
			const peopleDetails = await resPeople.json();
			return peopleDetails.result;
		});

		const newPeopleList = await Promise.all(peopleDetailsPromises); // <--- This is the magic line
		setPeople(newPeopleList);
	};

	useEffect(() => {

		loadPeopleWithDetails()

		fetch("https://www.swapi.tech/api/planets")
			.then(res => res.json())
			.then(data => setPlanet(data.results))
			.catch(err => console.error(err));

		fetch("https://www.swapi.tech/api/vehicles")
			.then(res => res.json())
			.then(data => setVehicle(data.results))
			.catch(err => console.error(err));

	}, [])

	return <div className="text-center mt-5">
		<h1>Warriors</h1>
		<div className="d-flex flex-row overflow-auto">

			{/* {
				people.length == 0 && <div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			}

			{
				people.map((item, index) => {
					return (
						<CardPeople key={index} item={item.properties} uid={item.uid}> </CardPeople>
					)
				})
			} */}

			{/* <h1>Star Wars Characters</h1> */}
			<CharactersList />
		</div>
		<h1>Planets</h1>
		<div className="d-flex flex-row overflow-auto">
			{/* {
				planet.map((item, index) => {
					return (
						<CardPlanets key={index} name={item.name} uid={item.uid}></CardPlanets>
					)
				})
			} */}
			<PlanetsList />
		</div>
		<h1>Vehicles</h1>
		<div className="d-flex flex-row overflow-auto">
			{/* {
				vehicle.map((item, index) => {
					return (
						<CardVehicles key={index} name={item.name} uid={item.uid}></CardVehicles>
					)
				})
			} */}
			<VehiclesList />
		</div>
	</div>

};

