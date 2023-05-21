import React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";

export default function Favorite({ favorite, setFavorite }) {
	function deleteRecipe(id) {
		const newList = favorite.filter((recipe) => recipe.idMeal !== id);
		setFavorite(newList);
	}

	return (
		<div className="favorite_container">
			<h1>Favorite Recipes</h1>
			{favorite.length === 0 ? (
				<div className="favorite_no_results">
					<p>No recipes have been added yet.</p>
				</div>
			) : (
				favorite.map((recipe) => (
					<div className="favorite_item_container">
						<Box
							sx={{
								display: "flex",
								flexWrap: "wrap",
								"& > :not(style)": {
									m: 1,
									width: 725,
									height: 200,
								},
							}}
						>
							<Paper
								sx={{
									display: "flex",
									justifyContent: "center",
									alignContent: "center",
								}}
								elevation={8}
							>
								<div className="item_content_container">
									<div className="item_content">
										<p className="item_name">{recipe.strMeal}</p>
										<p>
											<span>Category: </span>
											{recipe.strCategory}
										</p>
									</div>
									<img src={recipe.strMealThumb} alt={recipe.strTags} />
									<div className="delete_button">
										<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
											<Chip
												variant="outlined"
												color="danger"
												onClick={() => deleteRecipe(recipe.idMeal)}
											>
												Delete
											</Chip>
										</Box>
									</div>
								</div>
							</Paper>
						</Box>
					</div>
				))
			)}
		</div>
	);
}
