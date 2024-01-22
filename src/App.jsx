import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ChakraProvider } from "@chakra-ui/react";

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
			}}
		>
			<ChakraProvider>
				<RouterProvider router={router} />
			</ChakraProvider>
		</div>
	);
}

export default App;
