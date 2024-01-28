import React, { useState, ChangeEvent, FormEvent } from "react";
import { css } from "@emotion/css";
import { Box, TextField, Typography } from "@mui/material";

const loginOuterContainerCss = css`
	max-width: 500px;
	margin: 0 auto;
`;

const loginInnerContainerCss = css`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await fetch("/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			if (!response.ok) {
				throw new Error("Login failed");
			}
			const data = await response.json();
			// Handle successful login (e.g., store token)
		} catch (error) {
			console.error("Login error:", error);
			// Handle error (e.g., show error message)
		}
	};

	return (
		<div className={loginOuterContainerCss}>
			<header>
				<Typography variant="h1">Login</Typography>
			</header>
			<form onSubmit={handleSubmit} className={loginInnerContainerCss}>
				<TextField
					id="email"
					name="email"
					label="Username or Email"
					variant="outlined"
					value={formData.email}
					onChange={handleChange}
				/>
				<TextField
					id="password"
					name="password"
					type="password"
					label="Password"
					variant="outlined"
					value={formData.password}
					onChange={handleChange}
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
