import React from 'react';
import { Container, Text, Flex } from '@chakra-ui/react';

export default function Message({ message }) {
  return (
    <Flex
      maxW="40%"
      ml={message.currentUser ? 'auto' : ''}
      mr={message.currentUser ? '' : 'auto'}
    >
      <Flex
        width="100%"
        backgroundColor={message.currentUser ? 'blue.100' : 'gray.100'}
        padding="1rem"
        borderRadius="10px"
      >
        <Text>
          {message.messageContent}
        </Text>
      </Flex>
    </Flex>
  );
}
