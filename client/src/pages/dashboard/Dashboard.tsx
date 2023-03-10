import { Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import { Views } from '../../types/types';
import Chat from './views/chat/Chat';
import Discover from './views/discover/Discover';
import Settings from './views/settings/Settings';

export default function Dashboard() {
  const [activeView, setActiveView] = useState<Views>('chat');

  const currentActiveView = () => {
    switch (activeView) {
      case 'chat':
        return <Chat />;
      case 'discover':
        return <Discover />;
      case 'settings':
        return <Settings />;
      default:
        return <Chat />;
    }
  };

  const switchView = (view: Views) => setActiveView(view);

  return (
    <Flex
      as="main"
      justifyContent="center"
      align="center"
      height="100vh"
    >

      <Flex
        as="section"
        minW={['97%', '97%', '97%', '97%', '80%']}
        minH={{ base: '90%', md: '80%' }}
        maxH="80vh"
        background="#232545"
        borderRadius="10px"
      >
        <Sidebar
          switchView={switchView}
        />
        <Flex
          as="section"
          flex="1"
          maxH="100%"
        >
          {currentActiveView()}
        </Flex>
      </Flex>
    </Flex>
  );
}
