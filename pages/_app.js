import React, { useState } from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../src/components/layouts/Default";
import { DarkMode } from "../src/components/store/DarkMode";

const MyApp = ({ Component, pageProps }) =>
{
	const [darkMode, setDarkMode] = useState(true);

	return (
		<>
			<Head>
				<title>Michael Henderson, Software Engineer / Full Stack Developer</title>
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta name="robots" content="index,follow" />
				<meta name="description" content="Michael Henderson, Software Engineer / Full Stack Developer, London, UK"/>
				<meta name="author" content="Michael Henderson" />
				<meta name="image" content="https://res.cloudinary.com/cornhub/image/upload/v1629756211/picture1.jpg" />
				<meta property="og:url" content="https://www.m-henderson.com" />
				<meta property="og:title" content="Michael Henderson, Software Engineer / Full Stack Developer" />
				<meta property="og:description" content="Michael Henderson, Software Engineer / Full Stack Developer, London, UK" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Michael Henderson, Software Engineer / Full Stack Developer, London, UK" />
				<meta property="og:image" content="https://res.cloudinary.com/cornhub/image/upload/v1629756211/picture1.jpg" />
				<meta property="og:image:alt" content="Michael Henderson" />
				<meta property="og:image:width" content="1500" />
				<meta property="og:image:height" content="1000" />
			</Head>
			<ChakraProvider>
				<DarkMode.Provider value={{darkMode, setDarkMode}}>
					<Layout>
						<Component {...pageProps}/>
					</Layout>
				</DarkMode.Provider>
			</ChakraProvider>
		</>
	);
};

export default MyApp;
