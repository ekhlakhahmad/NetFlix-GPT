import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterLogin from "./pages/RegisterLogin/RegisterLogin";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<RegisterLogin />} />
				</Routes>
				<Footer/>
			</BrowserRouter>
		</div>
	);
};

export default App;
