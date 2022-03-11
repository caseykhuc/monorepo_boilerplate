import { Container, Flex, VStack } from '@chakra-ui/react';
import Details from './Details';

export default function Main() {
  return (
    <Container maxW="container.lg" p={0}>
      <Flex h="100vh" py={20}>
        <VStack
          w="full"
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
        >
          <Details />
        </VStack>
        <VStack
          w="full"
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
          bg="gray.50"
        >
          <div>Cart</div>
        </VStack>
      </Flex>
    </Container>
  );
}
