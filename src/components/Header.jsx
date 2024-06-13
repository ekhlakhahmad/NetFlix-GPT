import React from "react";

const Header = () => {
	return (
		<div className="absolute w-full z-10 text-white bg-gradient-to-t from-slate-950 to-black opacity-90 flex justify-between items-center px-5 py-2 shadow-md">
			<img className="w-36"
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="netFlix Logo"
			/>
			<button className="bg-red-600 rounded-md hover:bg-red-700 text-white px-4 py-2">
				Sign In
			</button>
		</div>
	);
};

export default Header;
