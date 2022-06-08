import React, { useState } from 'react';

import {
  Home, Server, Player, viewNames,
} from './views';

function App() {
  const [view, setView] = useState('HOME');

  switch (view) {
    case viewNames.HOME:
      return <Home setView={setView} />;
    case viewNames.SERVER:
      return <Server />;
    case viewNames.PLAYER:
      return <Player />;
    default:
      return <Home />;
  }
}

export default App;
