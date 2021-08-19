import React from "react";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Box } from "@chakra-ui/react";

const DefaultLayout = ({ children }) =>
{
	return (
		<>
			<Box bg="#000000">
				<Nav  />
				{children}
				<Footer />
			</Box>
		</>
	);
};

export default DefaultLayout;