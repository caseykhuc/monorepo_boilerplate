/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import {
  Box, Flex, Heading, Image, VStack,
} from '@chakra-ui/react';

const DUMMY_IMAGE_SRC = 'DUMMY_IMAGE_SRC';

const importAll = (r) => r.keys().map(r);
const photos = importAll(require.context('../assets/images/', false, /\.(png|jpe?g|svg)$/i));

if (photos.length % 3 === 1) {
  photos.push(`${DUMMY_IMAGE_SRC}_1`);
  photos.push(`${DUMMY_IMAGE_SRC}_2`);
} else if (photos.length % 3 === 2) {
  photos.push(`${DUMMY_IMAGE_SRC}_1`);
}

export default function Photos() {
  return (
    <Flex h="100vh" py={20}>
      <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start" bg="gray.50">
        <Heading>Photos</Heading>
        <Flex justifyContent="space-evenly" w="100%" flexWrap="wrap" gap={8}>
          {photos.map((photo) => (
            <Box key={photo} boxSize="290px">
              {photo.startsWith(DUMMY_IMAGE_SRC) ? (
                <div />
              ) : (
                <Image src={photo} alt="Photo" w="100%" h="100%" objectFit="cover" />
              )}
            </Box>
          ))}
        </Flex>
      </VStack>
    </Flex>
  );
}
