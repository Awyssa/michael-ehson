import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Nav = () =>
{

	return (
		<Box
			display="flex"
			justifyContent="space-between"
			width="100%"
			bg="black"
			color="white"
			position="fixed"
			top="0"
			py={8}
			align="center"
			zIndex={99}
		>
			<Box pl={12}>
				<Link href="/">
					<Text cursor="pointer" fontWeight="bold" >Michael Henderson</Text>
				</Link>
			</Box>

			<Box pr={12} display="flex" alignItems="center" justifyContent="space-between">
				<Link href="/">
					<Text cursor="pointer" px="2">Home</Text>
				</Link>
        /
				<Link href="/about">
					<Text cursor="pointer" px="2">About</Text>
				</Link>
				/
				<Link href="/projects">
					<Text cursor="pointer" px="2">Projects</Text>
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