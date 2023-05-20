import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	Avatar,
	IconButton,
	Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function RecipeItem({ recipeItem, favorite, setFavorite }) {
	const [expanded, setExpanded] = useState(false);

	function handleClick() {
		if (isAlreadyFavorite) {
			setFavorite((prevFavorites) =>
				prevFavorites.filter((item) => item.idMeal !== recipeItem.idMeal)
			);
		} else {
			setFavorite((prevFavorites) => [...prevFavorites, recipeItem]);
		}
	}

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const isAlreadyFavorite = favorite.some(
		(favorite) => favorite.idMeal === recipeItem.idMeal
	);

	return (
		<div key={recipeItem.idMeal} className="recipe_item_container">
			<Card sx={{ width: 500 }}>
				<CardHeader
					sx={{ textAlign: "center" }}
					avatar={
						<Avatar
							sx={{
								bgcolor: red[500],
							}}
							aria-label="recipe"
						>
							{recipeItem.strCategory.slice(0, 1)}
						</Avatar>
					}
					title={recipeItem.strMeal}
					subheader={recipeItem.strCategory}
				/>
				<CardMedia
					component="img"
					height="300"
					image={recipeItem.strMealThumb}
					alt="Paella dish"
				/>
				<CardContent>
					<Typography
						sx={{ textAlign: "center" }}
						color="text.secondary"
						component={"div"}
					>
						<h3>Ingredients:</h3>
					</Typography>
					<Typography variant="body2" color="text.secondary" component={"div"}>
						<ol>
							<li>{recipeItem.strIngredient1}</li>
							<li>{recipeItem.strIngredient2}</li>
							<li>{recipeItem.strIngredient3}</li>
						</ol>
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton
						aria-label="add to favorites"
						onClick={handleClick}
						color={isAlreadyFavorite ? "error" : "default"}
					>
						<FavoriteIcon />
					</IconButton>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
						<Typography paragraph>Method:</Typography>
						<Typography paragraph>{recipeItem.strInstructions}</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</div>
	);
}
