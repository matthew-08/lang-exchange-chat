import Dashboard from './pages/dashboard/Dashboard';
import './global.css';
import ToggleColorMode from './global_components/ToggleColorMode';
import AppRoutes from './routes/AppRoutes';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
