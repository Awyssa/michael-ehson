import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import Image from 'next/image'
import img from '../../images/1.jpeg'

const Homepage = (props) => {

  const { name, occupation } = props

  return (
    <Box alignContent="center" justifyContent="center" align="center">
      <Box pt="20" boxSize="400">
        <Image src={img} alt="" />
      </Box>
      <Text>{name}</Text>
      <Text>{occupation}</Text>
    </Box>
  )

}

export default Homepage