import Login from "./Login";
import Registration from "./Registration";
import PageProvider from "../common/page-provider/PageProvider";

const Authentication = () => {
	return (
		<PageProvider>
			<Login />
			<Registration />
		</PageProvider>
	);
};

export default Authentication;
