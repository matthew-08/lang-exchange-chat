import React from 'react';
import {
  Flex, VStack, IconButton, Image,
} from '@chakra-ui/react';
import chat from '../../../assets/chat.png';
import discover from '../../../assets/discover.png';
import settings from '../../../assets/settings.png';

interface Props {
  switchView: (view: 'chat' | 'discover' | 'settings') => void
}

export default function Sidebar({ switchView }: Props) {
  return (
    <Flex
      minW="7%"
      minH="100%  "
      background="blue.100"
      as="aside"
      align="center"
      justify="center"
    >
      <VStack
        gap="2rem"
      >
        <IconButton
          aria-label="discover-cion"
          icon={<Image src={discover} />}
          onClick={() => switchView('discover')}
        />
        <IconButton
          aria-label="chat-icon"
          icon={<Image src={chat} />}
          onClick={() => switchView('chat')}

        />
        <IconButton
          mt="auto"
          aria-label="settings-icon"
          icon={<Image src={settings} />}
          onClick={() => switchView('settings')}
        />
      </VStack>
    </Flex>
  );
}
