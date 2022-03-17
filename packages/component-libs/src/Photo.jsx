import { Box, Image } from '@chakra-ui/react';
import React from 'react';

export default function Photo({ src, alt }) {
  return (
    <Box boxSize="290px">
      <Image
        src={src}
        alt={alt}
        w="100%"
        h="100%"
        objectFit="cover"
      />
    </Box>
  );
}
