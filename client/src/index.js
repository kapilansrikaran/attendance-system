import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';


import { createRoot } from 'react-dom/client';


createRoot(document.getElementById('root')).render(<App />);

