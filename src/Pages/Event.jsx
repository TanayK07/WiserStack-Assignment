import React from "react";
import { Text, Box, HStack, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import EventBox from "../components/EventBox";
import CardBox from "../components/CardBox";
import Card from "../components/Cards";
import Card_Img1 from "../assets/img/card_image/card_img_1.png";
import Card_Img2 from "../assets/img/card_image/card_img_2.png";
import Card_Img3 from "../assets/img/card_image/card_img_3.png";

export default function Event() {
	return (
		<Flex
			//	w="100%"
			h="100%"
			overflowY={"auto"}
			justifyContent={"center"}
			flexDir={"column"}
			minW={"100vw"}
			bgColor="grey.100"
			pt={8}
			pb={16}
			//	overflow="auto" // Add this line
		>
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
					//h={"100%"}
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
						imageUrl={Card_Img1}
					/>
					<Card
						cameraName={"Camera 1"}
						location={"Hall 1"}
						imageUrl={Card_Img2}
					/>
					<Card
						cameraName={"Camera 1"}
						location={"Hall 1"}
						imageUrl={Card_Img3}
					/>

					<Card cameraName={null} location={null} imageUrl={null} />
					<Card cameraName={null} location={null} imageUrl={null} />
					<Card cameraName={null} location={null} imageUrl={null} />
				</HStack>
			</Box>
		</Flex>
	);
}
