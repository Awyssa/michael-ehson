import React, { useContext } from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import { DarkMode } from "../../store/DarkMode";
import { BsLightbulb } from "react-icons/bs";
import { MdOutlineNightlightRound } from "react-icons/md";

const Nav = () =>
{
	const {darkMode, setDarkMode} = useContext(DarkMode);
	const links = [
		{ title: "Home", url: "/"},
		{ title: "About", url: "/about"},
		{ title: "Projects", url: "/projects"},
		{ title: "Contact", url: "/contact"}
	];

	return (
		<Box
			display="flex"
			flexDir={{base: "column", md: "row"}}
			justifyContent="space-between"
			width="100%"
			bg="black"
			color="white"
			borderBottom="1px solid"
			borderColor="#FFF"
			top="0"
			p="8"
			align="center"
			zIndex="99"
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
				<Box
					as="button"
					pl={["0", "2"]}
					onClick={()=> setDarkMode(!darkMode)}
				>
					{darkMode ?
						<BsLightbulb />
						:
						<MdOutlineNightlightRound />}
				</Box>
			</Box>
		</Box>
	);
};

export default Nav;