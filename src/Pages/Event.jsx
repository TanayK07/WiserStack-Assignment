import React from "react";
import { Text, Box, HStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import EventBox from "../components/EventBox";
import CardBox from "../components/CardBox";
import Card from "../components/Cards";

export default function Event() {
	return (
		<Box minW={"100vw"} bgColor="grey.100">
			<Navbar />
			<Box
				w="100%"
				h={"100%"}
				px={4}
				justifyItems={"center"}
				alignContent={"center"}
				justifyContent={"center"}
			>
				<Box
					alignContent={"center"}
					justifyContent={"center"}
					w="100%"
					h={"100%"}
					bgColor="grey.100"
					mt={8}
					mb={2}
					px={4}
					py={4}
					borderRadius={16}
					border={"1px solid #E0E0E0"}
				>
					<EventBox />
				</Box>
				<CardBox />
				<HStack w="100%">
					<Card
						cameraName={"Camera 1"}
						location={"Hall 1"}
						imageUrl={"https://source.unsplash.com/random"}
					/>
					<Card
						cameraName={"Camera 1"}
						location={"Hall 1"}
						imageUrl={"https://source.unsplash.com/random"}
					/>
					<Card
						cameraName={"Camera 1"}
						location={"Hall 1"}
						imageUrl={"https://source.unsplash.com/random"}
					/>
					<Card
						cameraName={"Camera 1"}
						location={"Hall 1"}
						imageUrl={"https://source.unsplash.com/random"}
					/>
					<Card
						cameraName={"Camera 1"}
						location={"Hall 1"}
						imageUrl={"https://source.unsplash.com/random"}
					/>
					<Card
						cameraName={"Camera 1"}
						location={"Hall 1"}
						imageUrl={"https://source.unsplash.com/random"}
					/>
				</HStack>
			</Box>
		</Box>
	);
}
