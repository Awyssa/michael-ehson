import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";


const About = (props) =>
{

	console.log("hey there!");

	return (
		<Box display="flex" flexDirection="column" justifyContent="center" align="center">
			<Box textAlign="left">
				<Heading py="5">About Me</Heading>
				<Text>I am a software engineer based in London, United Kingdom.</Text>
				<Text>As a previous Sales Specialist and Admissions Officer for Flatiron School</Text>
				<Text> and AiCore, I've always had a keen interest in technology and coding</Text>
				<br />
				<Text>I am now working at GetAgent and loving it!</Text>
			</Box>
		</Box>
	);
};

export default About;