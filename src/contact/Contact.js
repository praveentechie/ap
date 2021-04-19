import ContactEntity from './ContactEntity';
import './contact.scss';

const Contact = () => {
  return (
    <section id='contact' className='section contact'>
      <header>
        <h1 className='page-header'>Contact</h1>
      </header>
      <div className='container'>
        <div className='logo-wrapper'>
          <ContactEntity logoClass='fa-github' description='GitHub' link='https://github.com/praveentechie' />
          <ContactEntity logoClass='fa-twitter' description='Twitter' link='https://twitter.com/praveen_ap7' />
          <ContactEntity logoClass='fa-linkedin-square' description='LinkedIn' link='https://www.linkedin.com/in/praveen-a-15069a7a/' />
          <ContactEntity logoClass='fa-envelope' description='Mail' link='mailto:mailtopraveen74@gmail.com' linkText='mailtopraveen74@gmail.com' />
        </div>
      </div>
    </section>
  );
};

export default Contact;