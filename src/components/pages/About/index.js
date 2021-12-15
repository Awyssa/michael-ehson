import React from "react";
import { Box, Text, Divider } from "@chakra-ui/react";
import SkillsSection from "../../molecules/Skills";
import myPicture from "../../../../public/images/pictures/2.png";
import Image from "next/image";

const About = () =>
{

	const Link = ({href, text}) =>
	{
		return <a style={{ color: "#0070FF" }} href={href} target="_blank" rel="noreferrer">
			{text}
		</a>;
	};

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
						<Box py="2" as="h1" fontSize="36px" fontWeight="600"> About Me </Box>
						<Text py="1" fontWeight="700"> Hi, I'm Michael Henderson! </Text>
						<Text py="1"> I am a Software Engineer / Full Stack Developer based in London, UK. </Text>
						<Text py="1">
							My earliest experience with computers was using floppy disks to play Gorillas on my Father's MS-DOS-5. I then started coding by trying to mod "Command & Conquer: Tiberian Sun - Firestorm". This was when S Club 7 was popular, and the Nokia 3310 had just been released.
						</Text>
						<Text py="1">
							After almost a year of trial and error, and many tears, I succeeded in my quest. The utter sense of accomplishment and joy I experienced has led me to become fascinated with computing and coding ever since.
						</Text>
						<Text py="1">
							My career differed from my passion, as I fell into Sales and Marketing. But with a growing disinterest over the years, I finally pursued my true calling and became a developer in 2019. Glad to say, it was the best decision of my life!
						</Text>
						<Text py="1">
							I am currently focusing on React, Node.js, and Next.js, but still practice GraphQL, Django, and Rails.
						</Text>
						<Text pt="4px">
							I also follow
							<Link href="http://www.paulgraham.com/articles.html" text=" Paul Graham" />,
							<Link href="https://ozwrites.com" text=" Oz Nova" />, the
							<Link href="https://softskills.audio/" text=" Soft Skills Engineering Podcast" />, and going through
							<Link href="https://cs50.harvard.edu" text=" CS50" /> too.
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