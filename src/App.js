import { HashRouter } from 'react-router-dom';
import NavBar from './script/common/NavBar';
import AppRoute from './routes';
import './app.scss';

function App() {
  return (
    <HashRouter>
      <NavBar classes='d-none d-md-block' />
      <div className='container-fluid page-container'>
        <main className='main'>
          <AppRoute/>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
