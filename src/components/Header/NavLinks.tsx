import * as React from 'react'
import { NavLink } from "react-router-dom";
import { Link, LinkProps, useColorModeValue as mode } from '@chakra-ui/react'


type NavLinkProps = LinkProps & {
  isActive?: boolean;
  exact?: boolean;
  to: string;
};


export const NavLinks = (props: NavLinkProps) => {
  const { isActive, ...rest } = props
  return (
    <Link
      as={NavLink}
      display="block"
      py={2}
      px={3}
      borderRadius="md"
      transition="all 0.3s"
      fontWeight="medium"
      lineHeight="1.25rem"
      aria-current={isActive ? 'page' : undefined}
      _hover={{ bg: mode('gray.100', 'gray.700') }}
      _activeLink={{
        bg: mode('blue.600', 'blue.200'),
        color: mode('white', 'gray.900'),
      }}
      {...rest}
    />
  )
}
