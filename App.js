import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import home from './views/home';

export default function App() {
  return (
    <Routes></Routes>
  );
}

const Routes = createAppContainer(
  createSwitchNavigator({
    home
  })
);