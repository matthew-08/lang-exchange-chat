import Dashboard from './pages/dashboard/Dashboard';
import './global.css';
import ToggleColorMode from './global_components/ToggleColorMode';
import AppRoutes from './routes/AppRoutes';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Flex
        as="main"
        justify="center"
        align="center"
        height="100vh"
        background="#232545"
      >
        <AppRoutes />

      </Flex>
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
