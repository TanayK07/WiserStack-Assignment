import { Box, Image, Text, VStack } from "@chakra-ui/react";
import CameraImg from "../assets/img/card_image/null_img.png";

export default function Card({ cameraName, location, imageUrl }) {
	if (!imageUrl && !cameraName) {
		return (
			<VStack
				spacing={0}
				justifyContent={"center"}
				w={["100%", "30%"]}
				h={"100%"}
			>
				<Image
					border={"1px solid #E0E0E0"}
					borderRadius={16}
					src={CameraImg}
					alt="Camera"
					w={["100px", "180px"]}
					h={["150px", "250px"]}
					objectFit="cover"
				/>
				<Box justifyContent={"center"} px="6">
					<Text fontWeight="semibold" fontSize={[10, 12]}>
						<br></br>
					</Text>
					<Text fontSize="xs" color="gray.500">
						<br></br>
					</Text>
				</Box>
			</VStack>
		);
	} else {
		return (
			<VStack
				spacing={0}
				justifyItems={""}
				justifyContent={"center"}
				w={["100%", "30%"]}
				h={"100%"}
			>
				<Image
					border={"1px solid #E0E0E0"}
					borderRadius={16}
					src={imageUrl}
					alt={cameraName}
					w={["100px", "180px"]}
					h={["150px", "250px"]}
					objectFit="cover"
				/>
				<Box textAlign={"center"} justifyContent={"center"} px="6">
					<Text fontFamily={"body"} fontWeight={500} fontSize={[8, 10, 16]}>
						{cameraName}
					</Text>
					<Text
						fontFamily={"body"}
						color={"#090E82"}
						fontWeight={500}
						fontSize={[6, 8, 14]}
					>
						{location}
					</Text>
				</Box>
			</VStack>
		);
	}
}
