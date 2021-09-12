import React from "react";
import { Box } from "@chakra-ui/react";
import Nav from "../../molecules/Nav";
import Footer from "../../molecules/Footer";

const Layout = ({ children }) =>
{
	return (
		<Box minWidth="300px">
			<Nav />
			<Box minHeight="80vh">
				{ children }
			</Box>
			<Footer />
		</Box>
	);
};

export default Layout;