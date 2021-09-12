import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Nav = () =>
{
	const links = [
		{ title: "Home", url: "/"},
		{ title: "About", url: "/about"},
		{ title: "Projects", url: "/projects"},
		{ title: "Contact", url: "/contact"}
	];

	return (
		<Box
			display="flex"
			flexDir={{base: "column", sm: "row"}}
			justifyContent="space-between"
			width="100%"
			bg="black"
			color="white"
			top="0"
			p={8}
			mb={10}
			align="center"
			zIndex={99}
		>
			<Box>
				<Link href="/">
					<a>
						<Text cursor="pointer" fontWeight="bold" >Michael Henderson</Text>
					</a>
				</Link>
			</Box>

			<Box display="flex" alignItems="center" justifyContent="center">
				{links.map((link, index) => <>
					<Link key={index} href={link.url}>
						<a>
							<Text cursor="pointer" px={2}>{link.title} </Text>
						</a>
					</Link>
					{index == links.length - 1 ? null : <Text> / </Text>}
				</>
				)}
			</Box>
		</Box>
	);
};

export default Nav;