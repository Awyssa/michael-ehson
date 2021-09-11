import React from "react";
import Image from "next/image";
import { Box, Text, Heading } from "@chakra-ui/react";
import emailIcon from "../../../public/images/icons/email.svg";
import githubIcon from "../../../public/images/icons/github.svg";
import linkedinIcon from "../../../public/images/icons/linkedin.svg";

const Contact = () =>
{

	const contactMethod = [
		{
			method: "Email",
			text: "michael.ehson@gmail.com",
			url: "mailto:michael.ehson@gmail.com",
			icon: emailIcon
		},
		{
			method: "LinkedIn",
			text: "linkedin.com/in/mhenderson24",
			url: "https://www.linkedin.com/in/mhenderson24",
			icon: linkedinIcon
		},
		{
			method: "GitHub",
			text: "github.com/Awyssa",
			url: "https://www.github.com/Awyssa",
			icon: githubIcon
		},
	];

	return (
		<Box
			px={12}
			width="100%"
			display="flex"
			height="60vh"
		>
			<Box display="flex" flexDirection="column" >
				<Heading 	pb={8}>Contact</Heading>
				{contactMethod.map((contact, index) =>
				{
					return (
						<Box
							key={index}
							as="a"
							target="_blank"
							href={contact.url}
							display="flex"
							alignItems="center"
							py={3}
						>
							<Image width={30} height={30} src={contact.icon} alt={contact.method} />
							<Text
								pl={2}
								as="a"
								target="_blank"
								href={contact.url}
								cursor="pointer"
							>
								{contact.method} / {contact.text}
							</Text>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export default Contact;