import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme} cssVarsRoot="body">
        <div>Hello World</div>
      </ChakraProvider>
    </>
  )
}

export default App
