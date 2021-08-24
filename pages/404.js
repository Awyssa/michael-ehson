import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Custom404 = () =>
{
	return (
		<Box height="60vh" display="flex" textAlign="center" alignItems="center" flexDirection="column">
			<Text py={4} as="h1" fontSize={18}>
				Woah there! You aren't supposed to be here!
			</Text>
			<Text py={2} as="h1" fontSize={18}>
			But since you are... You may as well dance with pumkin guy!
			</Text>
			<Link href="/">
				<Image my={4} w="400px" h="350px" src="https://i.giphy.com/media/l3vRfhFD8hJCiP0uQ/giphy.webp" alt="pumkin" />
			</Link>
			<Link href="/">
				<Text fontSize={18}>Or... Click here to go back</Text>
			</Link>
		</Box>
	);
};

export default Custom404;

export async function getStaticProps(context)
{
	return {props: {},};
}