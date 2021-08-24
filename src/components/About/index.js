import React from "react";
import { Box, Text, Heading, Divider } from "@chakra-ui/react";
import ProjectsSection from "../Projects";
import SkillsSection from "./components/Skills";
import myPicture from "../../../public/images/pictures/2.png";
import Image from "next/image";

const About = () =>
{

	return (
		<Box
			px={12}
			width="100%"
			display="flex"
			alignItems="center"
			justifyContent="center"
		>
			<Box maxWidth="1200px">
				<Box display="flex">
					<Box minWidth={100} minHeight={100}>
						<Image pt={2} width={300} height={300} objectFit="contain" src={myPicture} alt="Michael Henderson" />
					</Box>
					<Box maxWidth="900px" px={8}>
						<Heading pb="5">About Me</Heading>
						<Text py="4px">Hi, I’m Michael Henderson!</Text>
						<Text py="4px">I am a software engineer based in London, UK.</Text>
						<Text py="4px">I was previously a Sales and Marketing specialist, but I swapped careers in 2020, and have been the happiest in my life ever since!</Text>
						<Text py="4px">I am focusing on React, Node.js, and Next.js. But, I am also learning Python, Django, GraphQL and Serverless.</Text>
						<Text pt="4px">
								I also follow the works of Alan Kay, Paul Graham <a style={{ color: "blue" }} href="http://www.paulgraham.com/articles.html" target="_blank" rel="noreferrer">(http://www.paulgraham.com/articles.html)</a>, Oz Nova <a style={{ color: "blue" }} href="https://ozwrites.com" target="_blank" rel="noreferrer">(https://ozwrites.com/)</a>, and the Soft Skills Engineering Podcast <a style={{ color: "blue" }} href="https://softskills.audio/" target="_blank" rel="noreferrer">(https://softskills.audio/)</a>.
						</Text>
					</Box>
				</Box>
				<Divider my={12} />
				<SkillsSection />
			</Box>
		</Box>
	);
};

export default About;