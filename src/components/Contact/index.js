import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import Image from "next/image";

const Contact = () =>
{

	return (
		<Box
			px={12}
			width="100%"
			display="flex"
			height="100vh"
		>
			<Box display="flex" flexDirection="column">
				<Heading>Contact</Heading>
				<Text
					as="a"
					target="_blank"
					href="mailto:michael.ehson@gmail.com"
					cursor="pointer"
					py="3"
				>
				Email: michael.ehson@gmail.com
				</Text>
				<Text
					as="a"
					target="_blank"
					href="https://github.com/Awyssa"
					cursor="pointer"
					py="3"
				>
				Github: Awyssa
				</Text>
				<Text
					as="a"
					target="_blank"
					href="https://www.linkedin.com/in/mhenderson24/"
					cursor="pointer"
					py="3"
				>
				LinkedIn: Michael Henderson
				</Text>
			</Box>
		</Box>
	);
};

export default Contact;