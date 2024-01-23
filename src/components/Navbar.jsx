import React from "react";
import { Text, Flex, HStack, Input, Image, VStack } from "@chakra-ui/react";
import Logo from "../assets/img/logo.png";
import Profile_Sample from "../assets/img/profile_sample.png";

function Navbar() {
	return (
		<Flex
			//bgColor={"green"}
			pt={4}
			pb={2}
			//backgroundColor={"black"}
			px={18}
			justifyContent="space-between"
			alignItems="center"
			//width="100%"
			minWidth={"100%"}
		>
			<HStack
				w="20%"
				// bgColor={"purple"}
				spacing={2}
			>
				<Image src={Logo} alt="Logo" />
				<Text
					fontFamily={"heading"}
					fontWeight={600}
					fontSize={18}
					color={"#090E82"}
				>
					WiserCount
				</Text>
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
			<HStack
				justifyContent={"center"}
				w="25%"
				//bgColor="gray"
			>
				<Image boxSize={8} src={Profile_Sample} alt="Profile_Sample" />
				<VStack align={"flex-start"} justifyContent={"flex-start"} spacing={0}>
					<Text fontSize={14} fontFamily="body" fontWeight={600}>
						Test User
					</Text>
					<Text fontSize={11} fontFamily="body" fontWeight={400}>
						abc@test.com
					</Text>
				</VStack>
			</HStack>
		</Flex>
	);
}

export default Navbar;
