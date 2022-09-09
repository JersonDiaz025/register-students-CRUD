import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StoreProvider, {Context} from './store/StoreProvider';
import './styles/index.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <StoreProvider>
    <App />
  </StoreProvider>
  // </React.StrictMode>
);
