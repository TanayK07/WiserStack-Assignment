import React from "react";
import { Text, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import EventBox from "../components/EventBox";

export default function Event() {
	return (
		<Box minW={"100vw"} bgColor="grey.100" minHeight="100vh">
			<Navbar />
			{/* //<Text>Event</Text> */}
			<EventBox />
		</Box>
	);
}
