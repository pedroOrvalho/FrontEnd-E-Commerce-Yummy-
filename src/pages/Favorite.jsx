import React from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { Icon } from "@mui/material";

export default function Favorite({ favorite, setFavorite }) {
	function deleteRecipe(id) {
		const newList = favorite.filter((recipe) => recipe.idMeal !== id);
		setFavorite(newList);
	}

	return (
		<div className="favorite_container">
			<h1>Favorite Recipes</h1>
			{favorite.map((recipe) => (
				<div className="favorite_item_container" key={recipe.idMeal}>
					<div className="item_content">
						<p className="item_name">{recipe.strMeal}</p>
						<p>
							<span>Category: </span>
							{recipe.strCategory}
						</p>
					</div>
					<img src={recipe.strMealThumb} alt={recipe.strTags} />
					<Icon>
						<button onClick={() => deleteRecipe(recipe.idMeal)}>
							<DeleteForeverRoundedIcon />
						</button>
					</Icon>
				</div>
			))}
		</div>
	);
}
