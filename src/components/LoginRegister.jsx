import React, { useRef, useState } from "react";

const LoginRegister = () => {
	const [issignIn, setIsSignIn] = useState(false);
	const [nameValid, setNameValid] = useState();
	const [emailValid, setEmailValid] = useState();
	const [passwordValid, setPasswordValid] = useState();
	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const signInhandle = () => {
		setIsSignIn(!issignIn);
	};

	const handleSubmitBtn = (e) => {
		e.preventDefault();
	};

	const handleName = (e) => {
		let name = e.target.value;
		if (name.length < 5) {
			setNameError(true);
		} else {
			setNameError(false);
		}
	};

	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	const handleEmail = (e) => {
		let email = e.target.value;
		if (!email.match(emailRegex)) {
			setEmailError(true);
		} else {
			setEmailError(false);
		}
	};

	const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
	const handlePassword = (e) => {
		let password = e.target.value;
		if (!password.match(passwordRegex)) {
			setPasswordError(true);
		} else {
			setPasswordError(false);
		}
	};

	const handleSubmit = () => {};

	return (
		<div className="min-h-screen">
			<div className="absolute min-h-screen">
				<img
					className="h-screen object-cover w-screen"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
					alt="background image"
				/>
			</div>
			<div className="opacity-80 pt-28 flex justify-center items-center">
				<form
					action=""
					onSubmit={handleSubmit}
					className="w-3/4 max-w-md flex flex-col justify-center p-10 bg-slate-950 text-white rounded-md">
					<h1 className="py-4 text-4xl font-bold">
						{issignIn ? "Sign Up" : "Sign In"}
					</h1>
					{issignIn && (
						<>
							<input
								onChange={handleName}
								className="mt-4 border p-2 rounded-md bg-slate-700"
								type="text"
								placeholder="Full name"
								required
							/>
							{nameError ? (
								<span className="text-red-600">
									name legnth must be greater than 5 character
								</span>
							) : (
								""
							)}
						</>
					)}
					<input
						onChange={handleEmail}
						className="mb-4 mt-8 border p-2 rounded-md bg-slate-700"
						type="text"
						placeholder="Email or mobile number"
						required
						inputMode="email"
						value={emailValid}
					/>
					{emailError ? (
						<span className="text-red-600">Invalid Email</span>
					) : (
						""
					)}
					<input
						onChange={handlePassword}
						className="my-4 border p-2 rounded-md bg-slate-700"
						type="password"
						placeholder="Enter your Password"
						required
						value={passwordValid}
					/>
					{passwordError ? (
						<span className="text-red-600">incorrect Password</span>
					) : (
						""
					)}
					<button
						className="my-4 border p-2 rounded-md bg-red-600 text-white font-bold text-md"
						onClick={handleSubmitBtn}>
						{issignIn ? "Sign Up" : "Sign In"}
					</button>
					<p className="text-right hover:underline cursor-pointer">
						Forgot password?
					</p>
					<div className="flex items-center mb-4">
						<input
							id="default-checkbox"
							type="checkbox"
							value=""
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
						/>
						<label
							htmlFor="default-checkbox"
							className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
							Remember Password
						</label>
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
