import React from "react";
import Header from "./sections/Header";
import TinderCards from "./sections/TinderCards";
import SwipeButtons from "./sections/SwipeButtons";

const HomePage = () => {
	return (
		<div>
			<Header />
			<TinderCards />
			<SwipeButtons />
		</div>
	);
};

export default HomePage;
