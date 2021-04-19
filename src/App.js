import { HashRouter } from 'react-router-dom';
import NabBar from './NabBar';
import AppRoute from './routes';
import './app.scss';

function App() {
  return (
    <div className='app'>
      <HashRouter>
        <div className='page-container'>
          <NabBar/>
          <main className='main'>
            <AppRoute/>
          </main>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
