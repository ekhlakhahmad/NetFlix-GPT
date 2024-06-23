import React from "react";
import "./Header.css";
import netflixLogo from "../../assets/Netflix-Logo.png";

const Header = () => {
	return (
		<div className="header">
			<img src={netflixLogo} alt="netFlix Logo" />
			{/* <button className="signInBtn">Sign In</button> */}
		</div>
	);
};

export default Header;
