import React from "react";
import { Box, Text, Divider } from "@chakra-ui/react";

const Footer = () =>
{
	const links = [
		{title: "GitHub", url: "https://github.com/Awyssa"},
		{title: "LinkedIn", url: "https://www.linkedin.com/in/mhenderson24/"},
		{title: "Medium", url: "https://medium.com/@Awyssa"}
	];

	return (
		<Box
			width="100%"
			py="8"
			display="flex"
			align="center"
			flexDirection="column"
		>
			<Box>
				<Divider mb="8" width="80%"/>
				<Text> Michael Henderson &copy; 2021</Text>
			</Box>
			<Box display="flex" justifyContent="center">
				{links.map((link, index) =>
					<>
						<Text
							key={index}
							as="a"
							target="_blank"
							href={link.url}
							cursor="pointer"
							px="6"
							_hover={{ mt: -1 }}
							transition="200ms"
						>
							{link.title}
						</Text>
						<Text>
							{(index == links.length - 1) ? null : "/"}
						</Text>
					</>
				)}
			</Box>
		</Box>
	);
};

export default Footer;