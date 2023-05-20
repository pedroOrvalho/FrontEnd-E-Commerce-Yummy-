import React, { useState, useEffect } from "react";

import SearchForm from "../components/SearchForm";
import RecipeItem from "../components/RecipeItem";

export default function Recipe({ setFavorite, favorite }) {
	const [recipeList, setRecipeList] = useState([]);
	const [userInput, setUserInput] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	const recipeUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;

	useEffect(() => {
		async function getRecipes() {
			try {
				const response = await fetch(recipeUrl);
				const data = await response.json();
				setRecipeList(data.meals);
				setIsLoading(false);
			} catch (error) {
				console.error("Error recieving data");
			}
		}
		getRecipes();
	}, [recipeUrl]);

	if (isLoading) {
		return <div>is loading...</div>;
	}
	return (
		<div className="recipe_container">
			<div className="user_search">
				<SearchForm setUserInput={setUserInput} userInput={userInput} />
			</div>
			<div className="recipe_list_container">
				{recipeList ? (
					recipeList.map((recipeItem) => (
						<RecipeItem
							key={recipeItem.idMeal}
							recipeItem={recipeItem}
							setFavorite={setFavorite}
							favorite={favorite}
						/>
					))
				) : (
					<div className="no_results">
						<p>No recipes found.</p>
					</div>
				)}
			</div>
		</div>
	);
}
