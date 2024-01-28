import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, Route

import Login from "./components/authentication/Login";
import Registration from "./components/authentication/Registration";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/registration" element={<Registration />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
};

const Home = () => {
	return <div>HOME</div>;
};

export default App;
