const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{ title: "FIRST", background: "white", initial: "white" },
				{ title: "SECOND", background: "white", initial: "white" }
			],
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
			selectedCharacter: null,
			selectedPlanet: null,
			selectedVehicle: null
		},
		actions: {
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			},
			loadCharacters: async () => {
				try {
					const res = await fetch("https://swapi.dev/api/people/");
					const data = await res.json();
					setStore({ characters: data.results });
				} catch (error) {
					console.error("Error al cargar personajes:", error);
				}
			},
			loadVehicles: async () => {
				try {
					const res = await fetch("https://www.swapi.tech/api/vehicles");
					const data = await res.json();
					setStore({ vehicles: data.results });
				} catch (error) {
					console.error("Error al cargar vehículos:", error);
				}
			},
			loadPlanets: async () => {
				try {
					const res = await fetch("https://www.swapi.tech/api/planets");
					const data = await res.json();
					setStore({ planets: data.results });
				} catch (error) {
					console.error("Error al cargar planetas:", error);
				}
			},
			addFavorite: (item) => {
				const store = getStore();
				if (!store.favorites.some(fav => fav.name === item.name)) {
					setStore({ favorites: [...store.favorites, item] });
				}
			},
			removeFavorite: (name) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter(fav => fav.name !== name);
				setStore({ favorites: updatedFavorites });
			},
			getCharacterDetails: async (url) => {
				try {
					const res = await fetch(url);
					const data = await res.json();
					setStore({ selectedCharacter: data });
				} catch (error) {
					console.error("Error al cargar detalles del personaje:", error);
				}
			},
			loadPlanetDetails: async (id) => {
				try {
					const res = await fetch(`https://www.swapi.tech/api/planets/${id}`);
					if (!res.ok) {
						throw new Error(`Error en la respuesta de la API: ${res.status} ${res.statusText}`);
					}
					const data = await res.json();
					setStore({ selectedPlanet: data.result.properties });
				} catch (error) {
					console.error("Error al cargar detalles del planeta:", error.message);
					setStore({ selectedPlanet: null }); 
				}
			},
			getVehicleDetails: async (id) => { 
                try {
                    const res = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
                    const data = await res.json();
                    setStore({ selectedVehicle: data.result.properties });
                } catch (error) {
                    console.error("Error al cargar detalles del vehículo:", error);
                    setStore({ selectedVehicle: null });
                }
            },
		},
	};
};

export default getState;

