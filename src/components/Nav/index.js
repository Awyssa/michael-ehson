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

      <Box color="white" display="flex" alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Text cursor="pointer" px="5">Home</Text>
        </Link>
        /
        <Link href="/about">
          <Text cursor="pointer" px="5">About</Text>
        </Link>
        /
        <Link href="/contact">
          <Text cursor="pointer" px="5">Contact</Text>
        </Link>
      </Box>
    </Box>
  )
}

export default Nav