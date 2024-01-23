import { Text, HStack, Image, VStack } from "@chakra-ui/react";
import SettingsLogo from "../assets/img/icon/settings.png";

function CardBox() {
	return (
		<HStack
			w="95%"
			spacing={"0"}
			justifyContent="space-between"
			alignItems="flex-start"
			width="100%"
			minWidth={"100%"}
		>
			<VStack
				w="80%"
				h={"100%"}
				p={4}
				spacing={"0"}
				justifyContent="space-between"
				alignItems="flex-start"
			>
				<Text fontSize={20} fontFamily={"body"} fontWeight={500}>
					Camera Setup
				</Text>
				<Text
					fontSize={14}
					color={"#7D7D7D"}
					fontFamily={"body"}
					fontWeight={500}
				>
					Finalise current event’s camera setup & get started{" "}
				</Text>
			</VStack>
			<Image mt={4} boxSize={6} src={SettingsLogo} alt="SettingsLogo" />
		</HStack>
	);
}

export default CardBox;
