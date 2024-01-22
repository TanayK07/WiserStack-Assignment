import { Global } from "@emotion/react";

const Fonts = () => (
	<Global
		styles={`
            @font-face {
                font-family: 'Inter';
                src: url('Inter-Regular.woff2') format('woff2'),
                    url('Inter-Regular.woff') format('woff'),
                    url('Inter-Regular.ttf') format('truetype');
                font-weight: 400;
                font-style: normal;
            }

            @font-face {
                font-family: 'Inter';
                src: url('Inter-Bold.woff2') format('woff2'),
                    url('Inter-Bold.woff') format('woff'),
                    url('Inter-Bold.ttf') format('truetype');
                font-weight: 700;
                font-style: normal;
            }

            @font-face {
                font-family: 'Montserrat';
                src: url('Montserrat-Regular.woff2') format('woff2'),
                    url('Montserrat-Regular.woff') format('woff'),
                    url('Montserrat-Regular.ttf') format('truetype');
                font-weight: 400;
                font-style: normal;
            }

            @font-face {
                font-family: 'Montserrat';
                src: url('Montserrat-Bold.woff2') format('woff2'),
                    url('Montserrat-Bold.woff') format('woff'),
                    url('Montserrat-Bold.ttf') format('truetype');
                font-weight: 700;
                font-style: normal;
            }
        `}
	/>
);

export default Fonts;
