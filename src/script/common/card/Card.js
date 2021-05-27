import './card.scss';

const Card = (props) => {
  return (
    <div className={`col-md-12 col-lg-6 ${props.classes}`}>
      <div className='col-12 card card-wrapper'>
        <div className='col-12 card-title'>
          <h4 className='main-title'>{props.title || 'Title'}</h4>
          {props.subtitle && <span className='sub-title'>{props.subtitle}</span>}
        </div>
        <div className='col-12 card-content'>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Card;