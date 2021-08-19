import React from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";

import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";

const MyApp = ({ Component, pageProps }) =>
{
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<ChakraProvider>
				<Nav />
				<Box mt="7rem">
					<Component {...pageProps} />
				</Box>
				<Footer />
			</ChakraProvider>
		</>
	);
};

export default MyApp;
