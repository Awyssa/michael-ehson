import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import img from "../../images/1.jpeg";

const Homepage = (props) =>
{

	const { name, occupation } = props;

	return (
		<Box m="5" alignContent="center" justifyContent="center" align="center">
			<Image width="600px" height="400px" src={img} alt="" />
			<Text>{name}</Text>
			<Text>{occupation}</Text>
			<Text>London / UK</Text>
			<Text>That's about it really...</Text>
		</Box>
	);

};

export default Homepage;