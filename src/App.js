import { HashRouter } from 'react-router-dom';
import NavBar from './script/common/NavBar';
import AppRoute from './routes';
import './app.scss';
import { useState } from 'react';

function App() {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <HashRouter>
      <div className='container-fluid page-container'>
        <div className="row min-vh-100 flex-column flex-md-row m-0">
          <aside className="col-12 col-md-2 p-0 flex-shrink-1 aside-nav d-none d-md-block">
            <NavBar closeNav={() => setShowNavBar(false)} />
          </aside>
          <aside className="p-0 aside-nav d-block d-md-none">
            <div className='nav-trigger'>
              <nav className='p-2 fixed-nav'>
                <i className='fa fa-bars' onClick={() => setShowNavBar(true)} />
                <span>
                  <h4 className='brand-name m-0'>Praveen Arunachalam</h4>
                  <span className='brand-sub-title sub-title'>Full-stack web developer</span>
                </span>
              </nav>
            </div>
            <NavBar classes={`fixed-top${showNavBar ? '' : ' hidden'}`} closeNav={() => setShowNavBar(false)} />
          </aside>
          <main className={`main col bg-faded flex-grow-1 p-0 ${showNavBar ? 'no-scroll' : ''}`}>
            <AppRoute/>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
