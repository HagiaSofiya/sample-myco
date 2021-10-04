import * as React from 'react'
import { Logo } from './Logo'
import { Navbar } from './Navbar'
import { NavLinks } from './NavLinks'
import { UserProfile } from './UserProfile'

import { Box, Center, useColorModeValue as mode } from '@chakra-ui/react'

export const Header = () => (
  <Box>
    <Navbar>
      <Navbar.Brand>
        <Center marginEnd="10">
          <Logo h="6" iconColor={mode('blue.600', 'blue.300')} />
        </Center>
      </Navbar.Brand>
      <Navbar.Links>
        <NavLinks exact to="/dashboard">Dashboard</NavLinks>
        <NavLinks to="/co">CO</NavLinks>
        <NavLinks to="/conversations">Conversations</NavLinks>
        <NavLinks to="/ownership">Ownership</NavLinks>
      </Navbar.Links>
      <Navbar.UserProfile>
        <UserProfile
          name="Mark Beylin"
          avatarUrl="https://pbs.twimg.com/profile_images/1437295740917854209/1sMTe6pP_400x400.jpg"
          email="mail@myco.space"
        />
      </Navbar.UserProfile>
    </Navbar>
  </Box>
)