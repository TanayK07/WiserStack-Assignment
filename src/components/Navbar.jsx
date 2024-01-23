import React from "react";
import {
	Text,
	Flex,
	HStack,
	Input,
	Image,
	VStack,
	useMediaQuery,
} from "@chakra-ui/react";
import Logo from "../assets/img/logo.png";
import Profile_Sample from "../assets/img/profile_sample.png";

function Navbar() {
	const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

	return (
		<Flex
			pt={4}
			pb={2}
			px={18}
			justifyContent="space-between"
			alignItems="center"
			minWidth={"100%"}
		>
			<HStack w="20%" spacing={2}>
				<Image src={Logo} alt="Logo" />
				{isLargerThan768 && (
					<Text
						fontFamily={"heading"}
						fontWeight={600}
						fontSize={18}
						color={"#090E82"}
					>
						WiserCount
					</Text>
				)}
			</HStack>
			<Input
				borderRadius={30}
				type="email"
				bgColor={"#ECEDFF"}
				textColor={"#090E82"}
				placeholder="RecentEventID"
				fontFamily={"body"}
				_placeholder={{
					color: "#090E82",
					fontSize: 14,
					fontFamily: "body",
					fontWeight: 500,
				}}
			></Input>
			<HStack justifyContent={"center"} w="25%">
				<Image boxSize={8} src={Profile_Sample} alt="Profile_Sample" />
				{isLargerThan768 && (
					<VStack
						align={"flex-start"}
						justifyContent={"flex-start"}
						spacing={0}
					>
						<Text fontSize={14} fontFamily="body" fontWeight={600}>
							Test User
						</Text>
						<Text fontSize={11} fontFamily="body" fontWeight={400}>
							abc@test.com
						</Text>
					</VStack>
				)}
			</HStack>
		</Flex>
	);
}

export default Navbar;
