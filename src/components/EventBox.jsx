import React from "react";
import { Text, Flex, HStack, Input, Image, VStack } from "@chakra-ui/react";
import Logo from "../assets/img/logo.png";
import Profile_Sample from "../assets/img/profile_sample.png";

function EventBox() {
	return (
		<Flex
			bgColor={"grey"}
			py={2}
			px={18}
			border={"1px"}
			borderColor={"#E0E0E0"}
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			minWidth={"100%"}
		>
			<HStack w="100%">
				<VStack w="35%">
					<Text
						fontSize={16}
						fontFamily="Montserrat, sans-serif"
						fontStyle="bold"
					>
						Event Name
					</Text>
					<Text
						fontSize={12}
						fontFamily="Montserrat, sans-serif"
						fontStyle="regular"
					>
						Event Description
					</Text>
				</VStack>
			</HStack>
		</Flex>
	);
}

export default EventBox;
