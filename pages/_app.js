import React from 'react'
import Nav from '../src/components/Nav'
import Footer from '../src/components/Footer'

import { ChakraProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default MyApp
