import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import img from '../../images/3.png'

const Homepage = (props) => {

  const { name, occupation } = props

  return (
    <Box>
      <Box boxSize="sm">
        <Image src={img} alt="" />
      </Box>
      <Text>{name}</Text>
      <Text>{occupation}</Text>
    </Box>
  )

}

export default Homepage