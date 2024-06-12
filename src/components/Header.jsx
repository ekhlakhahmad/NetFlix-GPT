import React from "react";

const Header = () => {
	return (
		<div className="absolute w-full z-10 text-white bg-gradient-to-t from-slate-950 to-black opacity-80 flex justify-between items-center px-5 py-2 shadow-md">
			<h2>Logo</h2>
			<button className="bg-red-600 rounded-md hover:bg-red-700 text-white px-4 py-2">
				Sign In
			</button>
		</div>
	);
};

export default Header;
