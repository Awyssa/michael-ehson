import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Nav = () =>
{

	return (
		<Box
			p="25px"
			display="flex"
			justifyContent="space-between"
			width="100%"
			bg="black"
			color="white"
		>
			<Box>
				<Link href="/">
					<Text px="5"fontWeight="bold" >Michael Henderson</Text>
				</Link>
			</Box>

			<Box display="flex" alignItems="center" justifyContent="space-between">
				<Link href="/">
					<Text cursor="pointer" px="2">Home</Text>
				</Link>
        /
				<Link href="/about">
					<Text cursor="pointer" px="2">About</Text>
				</Link>
        /
				<Link href="/contact">
					<Text cursor="pointer" px="2">Contact</Text>
				</Link>
			</Box>
		</Box>
	);
};

export default Nav;