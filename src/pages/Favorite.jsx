import React from "react";

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
					<div className="favorite_item_container" key={recipe.idMeal}>
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
				))
			)}
		</div>
	);
}
