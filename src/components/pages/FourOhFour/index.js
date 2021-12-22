import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const FourOhFour = () =>
{
	return (
		<Box
			display="flex"
			textAlign="center"
			alignItems="center"
			flexDirection="column"
			px={{ base: "4", sm: "12"}}
			pt="8"
			height="80vh"
		>
			<Text as="h1" fontSize={18}> Woah there! You aren't supposed to be here! </Text>
			<Text py={2} as="h1" fontSize={18}> But since you are... You may as well dance with pumpkin guy!</Text>
			<Box my={4}>
				<Image w="400px" h="350px" src="https://i.giphy.com/media/l3vRfhFD8hJCiP0uQ/giphy.webp" alt="pumpkin dance" />
			</Box>
			<Link href="/">
				<a>
					<Text cursor="pointer" fontSize={18}>Or... Click here to go back.</Text>
				</a>
			</Link>
		</Box>
	);
};
export default FourOhFour;