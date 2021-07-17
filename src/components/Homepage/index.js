import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Homepage = (props) => {

  const { name, occupation, age } = props;

  return (
    <Box>
      <img src="https://media-exp3.licdn.com/dms/image/C4D03AQEDPzySCo43xQ/profile-displayphoto-shrink_200_200/0/1619465197194?e=1631750400&v=beta&t=KmpbYY1N0603cmWFyJndPKhfbjPneEwBu9XhTakNXyg"></img>
      <p>{name}</p>
      <p>{occupation}</p>
    </Box>
  )

}

export default Homepage