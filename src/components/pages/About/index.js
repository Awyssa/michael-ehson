import React from "react";
import { Box, Text, Heading, Divider } from "@chakra-ui/react";
import SkillsSection from "../../molecules/Skills";
import myPicture from "../../../../public/images/pictures/2.png";
import Image from "next/image";

const About = () =>
{

	return (
		<Box
			width="100%"
			display="flex"
			alignItems="center"
			justifyContent="center"
			px={12}
		>
			<Box maxWidth="1200px">
				<Box display="flex" flexDirection={{base: "column", md: "row"}}>
					<Box minWidth={300} minHeight={300} display="flex" justifyContent="center">
						<Image pt={2} width={300} height={300} objectFit="contain" src={myPicture} alt="Michael Henderson" />
					</Box>
					<Box px={8}>
						<Heading pb={2}>About Me</Heading>
						<Text py={1}>Hi, I’m Michael Henderson!</Text>
						<Text py={1}>I am a software engineer based in London, UK.</Text>
						<Text py={1}>I was previously a Sales and Marketing specialist, but I swapped careers in 2020, and have been the happiest in my life ever since!</Text>
						<Text py={1}>I am focusing on React, Node.js, and Next.js. But, I am also learning Python, Django, GraphQL and Serverless.</Text>
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