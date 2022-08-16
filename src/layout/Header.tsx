import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      py="6"
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        fontFamily={`'Roboto Slab', sans-serif`}
      >
        Juntos FC
      </Text>

      <Flex
        align="center"
        ml="auto"
      >
        <Avatar size="md" name="Gabriel Brunichaki" />

        <Box ml="2">
          <Text>ATLÉTICO BERGAMOTENSE</Text>
          <Text fontSize="small">Gabriel Brunichaki</Text>
        </Box>
      </Flex>
    </Flex>
  );
}
