import { useState, ChangeEvent, FormEvent } from "react";
import { css } from "@emotion/css";
import { TextField, Typography } from "@mui/material";
import axios from "axios";

const registrationOuterContainerCss = css`
	max-width: 500px;
	margin: 0 auto;
`;

const registrationInnerContainerCss = css`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

const Registration = () => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		age: "",
		gender: "",
		weight: "",
		password: "",
		confirmPassword: "",
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
		if (formData.password !== formData.confirmPassword) {
			// Handle password mismatch error
			return;
		}
		try {
			const response = await axios.post("/auth/registration", formData);

			console.log("registered", response.data);

			// setFormData({
			// 	username: "",
			// 	email: "",
			// 	age: "",
			// 	gender: "",
			// 	weight: "",
			// 	password: "",
			// 	confirmPassword: "",
			// });
		} catch (error) {
			console.error("Registration error:", error);
		}
	};

	return (
		<div className={registrationOuterContainerCss}>
			<header>
				<Typography variant="h1">Registration</Typography>
			</header>
			<form onSubmit={handleSubmit} className={registrationInnerContainerCss}>
				<TextField
					id="username"
					name="username"
					label="Username"
					variant="outlined"
					value={formData.username}
					onChange={handleChange}
				/>
				<TextField
					id="email"
					name="email"
					label="Email"
					variant="outlined"
					value={formData.email}
					onChange={handleChange}
				/>
				<TextField
					id="age"
					name="age"
					label="Age"
					variant="outlined"
					value={formData.age}
					onChange={handleChange}
				/>
				<TextField
					id="gender"
					name="gender"
					label="Gender"
					variant="outlined"
					value={formData.gender}
					onChange={handleChange}
				/>
				<TextField
					id="weight"
					name="weight"
					label="Weight"
					variant="outlined"
					value={formData.weight}
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
				<TextField
					id="confirmPassword"
					name="confirmPassword"
					type="password"
					label="Confirm Password"
					variant="outlined"
					value={formData.confirmPassword}
					onChange={handleChange}
				/>
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default Registration;
