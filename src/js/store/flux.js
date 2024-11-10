const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{ title: "FIRST", background: "white", initial: "white" },
				{ title: "SECOND", background: "white", initial: "white" }
			],
			characters: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Función para cambiar el color de fondo
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
			loadPlanets: async () => {
				try {
					const res = await fetch("https://www.swapi.tech/api/planets/");
					const data = await res.json();
					setStore({ planets: data.results });
				} catch (error) {
					console.error("Error al cargar planetas:", error);
				}
			},
			loadVehicles: async () => {
				try {
					const res = await fetch("https://www.swapi.tech/api/vehicles");
					const data = await res.json();
					setStore({ vehicles: data.results });
				} catch (error) {
					console.error("Error al cargar veiculos:", error);
				}
			}
		}
	};
};

export default getState;
