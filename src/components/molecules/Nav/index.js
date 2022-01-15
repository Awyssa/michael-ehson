import React, { useContext, useState, useEffect } from "react";
import { Box, Text, keyframes, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { DarkMode } from "../../store/DarkMode";
import { BsFillSunFill, BsMoon } from "react-icons/bs";
import moment from "moment";

const Nav = () =>
{
	const {darkMode, setDarkMode} = useContext(DarkMode);
	const [timeAndDate, setTimeAndDate] = useState(null);

	const links = [
		{ title: "Home", url: "/"},
		{ title: "About", url: "/about"},
		{ title: "Projects", url: "/projects"},
		{ title: "Contact", url: "/contact"}
	];

	const setUpdateClock = () =>
	{
		setTimeout(updateClock, 1000);
	};

	const updateClock = () =>
	{
		const clockTime = moment().format("Do MMMM YYYY, h:mm:ss");
		setTimeAndDate(clockTime);
	};

	useEffect(()=>
	{
		setUpdateClock();
	}, [updateClock]);

	const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

	const spinAnimation = `${spin} infinite 2s linear`;

	return (
		<Box
			display="flex"
			justifyContent={{ base: "center", md: null }}
			alignItems={{ base: "center", md: null }}
			textAlign={{ base: "center", md: "left" }}
			width="100%"
			bg="black"
			color="white"
			borderBottom="1px solid"
			borderColor="#FFF"
			top="0"
			p="8"
			zIndex="99"
		>
			<Box
				display={{base: "", md: "flex"}}
				justifyContent={{ base: null, md: "space-between"}}
				width={{ base: "100%", md: null}}
			>
				<Link href="/">
					<Box as="a" width="300px">
						<Box cursor="pointer" fontWeight="bold" fontSize="lg">
						Michael Henderson
						</Box>
						<Box fontWeight="300">
							{timeAndDate ? timeAndDate : <Spinner height="12px" width="12px"/>}
						</Box>
					</Box>
				</Link>
				<Box display="flex" alignItems="center" justifyContent="center">
					{links.map((link, index) =>
						<Box key={index} d="flex">
							<Link href={link.url}>
								<a>
									<Text cursor="pointer" px={2} 						_hover={{ mt: -2 }}
										transition="100ms">{link.title} </Text>
								</a>
							</Link>
							{index == links.length - 1 ? null : <Text> / </Text>}
						</Box>
					)}
				</Box>
			</Box>
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
	);
};

export default Nav;