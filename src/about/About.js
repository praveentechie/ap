import { Component } from 'react';
import './about.scss';

class About extends Component {
  render() {
    return (
      <section id='about' className='section about-me'>
        <header>
          <h1 className='page-header'>About me</h1>
        </header>
        <section>
          <div className='page-container'>
            <div style={{'textAlign': 'center', width: '100%', fontSize: '2rem', marginTop: '5rem'}}>
              <i className="fa fa-hourglass-start" aria-hidden="true"></i>
              &nbsp;Site is under construction
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default About;