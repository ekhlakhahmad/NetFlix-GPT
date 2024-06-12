import React, { useState } from "react";

const LoginRegister = () => {
	const [issignIn, setIsSignIn] = useState(false);

	const signInhandle = () => {
		setIsSignIn(!issignIn);
	};
	return (
		<div className="min-h-screen">
			<div className="absolute min-h-screen">
				<img
					className="h-full object-cover w-screen"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
					alt="background image"
				/>
			</div>
			<div className="opacity-80 pt-28 flex justify-center items-center">
				<form
					action=""
					className="w-3/4 max-w-96 flex flex-col justify-center p-10 bg-slate-950 text-white rounded-md">
					<h1 className="py-4 text-4xl font-bold">
						{issignIn ? "Sign Up" : "Sign In"}
					</h1>
					{issignIn && (
						<input
							className="my-4 border p-2 rounded-md bg-slate-700"
							type="text"
							placeholder="Full name"
						/>
					)}
					<input
						className="my-4 border p-2 rounded-md bg-slate-700"
						type="text"
						placeholder="Email or mobile number"
						inputMode="email"
					/>
					<input
						className="my-4 border p-2 rounded-md bg-slate-700"
						type="password"
						placeholder="Enter your Password"
					/>
					<button className="my-4 border p-2 rounded-md bg-red-600 text-white font-bold text-md">
						{issignIn ? "Sign Up" : "Sign In"}
					</button>
					<p className="text-right hover:underline cursor-pointer">
						Forgot password?
					</p>
					<div className="text-md">
						<input className="text-2xl my-4" type="checkbox" id="checkBox" />
						<label htmlFor="checkbox">Remember me</label>
					</div>
					<div className="flex gap-1 justify-center ">
						New to NetFlix?{" "}
						<h4
							onClick={signInhandle}
							className="font-bold hover:underline cursor-pointer">
							{issignIn ? "Sign In" : "Sign up Now."}
						</h4>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginRegister;
