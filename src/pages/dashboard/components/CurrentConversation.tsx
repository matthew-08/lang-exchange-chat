import React from 'react';
import { Flex, Box, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import MessageInput from './MessageInput';

interface CurrentConversationProps {
  mobileView: boolean,
  changeView?: () => void
  display: 'flex' | 'none'
  conversation: string[]
}

export default function CurrentConversation(
  {
    mobileView, changeView, display, conversation,
  }:CurrentConversationProps,
) {
  return (
    <Flex
      as="main"
      flex="1"
      display={display}
      color="black"
      flexDir="column"
    >
      <Flex
        as="header"
        maxH="15%"
        minH="15%"
        minW="100%"
        borderColor="gray.100"
        borderBottom="2px"
        align="center"

      >
        {mobileView && (
        <IconButton
          aria-label="menu-icon"
          icon={(
            <ArrowBackIcon
              w="60px"
              h="60px"
              color="black"
            />
)}
        />
        )}

      </Flex>
      <MessageInput />
    </Flex>

  );
}
