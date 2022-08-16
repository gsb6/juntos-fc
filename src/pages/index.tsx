import type { NextPage } from 'next'

import Head from 'next/head'

import { Flex, VStack, Box, Container, Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from '@chakra-ui/react'

import { Header } from 'layout/Header'
import { Sidebar } from 'layout/Sidebar'

const Home: NextPage = () => {
  return (
    <Container maxW={1480} px="6">
      <VStack h="100vh">
        <Header />

        <Box
          w="100%"
          mx="auto"
        >
          <Flex
            w="100%"
            my="6"
          >
            <Sidebar />

            <Box flex="1" borderRadius={8} bg="white" p="8">
              <Flex>
              <Accordion allowMultiple flex="1">
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
        <Box flex='1' textAlign='left'>
          Click me to see a different style
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
      <Box flex='1' textAlign='left'>
          Click me to see a different style
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
      <Box flex='1' textAlign='left'>
          Click me to see a different style
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Container>
  )
}

export default Home
