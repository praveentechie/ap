import { Component } from 'react';
import './home.scss';

class Home extends Component {
  render() {
    return (
      <section id='home' className='section home'>
        <div className='contact-card'>
          <img src={`${window.repoName}/ap.png`} className='avatar' alt='Avatar'/>
        </div>
        <div>
          
        </div>
      </section>
    );
  }
}

export default Home;