import React from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../src/components/layouts/Default";

const MyApp = ({ Component, pageProps }) =>
{
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
				<script>
					{`window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'G-K432G96J0M');`}
				</script>
			</Head>
			<ChakraProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ChakraProvider>
		</>
	);
};

export default MyApp;
