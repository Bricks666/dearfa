import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/app';
import '@/models/init';

import './index.css';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(<App />);
