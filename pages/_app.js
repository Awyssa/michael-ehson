import React from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import DefaultSEO from "../src/config";
import Layout from "../src/components/layouts/Default";

const MyApp = ({ Component, pageProps }) =>
{
	return (
		<>
			<Head>
				<DefaultSEO />
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
