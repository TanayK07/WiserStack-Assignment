import React from "react";
import { Box, Image, Text, Flex, VStack } from "@chakra-ui/react";

export default function Card({ cameraName, location, imageUrl }) {
	return (
		<VStack
			spacing={0}
			justifyItems={""}
			justifyContent={"center"}
			w={"100%"}
			h={"100%"}
		>
			<Image
				borderRadius={16}
				src={imageUrl}
				alt={cameraName}
				w="180px"
				h="250px"
				objectFit="cover"
			/>
			<Box justifyContent={"center"} px="6">
				<Text fontWeight="semibold" fontSize={12}>
					{cameraName}
				</Text>
				<Text fontSize="xs" color="gray.500">
					{location}
				</Text>
			</Box>
		</VStack>
	);
}
