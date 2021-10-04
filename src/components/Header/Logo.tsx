import * as React from 'react'
import { chakra, HTMLChakraProps, useToken, Image  } from '@chakra-ui/react'

import myco from '../../assets/logo.svg'

export const Logo = (props: HTMLChakraProps<'svg'> & { iconColor?: string }) => {
  const { iconColor = 'currentColor', ...rest } = props
  const color = useToken('colors', iconColor)
  return (
  <Image
    objectFit="cover"
    src={myco}
    alt="Myco"
  />
  )
}
