import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import StateProvider from './components/StateProvider';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <StateProvider>
    <App />
  </StateProvider>
);
