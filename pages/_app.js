import React from 'react'
import '../styles/globals.css'
import Nav from '../src/components/Nav'
import Footer from '../src/components/Footer'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
