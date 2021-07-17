import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Link from 'next/link'

const Footer = () => {

  return (
    <Box mt="100%">
      <Box align="center" justifyContent="center" p="10px"bg="black">
        <Box>
          <Text py="2" color="white"> &copy; Michael Henderson, 2021</Text>
        </Box>
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Link href="https://github.com/Awyssa">
            <Text px="3" color="white">GitHub</Text>
          </Link>
          <Text color="white"> | </Text>
          <Link href="https://www.linkedin.com/in/mhenderson24/">
            <Text px="3" color="white">LinkedIn</Text>
          </Link>
          <Text color="white"> | </Text>
          <Link href="https://medium.com/@Awyssa">
            <Text px="3" color="white">Blog</Text>
          </Link>
          <Text color="white"> | </Text>
          <Link href="https://medium.com/@simpleoverflow">
            <Text px="3" color="white">Simple Overflow</Text>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer