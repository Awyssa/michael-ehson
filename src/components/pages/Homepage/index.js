import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import myPicture from "../../../../public/images/pictures/1.jpeg";

const Homepage = () =>
{
	return (
		<Box
			alignContent="center"
			justifyContent="center"
			align="center"
			px="4"
			pt="8"
			height="80vh"
		>
			<Image width="600" height="400" src={myPicture} alt="Michael Henderson" />
			<Text>Michael Henderson</Text>
			<Text>Software Engineer / Full Stack Developer</Text>
			<Text>London, UK</Text>
			<Text>That's about it really...</Text>
		</Box>
	);
};

export default Homepage;