import React from "react";
import {
	Text,
	Flex,
	Image,
	VStack,
	HStack,
	Input,
	Button,
} from "@chakra-ui/react";
//import image
import BackgroundImage from "../assets/img/background_home.png";
import Logo from "../assets/img/logo.png";

export default function Home() {
	return (
		<>
			<Flex
				direction={["column", "column", "row"]}
				align="center"
				justify="space-between"
				h="100vh"
				w="100vw"
			>
				<Image src={BackgroundImage} alt="Logo" />

				<VStack
					w={["100vw", "100vw", "50vw"]}
					h="100vh"
					backgroundColor="green"
				>
					<HStack
						h="100vs"
						justifyContent={"center"}
						justify={"center"}
						pt={16}
						pb={8}
					>
						<Image src={Logo} alt="Logo" />
						<Text>WiserStack</Text>
					</HStack>

					<Text> Welcome Back</Text>
					<Text>Enter your Details</Text>
					<VStack w={["90%", "80%", "70%"]}>
						<Flex w="100%" align="start" direction="column">
							<Text my={1}> Email</Text>
							<Input
								borderRadius={30}
								type="email"
								placeholder="Enter your email"
							></Input>
						</Flex>
						<Flex w="100%" align="start" direction="column">
							<Text my={1}> Password</Text>
							<Input
								borderRadius={30}
								type="password"
								placeholder="Enter your password"
							></Input>
							<Text fontSize={12} alignSelf="flex-end">
								Forgot Password?
							</Text>
						</Flex>

						<Button w="100%" borderRadius={"30"} bgColor={"#090E82"}>
							<Text color={"white"}>Sign In</Text>
						</Button>
					</VStack>

					<Text>Don't have an account? Sign Up</Text>
				</VStack>
			</Flex>
		</>
	);
}
