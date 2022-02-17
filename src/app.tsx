import React, { useState } from 'react';
import { Header } from './components/header';
import { StatsManager } from './components/stats-manager';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(
    document.documentElement.classList.contains('dark')
  );

  return (
    <div
      className={`w-screen h-screen grid  ${
        darkMode ? 'bg-black text-neutral-200' : 'bg-white text-neutral-900'
      }`}
    >
      <div className="layout-grid w-screen justify-self-center">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <StatsManager />
      </div>
    </div>
  );
}

export default App;
