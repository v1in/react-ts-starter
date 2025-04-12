import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Emoticon from './components/Emoticon';

function App() {
  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>React + TS</h1>
      <Emoticon />
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
