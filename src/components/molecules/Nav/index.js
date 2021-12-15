import React, { useContext } from "react";
import { Box, Text, keyframes } from "@chakra-ui/react";
import Link from "next/link";
import { DarkMode } from "../../store/DarkMode";
import { BsFillSunFill, BsMoon } from "react-icons/bs";

const Nav = () =>
{
	const {darkMode, setDarkMode} = useContext(DarkMode);
	const links = [
		{ title: "Home", url: "/"},
		{ title: "About", url: "/about"},
		{ title: "Projects", url: "/projects"},
		{ title: "Contact", url: "/contact"}
	];

	const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

	const spinAnimation = `${spin} infinite 2s linear`;

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
						<Text cursor="pointer" fontWeight="bold">Michael Henderson</Text>
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
					ml={["0", "6"]}
					onClick={()=> setDarkMode(!darkMode)}
					_hover={{ animation: spinAnimation }}

				>
					{darkMode ?
						<BsFillSunFill size="30px" />
						:
						<BsMoon size="30px" />}
				</Box>
			</Box>
		</Box>
	);
};

export default Nav;