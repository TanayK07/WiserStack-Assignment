import { extendTheme, theme as base } from "@chakra-ui/react";

const fonts = {
	...base.fonts,
	heading: `'Montserrat', ${base.fonts?.heading}, sans-serif`,
	body: `'Inter', ${base.fonts?.body}, sans-serif`,
};

const theme = extendTheme({ fonts });

export default theme;
