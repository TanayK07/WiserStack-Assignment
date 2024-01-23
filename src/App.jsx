import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "./assets/Fonts";

function App() {
	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				overflow: "hidden",
				fontFamily: "inter",
			}}
		>
			<ChakraProvider>
				<RouterProvider router={router} />
			</ChakraProvider>
		</div>
	);
}

export default App;
