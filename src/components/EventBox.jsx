import { Text, Flex, VStack, Button, useMediaQuery } from "@chakra-ui/react";

function EventBox() {
	const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

	return (
		<Flex
			px={18}
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			minWidth={"100%"}
		>
			<Flex
				flexDir={["column", "column", "row"]}
				justifyContent={"space-between"}
				w="100%"
				align={"center"}
			>
				<VStack
					w={["80%", "80%", "35%"]}
					align={["center", "flex-start"]}
					justifyContent={"flex-start"}
				>
					<Text
						fontSize={isLargerThan768 ? 14 : 8}
						fontFamily={"body"}
						fontWeight={500}
					>
						WED 25 JAN,2024
					</Text>
					<Text
						fontSize={isLargerThan768 ? 24 : 14}
						fontFamily={"body"}
						fontWeight={500}
					>
						Suarabh's Birthday Party
					</Text>
					<Text
						fontSize={isLargerThan768 ? 16 : 10}
						fontFamily={"body"}
						fontWeight={500}
					>
						HappyDreams Hotel || Hall 5 || New Delhi
					</Text>
				</VStack>

				{isLargerThan768 && (
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
				)}

				<Button
					mt={[4, 4, 0]}
					w={isLargerThan768 ? "15%" : "50%"}
					borderRadius={"30"}
					bgColor={"#090E82"}
					boxShadow="0px 0px 20px 0px rgba(9, 14, 130, 0.35)"
				>
					<Text
						color={"white"}
						fontSize={isLargerThan768 ? 16 : 12}
						fontFamily={"body"}
						fontWeight={400}
					>
						Start Event
					</Text>
				</Button>
			</Flex>
		</Flex>
	);
}

export default EventBox;
