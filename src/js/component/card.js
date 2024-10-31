import React from "react";

const Card = (props) => {

    return (
        <div className="card" style={{width:"18rem"}}>
            <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.uid+".jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
            </div>
        </div>
    )
}

export default Card;