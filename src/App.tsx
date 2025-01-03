import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Router>
          <Box minH="100vh">
            <Routes>
              <Route path="/" element={<div>Welcome to HVL Dashboard!</div>} />
            </Routes>
          </Box>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
