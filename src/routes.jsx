import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Event from "./Pages/Event";

export const router = createBrowserRouter([
	{
		index: true,
		path: "/",
		element: <Home />,
	},
	{
		path: "/event",
		element: <Event />,
	},
]);
