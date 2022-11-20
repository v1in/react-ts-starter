import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error("The element #root wasn't found");
}

const root = createRoot(container);

root.render(<App />);
