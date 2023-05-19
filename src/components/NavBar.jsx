import React from "react";
import logo from "../images/navbar/logo_chef.png";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";

export default function Navbar({ favorite }) {
	return (
		<div className="navbar_container">
			<div className="nav_logo_container">
				<img className="nav_logo" src={logo} alt="logo" />
				<h1>YUMMY</h1>
			</div>
			<ul className="nav_list">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/recipe">Recipe</Link>
				</li>
				<li>
					<Link to="/favorite">
						<Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
							<Badge color="primary" badgeContent={favorite.length} showZero>
								Favorite
							</Badge>
						</Stack>
					</Link>
				</li>
				<li>
					<Link to="contact">Contact</Link>
				</li>
			</ul>
		</div>
	);
}
