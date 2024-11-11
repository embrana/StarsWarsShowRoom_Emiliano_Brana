import React from "react";

const CardVehicles = (props) => {
  return (
    <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
      <img src={"https://starwars-visualguide.com/assets/img/vehicles/" + props.uid + ".jpg"} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.item?.name || "Nombre desconocido"}</h5>
        <p className="card-text"></p>
      </div>
    </div>
  )
}

export default CardVehicles