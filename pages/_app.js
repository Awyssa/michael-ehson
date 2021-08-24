import React from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";

const MyApp = ({ Component, pageProps }) =>
{
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" />
				<title>Michael Henderson</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta name="robots" content="index,follow" />
				<meta name="description" content="Michael Henderson, Software Engineer / Full Stack Developer"/>
				<meta name="author" content="Michael Henderson" />
				<meta name="image" content="https://res.cloudinary.com/cornhub/image/upload/v1629756211/picture1.jpg" />
				<meta property="og:url" content="https://www.m-henderson.com" />
				<meta property="og:title" content="Michael Henderson" />
				<meta property="og:description" content="Michael Henderson, Software Engineer / Full Stack Developer" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Michael Henderson, Full Stack Developer" />
				<meta property="og:image" content="https://res.cloudinary.com/cornhub/image/upload/v1629756211/picture1.jpg" />
				<meta property="og:image:alt" content="Michael Henderson" />
				<meta property="og:image:width" content="1500" />
				<meta property="og:image:height" content="1000" />
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
