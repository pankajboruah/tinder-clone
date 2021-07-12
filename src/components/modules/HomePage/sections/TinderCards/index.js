import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { getProfiles } from "../../../../../apis/userProfile";
import TonyStark from "../../../../../assets/logos/tony-stark.png";
import "./index.css";

const TinderCards = () => {
	const [people, setPeople] = useState([
		{ name: "Elon Musk", url: TonyStark },
		{ name: "Tony Stark", url: TonyStark },
	]);

	const fetchTinderProfiles = () => {
		getProfiles()
			.then(({ data: { profiles } }) => {
				setPeople(() =>
					profiles.map(({ name, imageUrl }) => ({
						name,
						url: TonyStark,
					}))
				);
			})
			.catch((err) => console.error(err));
	};

	const swiped = (direction, nameToDelete) => {
		console.log(`removing: ${nameToDelete}`);
	};

	const outOfFrame = (name) => {
		console.log(`${name} left the screen`);
	};

	useEffect(() => {
		fetchTinderProfiles();
	}, []);

	return (
		<div className="tinderCards">
			<div className="tinderCards__cardContainer">
				{people?.map((person) => (
					<TinderCard
						className="swipe"
						key={person.name}
						preventSwipe={["up, down"]}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>
						<div
							className="card"
							style={{ backgroundImage: `url(${person.url})` }}
						>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
};

export default TinderCards;
