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
	return (
		<div className={loginOuterContainerCss}>
			<header>
				<Typography variant="h1">Login</Typography>
			</header>
			<Box component="form" className={loginInnerContainerCss}>
				<TextField
					id="outlined-basic"
					label="Username or Email"
					variant="outlined"
				/>
				<TextField id="outlined-basic" label="Password" variant="outlined" />
			</Box>
			<button>Login</button>
		</div>
	);
};

export default Login;
