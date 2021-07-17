import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'

const Nav = () => {

  return (
    <Box p="20px" display="flex" justifyContent="space-between" width="100%" bg="black">
      <Box>
        <Link href="/">
          <Text px="5" color="white" fontWeight="bold" >Michael Henderson</Text>
        </Link>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Text as="a" px="5" color="white">Home</Text>
        </Link>
        <Link href="/about">
          <Text as="a" px="5" color="white">About</Text>
        </Link>
        <Link href="/contact">
          <Text as="a" px="5" color="white">Contact</Text>
        </Link>
      </Box>
    </Box>
  )
}

export default Nav