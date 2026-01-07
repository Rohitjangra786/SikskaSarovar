
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("FATAL: Could not find root element to mount the SikshaSarovar application.");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("CRITICAL: Error during React root mounting:", error);
    rootElement.innerHTML = `<div style="padding: 20px; color: #ef4444; font-family: sans-serif;">
      <h2>SikshaSarovar Error</h2>
      <p>The application failed to start. Check the browser console for details.</p>
    </div>`;
  }
}
