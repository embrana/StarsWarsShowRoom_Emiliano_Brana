import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardPeople from "./CardPeople";

const CharactersList = () => {
    const { store } = useContext(Context);

    return (
        <div className="characters-list" style={{ display: "flex", flexWrap: "wrap" }}>
            {store.characters.map((character, index) => (
                <CardPeople key={index} uid={index + 1} item={character} />
            ))}
        </div>
    );
};

export default CharactersList;