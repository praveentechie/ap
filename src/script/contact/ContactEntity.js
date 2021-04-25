const ContactEntity = ({logoClass, description, link, linkText = link}) => {
  return (
    <div className='contact-entity'>
      <span className='logo-container'>
        <i className={`fa fa-3x ${logoClass}`} title={description} />
      </span>
      <a className='profile-link' href={link} target='_blank' rel="noreferrer">{linkText}</a>
    </div>
  );
};

export default ContactEntity;