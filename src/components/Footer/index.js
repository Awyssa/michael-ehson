import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () =>
{

	return (
		<Box
			position="fixed"
			bottom="0"
			width="100%"
			bg="black"
			color="white"
			py="5"
			display="flex"
			align="center"
			flexDirection="column"
		>

			<Box>
				<Text> Michael Henderson &copy; 2021</Text>
			</Box>

			<Box display="flex" justifyContent="center">
				<Text
					as="a"
					target="_blank"
					href="https://github.com/Awyssa"
					cursor="pointer"
					px="3"
				>
        GitHub
				</Text>
        |
				<Text
					as="a"
					target="_blank"
					href="https://www.linkedin.com/in/mhenderson24/"
					cursor="pointer"
					px="3"
				>
        LinkedIn
				</Text>
        |
				<Text
					as="a"
					target="_blank"
					href="https://medium.com/@Awyssa"
					cursor="pointer"
					px="3"
				>
        Blog
				</Text>
        |
				<Text
					as="a"
					target="_blank"
					href="https://medium.com/@simpleoverflow"
					cursor="pointer"
					px="3"
				>
        Simple Overflow
				</Text>
			</Box>

		</Box>
	);
};

export default Footer;