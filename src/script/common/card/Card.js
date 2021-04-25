import './card.scss';

const Card = (props) => {
  return (
    <div className={`card ${props.classes}`}>
      <div className='card-title'>
        <h4 className='skill-item-text main-title'>{props.title || 'Title'}</h4>
        {props.subtitle && <span className='sub-title'>{props.subtitle}</span>}
      </div>
      <div className='card-content'>
        {props.children}        
      </div>
    </div>
  );
};

export default Card;