import React, { StrictMode } from 'react';
import * as ReactDomClient from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById("root")

const root = ReactDomClient.createRoot(container)

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)

reportWebVitals();
