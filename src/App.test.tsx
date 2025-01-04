import { ChakraProvider } from '@chakra-ui/react'
import { describe, it, expect } from 'vitest'

describe('ChakraProvider', () => {
  it('should be properly typed', () => {
    const provider = <ChakraProvider>Test</ChakraProvider>
    expect(provider).toBeDefined()
  })
})
