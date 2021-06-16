import { Component } from 'react';
import './home.scss';

class Home extends Component {
  render() {
    return (
      <section id='home' className='section home'>
        <div className='home-container row m-0'>
          <div className='cover-overlay col'></div>
          <div className='cover-content col'>
            <h1 className='cover-name'>Hey, I'm Praveen,</h1>
            <p className='cover-description'>a web developer specialized in both</p>
            <p className='cover-description'><b>front-end & back-end</b> technologies.</p>
            <p className='cover-description'>I build stunning and functional websites.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;