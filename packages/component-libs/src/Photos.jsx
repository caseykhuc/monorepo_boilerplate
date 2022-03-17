/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import {
  Flex, Heading, VStack,
} from '@chakra-ui/react';
import Photo from './Photo';

const importAll = (r) => r.keys().map(r);
const photos = importAll(require.context('../assets/images/', false, /\.(png|jpe?g|svg)$/i));

export default function Photos() {
  return (
    <Flex h="100vh" py={20}>
      <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="gray.50">
        <Heading>Photos</Heading>
        <Flex justifyContent="space-between" w="100%" flexWrap="wrap" gap={8}>
          {photos.map((photo) => (
            <Photo key={photo} src={photo} alt="Photo" />
          ))}
        </Flex>
      </VStack>
    </Flex>
  );
}
