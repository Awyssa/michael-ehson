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
			pt="8"
			px="12"
		>
			<Box maxWidth="1200px">
				<Box display="flex" flexDirection={{base: "column", md: "row"}}>
					<Box minWidth="300" minHeight="300" display="flex" justifyContent="center">
						<Image pt="2" width="300" height="300" objectFit="contain" src={myPicture} alt="Michael Henderson" />
					</Box>
					<Box px="8">
						<Heading pb="2">About Me</Heading>
						<Text py="1">Hi, I’m Michael Henderson!</Text>
						<Text py="1">I am a software engineer based in London, UK.</Text>
						<Text py="1">I started coding by trying to mod Command & Conquer: Tiberian Sun - Firestorm back when S Club 7 was popular, and the Nokia 3310 had just been released.</Text>
						<Text py="1">I then fell into Sales and Marketing, but pursued my passion and swapped careers in 2020. Glad to say it was the best decision of my life!</Text>
						<Text py="1">I am focusing on React, Node.js, and Next.js. Also learning Python, Django, and GraphQL.</Text>
						<Text pt="4px">
							I also follow the works of Alan Kay, Paul Graham <a style={{ color: "#0070FF" }} href="http://www.paulgraham.com/articles.html" target="_blank" rel="noreferrer">(http://www.paulgraham.com/articles.html)</a>, Oz Nova <a style={{ color: "#0070FF" }} href="https://ozwrites.com" target="_blank" rel="noreferrer">(https://ozwrites.com)</a>, and the Soft Skills Engineering Podcast <a style={{ color: "#0070FF" }} href="https://softskills.audio/" target="_blank" rel="noreferrer">(https://softskills.audio)</a>.
						</Text>
					</Box>
				</Box>
				<Divider my="12"/>
				<SkillsSection/>
			</Box>
		</Box>
	);
};

export default About;