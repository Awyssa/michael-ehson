/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Heading, Box, Text, Divider } from "@chakra-ui/react";
import Image from "next/image";
import github from "../../../../public/images/icons/github.svg";
import linkIcon from "../../../../public/images/icons/link-icon.svg";
import minesweeperImage from "../../../../public/images/projects/minesweeper.png";
import jokeImage from "../../../../public/images/projects/joke-api.png";
import festivalistImage from "../../../../public/images/projects/festivalist.png";
import cornhubImage from "../../../../public/images/projects/cornhub.png";

const ProjectsSection = () =>
{
	const projects = [
		{
			title: "Minesweeper",
			image: minesweeperImage,
			discription: <>
				<Text>First project at General Assembly.</Text>
				<Text>Minesweeper, but you have to sweep Covid cells</Text>
				<Text>Solo project, built over one week using HTML, CSS and Vanilla Javascript.</Text>
			</>,
			github: "https://github.com/Awyssa/SEI-Project-1",
			url: "https://awyssa.github.io/SEI-Project-1/"
		},
		{
			title: "Get a joke",
			image: jokeImage,
			discription: <>
				<Text>Second project at General Assembly.</Text>
				<Text>An app to get all the best jokes on the internet.</Text>
				<Text>Pair project, build over 2 days using React</Text>
			</>,
			github: "https://github.com/Awyssa/SEI-Project-2",
			url: "https://joke-api.netlify.app/"
		},
		{
			title: "Festivalist",
			image: festivalistImage,
			discription: <>
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
			discription: <>
				<Text>Fouth and final project at General Assembly.</Text>
				<Text>An app for farmers to research plants and crops. Can also set watering and fertilising reminders.</Text>
				<Text>Group project of three people, built over one week using React, Python, and Django.</Text>
			</>,
			github: "https://github.com/Awyssa/CornHub/tree/master",
			url: "https://cornhubapp.herokuapp.com/"
		}
	];

	return <>
		<Box
			width="100%"
			display="flex"
			alignItems="center"
			justifyContent="center"
			px={12}
		>
			<Box maxWidth="1200px">
				<Heading pb={2}>Projects</Heading>
				{projects.map((project, index) =>
				{
					return <Box key={index} >
						<Heading pb={4} fontSize="24px">{project.title}</Heading>
						<Box display="flex" flexDirection={{base: "column", md: "row"}}>
							<Box maxWidth="300px">
								<Image height="300px" width="350px" src={project.image} alt={project.title} />
							</Box>
							<Box ml={{base: 0, md: 4}} pt={{base: 2, md: null}}>
								{project.discription}
								<Box mt={6} display="flex" >
									{project.url && <Box as="a" href={project.url} target="_blank" display="flex" alignItems="center">
										<Image src={linkIcon} alt="Link icon" />
										<Text pl={2}>Link to project</Text>
									</Box>}
									<Box pl={6} as="a" href={project.github} target="_blank" display="flex" alignItems="center">
										<Image src={github} alt="Github Logo" />
										<Text pl={2} >Github Link</Text>
									</Box>
								</Box>
							</Box>
						</Box>
						{index != projects.length - 1 ? <Divider my={10}/> : <Box pb={12} />}
					</Box>;
				})}
			</Box>
		</Box>
	</>;
};

export default ProjectsSection;