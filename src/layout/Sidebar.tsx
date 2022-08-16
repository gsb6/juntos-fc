import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react'

export const Sidebar = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="4">
        <Link>
          <Flex align="center">
            <Text fontWeight="medium">Início</Text>
          </Flex>
        </Link>
        <Link>
          <Flex align="center">
            <Text fontWeight="medium">Meu time</Text>
          </Flex>
        </Link>
        <Link>
          <Flex align="center">
            <Text fontWeight="medium">Jogadores</Text>
          </Flex>
        </Link>
      </Stack>
    </Box>
  );
}
