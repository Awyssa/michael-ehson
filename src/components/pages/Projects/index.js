/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Heading, Box, Text, Divider } from "@chakra-ui/react";
import Image from "next/image";
import minesweeperImage from "../../../../public/images/projects/minesweeper.png";
import jokeImage from "../../../../public/images/projects/joke-api.png";
import festivalistImage from "../../../../public/images/projects/festivalist.png";
import cornhubImage from "../../../../public/images/projects/cornhub.png";
import sachinAndPeggy from "../../../../public/images/projects/sachnpeggy.png";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const ProjectsSection = () =>
{
	const projects = [
		{
			title: "Minesweeper",
			image: minesweeperImage,
			description: <>
				<Text>First project at General Assembly.</Text>
				<Text>Minesweeper, but you have to sweep Covid cells.</Text>
				<Text>Solo project, built over one week using HTML, CSS and Vanilla Javascript.</Text>
			</>,
			github: "https://github.com/Awyssa/SEI-Project-1",
			url: "https://awyssa.github.io/SEI-Project-1/"
		},
		{
			title: "Get a joke",
			image: jokeImage,
			description: <>
				<Text>Second project at General Assembly.</Text>
				<Text>An app to get all the best jokes on the internet.</Text>
				<Text>Pair project, build over 2 days using React.</Text>
			</>,
			github: "https://github.com/Awyssa/SEI-Project-2",
			url: "https://joke-api.netlify.app/"
		},
		{
			title: "Festivalist",
			image: festivalistImage,
			description: <>
				<Text>Third project at General Assembly.</Text>
				<Text>An app to research festivals, save to your personal page, and see what festivals your friends are attending.</Text>
				<Text>Group project of four people, built over one week using React, NodeJS, Express, and MongoDB.</Text>
			</>,
			github: "https://github.com/Awyssa/sei-project3",
			url: "https://festivalist.netlify.app/"
		},
		{
			title: "CornHub",
			image: cornhubImage,
			description: <>
				<Text>Fourth and final project at General Assembly.</Text>
				<Text>An app for farmers to research plants and crops. Can also set watering and fertilising reminders.</Text>
				<Text>Group project of three people, built over one week using React, Python, and Django.</Text>
			</>,
			github: "https://github.com/Awyssa/CornHub/tree/master",
			url: "https://cornhubapp.herokuapp.com/"
		},
		{
			title: "Sach & Peggy's Lonely Hearts",
			image: sachinAndPeggy,
			description: <>
				<Text>Landing page website for The Sach & Peggy's Lonely Hearts podcast.</Text>
				<Text>React, Chakra-UI, Next.js, and Node.js project.</Text>
				<Text>Deployed on Vercel, also uses Mongo Database and Nodemailer.</Text>
			</>,
			url: "https://www.sachandpeggy.com/"
		}
	];

	return (
		<Box
			width="100%"
			display="flex"
			alignItems="center"
			justifyContent="center"
			px={{ base: "4", sm: "12"}}
			pt="8"
		>
			<Box maxWidth="1200px">
				<Heading pb="2">Projects</Heading>
				{projects.map((project, index) =>(
					<Box key={index} >
						<Heading pb="4" fontSize="24px">{project.title}</Heading>
						<Box display="flex" flexDirection={{base: "column", md: "row"}}>
							<Box maxWidth="300px">
								<Image height="300px" width="350px" src={project.image} alt={project.title} />
							</Box>
							<Box ml={{base: 0, md: 4}} pt={{base: 2, md: null}}>
								{project.description}
								<Box mt="6" display="flex" >
									<Box as="a" href={project.url} target="_blank" display="flex" alignItems="center" _hover={{ mt: -4 }}										transition="200ms ease-in-out">
										<AiOutlineLink size="30px"/>
										<Text pl="2">Link to deployment</Text>
									</Box>
									{project.github ? <Box pl="6" as="a" href={project.github} target="_blank" display="flex" alignItems="center" _hover={{ mt: -4 }} 										transition="200ms ease-in-out">
										<AiFillGithub size="30px"/>
										<Text pl="2" >Github URL</Text>
									</Box>
										: null}
								</Box>
							</Box>
						</Box>
						{index != projects.length - 1 ? <Divider my="10"/> : <Box pb="12" />}
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default ProjectsSection;