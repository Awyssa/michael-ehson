import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import Nav from "../../molecules/Nav";
import Footer from "../../molecules/Footer";
import { DarkMode } from "../../store/DarkMode";

const Layout = ({ children }) =>
{
	const { darkMode } = useContext(DarkMode);

	return (
		<Box minWidth="300px" minHeight="100vh" bg={darkMode ? "black" : ""} color={darkMode ? "white" : ""}>
			<Nav />
			{children}
			<Footer />
		</Box>
	);
};

export default Layout;