import React from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

const Footer = () =>
{

	return (
		<Box
			width="100%"
			// bg="black"
			// color="white"
			py={8}
			display="flex"
			align="center"
			flexDirection="column"
		>
			<Box>
				<Box>
					<Divider my={8} width="80%"/>
					<Text> Michael Henderson &copy; 2021</Text>
				</Box>
				<Box display="flex" justifyContent="center">
					<Text
						as="a"
						target="_blank"
						href="https://github.com/Awyssa"
						cursor="pointer"
						px="6"
					>
        GitHub
					</Text>
        /
					<Text
						as="a"
						target="_blank"
						href="https://www.linkedin.com/in/mhenderson24/"
						cursor="pointer"
						px="6"
					>
        LinkedIn
					</Text>
        /
					<Text
						as="a"
						target="_blank"
						href="https://medium.com/@Awyssa"
						cursor="pointer"
						px="6"
					>
        Medium
					</Text>
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;