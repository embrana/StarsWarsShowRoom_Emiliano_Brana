import React from "react";

const CardPeople = (props) => {
	return (
		<div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
			<img
				src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`}
				className="card-img-top"
				alt={props.item?.name || "Imagen de personaje"}
			/>
			<div className="card-body">
				<h4 className="card-title">{props.item?.name || "Nombre desconocido"}</h4>
				<p className="card-text">{props.item?.gender || "Género desconocido"}</p>
				<p className="card-text">{props.item?.eye_color || "Color de ojos desconocido"}</p>
			</div>
		</div>
	);
};

export default CardPeople;
