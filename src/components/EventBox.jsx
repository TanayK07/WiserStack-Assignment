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
			//bgColor={"grey"}
			//py={2}
			px={18}
			//	border={"1px"}
			//	borderColor={"#E0E0E0"}
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			minWidth={"100%"}
		>
			<HStack justifyContent={"space-between"} w="100%">
				<VStack w="35%" align={"flex-start"} justifyContent={"flex-start"}>
					<Text
						fontSize={16}
						fontFamily="Montserrat, sans-serif"
						fontStyle="bold"
					>
						WED 25 JAN,2024
					</Text>
					<Text
						fontSize={12}
						fontFamily="Montserrat, sans-serif"
						fontStyle="regular"
					>
						Suarabh's Birthday Party
					</Text>
					<Text
						fontSize={12}
						fontFamily="Montserrat, sans-serif"
						fontStyle="regular"
					>
						HappyDreams Hotel || Hall 5 || New Delhi
					</Text>
				</VStack>

				<VStack w="35%" align={"flex-start"} justifyContent={"flex-start"}>
					<Text
						fontSize={16}
						fontFamily="Montserrat, sans-serif"
						fontStyle="bold"
					>
						<br></br>
					</Text>
					<Text
						fontSize={12}
						fontFamily="Montserrat, sans-serif"
						fontStyle="regular"
					>
						250 attendees
					</Text>
					<Text
						fontSize={12}
						fontFamily="Montserrat, sans-serif"
						fontStyle="regular"
					>
						Min. Commitment
					</Text>
				</VStack>

				<Button
					w="15%"
					borderRadius={"30"}
					bgColor={"#090E82"}
					boxShadow="0px 0px 20px 0px rgba(9, 14, 130, 0.35)"

					//onClick={validateForm}
				>
					<Text color={"white"} fontFamily="Inter, sans-serif">
						Start Event
					</Text>
				</Button>
			</HStack>
		</Flex>
	);
}

export default EventBox;
