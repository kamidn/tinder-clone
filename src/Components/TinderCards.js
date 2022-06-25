import { Divider } from "@mui/material";
import React, { useState } from "react";
import TinderCard from "react-tinder-card"
import "./TinderCards.css";

function TinderCards() {
	const [people, setPeople] = useState([
		{
			name: "Pikachu",
			url: "https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png"
		},
		{
			name: "Bulbasaur",
			url: "https://upload.wikimedia.org/wikipedia/en/2/28/Pok%C3%A9mon_Bulbasaur_art.png"
		},
		{
			name: "Meowth",
			url: "https://upload.wikimedia.org/wikipedia/en/a/aa/Pok%C3%A9mon_Meowth_art.png"
		},
	]);

	const swiped = (direction, nameToDelete) => {
		console.log("removing: " + nameToDelete);
	};

	const outOfFrame = (name) => {
		console.log(name + " left the screen");
	};

	return (
		<div className="tinderCards">
			<div className="tinderCards__cardContainer">
				{
					people.map((person) => (
					<TinderCard
						className="swipe"
						key="person.name"
						preventSwipe={["up", "down"]}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>
						<div
							style={{ backgroundImage: `url(${person.url})` }}
							className="card"
						>
							<h3>{person.name}</h3>
						</div>	
					</TinderCard>
					
				))};
			</div>
		</div>
	);
};

export default TinderCards