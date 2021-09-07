import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import myPicture from "../../../public/images/pictures/1.jpeg";

const Homepage = (props) =>
{

	const { name, occupation, location } = props;

	return (
		<Box height="80vh" alignContent="center" justifyContent="center" align="center">
			<Box mb={[8, 4]} width={{base: "400px", md: "600px"}} height={{base: "200px", md: "400px"}}>
				<Image src={myPicture} alt="" />
			</Box>
			<Text>{name}</Text>
			<Text>{occupation}</Text>
			<Text>{location}</Text>
			<Text>That's about it really...</Text>
		</Box>
	);
};

export default Homepage;