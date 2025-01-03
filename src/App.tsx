import { ChakraBaseProvider, Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraBaseProvider, theme } from '@chakra-ui/react'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraBaseProvider theme={theme}>
        <Router>
          <Box minH="100vh">
            <Routes>
              <Route path="/" element={<div>Welcome to HVL Dashboard!</div>} />
            </Routes>
          </Box>
        </Router>
      </ChakraBaseProvider>
    </QueryClientProvider>
  )
}

export default App
