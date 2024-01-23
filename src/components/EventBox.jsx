import React from "react";
import {
	Text,
	Flex,
	HStack,
	Input,
	Image,
	VStack,
	Button,
} from "@chakra-ui/react";
import Logo from "../assets/img/logo.png";
import Profile_Sample from "../assets/img/profile_sample.png";

function EventBox() {
	return (
		<Flex
			bgColor={"cyan"}
			px={18}
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			minWidth={"100%"}
		>
			<HStack justifyContent={"space-between"} w="100%">
				<VStack
					bgColor={"pink"}
					w="35%"
					align={"flex-start"}
					justifyContent={"flex-start"}
				>
					<Text fontSize={14} fontFamily={"body"} fontWeight={500}>
						WED 25 JAN,2024
					</Text>
					<Text fontSize={24} fontFamily={"body"} fontWeight={500}>
						Suarabh's Birthday Party
					</Text>
					<Text fontSize={16} fontFamily={"body"} fontWeight={500}>
						HappyDreams Hotel || Hall 5 || New Delhi
					</Text>
				</VStack>

				<VStack w="35%" align={"flex-start"} justifyContent={"flex-start"}>
					<Text fontSize={16} fontFamily={"body"} fontWeight={500}>
						<br></br>
					</Text>
					<Text fontSize={16} fontFamily={"body"} fontWeight={500}>
						250 attendees
					</Text>
					<Text
						fontSize={16}
						fontFamily={"body"}
						color={"#7D7D7D"}
						fontWeight={500}
					>
						Min. Commitment
					</Text>
				</VStack>

				<Button
					w="15%"
					borderRadius={"30"}
					bgColor={"#090E82"}
					boxShadow="0px 0px 20px 0px rgba(9, 14, 130, 0.35)"
				>
					<Text
						color={"white"}
						//fontSize={16}
						fontFamily={"body"}
						fontWeight={400}
					>
						Start Event
					</Text>
				</Button>
			</HStack>
		</Flex>
	);
}

export default EventBox;
