import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Detail from "./Components/Pages/Detail";

import Home from "./Components/Pages/Home";
import Ranking from "./Components/Pages/Ranking";
import Random from "./Components/Pages/Random";
import FAQ from "./Components/Pages/FAQ"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/ranking",
		element: <Ranking />,
	},
	{
		path: "/random",
		element: <Random />,
	},
	{
		path: "/faq",
		element: <FAQ />,
	},
	{
		path: "/anime/:id",
		element: <Detail />
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<div className="container">
		<RouterProvider router={router} />
	</div>
);