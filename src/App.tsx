import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>Hello World</div>
    </ChakraProvider>
  )
}

export default App
