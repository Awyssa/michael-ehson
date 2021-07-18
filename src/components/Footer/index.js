import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'

const Footer = () => {

  return (
    <Box 
      position="fixed" 
      bottom="0" 
      width="100%" 
      bg="black"
      color="white"
      py="5"
      display="flex"
      align="center"
      flexDirection="column"
    >

      <Box>
        <Text> &copy; Michael Henderson, 2021</Text>
      </Box>

      <Box display="flex" justifyContent="center">
        <Link cursor="pointer" href="https://github.com/Awyssa">
          <Text px="3">GitHub</Text>
        </Link>
        |
        <Link cursor="pointer" href="https://www.linkedin.com/in/mhenderson24/">
          <Text px="3">LinkedIn</Text>
        </Link>
        |
        <Link href="https://medium.com/@Awyssa">
          <Text cursor="pointer" px="3">Blog</Text>
        </Link>
        |
        <Link href="https://medium.com/@simpleoverflow">
          <Text cursor="pointer" px="3">Simple Overflow</Text>
        </Link>
      </Box>

    </Box>
  )
}

export default Footer