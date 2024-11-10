import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3" style={{backgroundImage: "url(https://img.freepik.com/free-photo/background_53876-32170.jpg?t=st=1730574678~exp=1730578278~hmac=7749a498e54bee0f6a379f411199353dd8e326be1ef8532f1afb62ee997e3710&w=740)"}}>
			<div>
				<img className="ms-5" src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG37.png" alt="Star Wars Logo" style={{height:"90px"}}/>
			</div>
			<div className="ml-auto">
					<button className="btn btn-primary me-5">Favorites</button>
			</div>
		</nav>
	);
};