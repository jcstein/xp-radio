import { useColorMode } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/button'
import {
    MoonIcon,
    SunIcon
  } from '@chakra-ui/icons';

export const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
         <IconButton pos="fixed"
        top="1rem"
        right="1rem" aria-label="Toggle Mode" onClick={toggleColorMode}>
          { colorMode === 'light' ? <MoonIcon/> : <SunIcon/> }
        </IconButton>
        </>
    )
}