import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import myPicture from "../../../public/images/pictures/1.jpeg";

const Homepage = (props) =>
{

	const { name, occupation, location } = props;

	return (
		<Box height="65vh" alignContent="center" justifyContent="center" align="center">
			<Image py={4} width={600} height={400} src={myPicture} alt="" />
			<Text>{name}</Text>
			<Text>{occupation}</Text>
			<Text>{location}</Text>
			<Text>That's about it really...</Text>
		</Box>
	);
};

export default Homepage;