import React, { useState } from "react";
import {
	Text,
	Flex,
	Image,
	VStack,
	HStack,
	Input,
	Button,
} from "@chakra-ui/react";
import "@fontsource/Inter"; // import the font
import "@fontsource/Montserrat";
import { useNavigate } from "react-router-dom";
//import image
import BackgroundImage from "../assets/img/background_home.png";
import Logo from "../assets/img/logo.png";

export default function Home() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const validateForm = () => {
		const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
		const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

		if (emailRegex.test(email) && passwordRegex.test(password)) {
			navigate("/event");
		} else {
			alert("Invalid email or password");
		}
	};
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
						<Text fontFamily="Montserrat, sans-serif" fontStyle="bold">
							WiserStack
						</Text>
					</HStack>

					<Text
						fontSize={32}
						textColor={"#121212"}
						fontFamily="Inter, sans-serif"
					>
						Welcome Back
					</Text>
					<Text fontFamily="Inter, sans-serif">Enter your Details</Text>
					<VStack w={["90%", "80%", "70%"]}>
						<Flex w="100%" align="start" direction="column">
							<Text my={1} fontFamily="Inter, sans-serif">
								Email
							</Text>
							<Input
								borderRadius={30}
								type="email"
								placeholder="abc@work.com"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							></Input>
						</Flex>
						<Flex w="100%" align="start" direction="column">
							<Text my={1} fontFamily="Inter, sans-serif">
								Password
							</Text>
							<Input
								borderRadius={30}
								type="password"
								placeholder="Enter your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							></Input>
							<Text
								fontSize={12}
								alignSelf="flex-end"
								fontFamily="Inter, sans-serif"
							>
								Forgot Password?
							</Text>
						</Flex>
						<Button
							w="100%"
							borderRadius={"30"}
							bgColor={"#090E82"}
							onClick={validateForm}
						>
							<Text color={"white"} fontFamily="Inter, sans-serif">
								Sign In
							</Text>
						</Button>
					</VStack>

					<Text fontFamily="Inter, sans-serif">
						Don't have an account? Sign Up
					</Text>
				</VStack>
			</Flex>
		</>
	);
}
