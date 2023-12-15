import React from 'react'
import ReactDOM from 'react-dom/client'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/dates/styles.css';
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById('root')).render(
<HelmetProvider>
            <MantineProvider>
                <App />
            </MantineProvider>
        </HelmetProvider>

    
)
