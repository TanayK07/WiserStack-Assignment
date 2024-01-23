import { Text, HStack, Image, VStack } from "@chakra-ui/react";
import SettingsLogo from "../assets/img/icon/settings.png";

function CardBox() {
	return (
		<HStack
			//bgColor={"green"}
			w="95%"
			h={"100%"}
			//mx={4}
			//px={4}
			//py={4}
			spacing={"0"}
			//	border={"1px"}
			//borderColor={"#E0E0E0"}
			justifyContent="space-between"
			alignItems="flex-start"
			width="100%"
			minWidth={"100%"}
		>
			<VStack
				//	bgColor={"pink"}
				w="80%"
				h={"100%"}
				//	my={8}
				//mx={4}
				px={4}
				py={4}
				spacing={"0"}
				//border={"1px"}
				//borderColor={"#E0E0E0"}
				justifyContent="space-between"
				alignItems="flex-start"
				//width="100%"
				//minWidth={"100%"}
			>
				<Text
					fontSize={16}
					fontFamily="Montserrat, sans-serif"
					fontStyle="regular"
				>
					Camera Setup
				</Text>
				<Text
					fontSize={8}
					fontFamily="Montserrat, sans-serif"
					fontStyle="regular"
				>
					Finalise current event’s camera setup & get started{" "}
				</Text>
			</VStack>
			<Image mt={4} src={SettingsLogo} alt="SettingsLogo" />
		</HStack>
	);
}

export default CardBox;
