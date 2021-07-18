import React from 'react'
import Nav from '../src/components/Nav'
import Footer from '../src/components/Footer'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default MyApp
