import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Contact = () =>
{
	const contactMethod = [
		{
			method: "Email",
			text: "michael.ehson@gmail.com",
			url: "mailto:michael.ehson@gmail.com",
			icon: <AiOutlineMail size="30px" />
		},
		{
			method: "LinkedIn",
			text: "linkedin.com/in/mhenderson24",
			url: "https://www.linkedin.com/in/mhenderson24",
			icon: <AiFillLinkedin size="30px" />
		},
		{
			method: "GitHub",
			text: "github.com/Awyssa",
			url: "https://www.github.com/Awyssa",
			icon: <AiFillGithub size="30px" />
		},
	];

	return (
		<Box
			width="100%"
			display="flex"
			px={{ base: "4", sm: "12"}}
			pt="8"
			height="80vh"
		>
			<Box maxWidth="1200px">
				<Heading pb="8">Contact</Heading>
				{contactMethod.map((contact, index) => (
					<Box
						key={index}
						as="a"
						target="_blank"
						href={contact.url}
						display="flex"
						alignItems="center"
						my="3"
						py="3"
						_hover={{ ml: 4 }}
						transition="200ms ease-in-out"
						width="100%"
					>
						{contact.icon}
						<Text
							pl="2"
							as="a"
							target="_blank"
							href={contact.url}
							cursor="pointer"
						>
							{contact.method}: {contact.text}
						</Text>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default Contact;