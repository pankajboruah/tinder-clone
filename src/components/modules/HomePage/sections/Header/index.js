import React from "react";
import IconButton from "@material-ui/core/IconButton";

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

import TinderLogo from "../../../../../assets/logos/TinderLogo.svg";
import "./index.css";

const Header = () => {
	return (
		<div className="header">
			<IconButton>
				<PersonIcon
					fontSize="large"
					className="header__icon"
				></PersonIcon>
			</IconButton>
			<img className="header__logo" src={TinderLogo} alt="" />
			<IconButton>
				<ForumIcon
					fontSize="large"
					className="header__icon"
				></ForumIcon>
			</IconButton>
		</div>
	);
};

export default Header;
