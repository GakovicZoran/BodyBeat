import { css } from "@emotion/css";
import { Box, TextField, Typography } from "@mui/material";

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
	return (
		<div className={registrationOuterContainerCss}>
			<header>
				<Typography variant="h1">Registration</Typography>
			</header>
			<Box component="form" className={registrationInnerContainerCss}>
				<TextField id="outlined-basic" label="Username" variant="outlined" />
				<TextField id="outlined-basic" label="Email" variant="outlined" />
				<TextField id="outlined-basic" label="Age" variant="outlined" />
				<TextField id="outlined-basic" label="Gender" variant="outlined" />
				<TextField id="outlined-basic" label="Weight" variant="outlined" />
				<TextField id="outlined-basic" label="Height" variant="outlined" />
				<TextField id="outlined-basic" label="Password" variant="outlined" />
				<TextField
					id="outlined-basic"
					label="Confirm Password"
					variant="outlined"
				/>
			</Box>
			<button>Register</button>
		</div>
	);
};

export default Registration;
