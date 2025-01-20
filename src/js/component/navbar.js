import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-0 d-flex justify-content-between">
			<Link to="/">
				<span className="navbar-brand m-3 h1">Contact List</span>
			</Link>
			<div className="ml-5">
				<Link to="/demo">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
		</nav>
	);
};
