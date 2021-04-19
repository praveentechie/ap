const SkillItem = ({name, imageSrc}) => {
  return (
    <div className='skill-item'>
      <img className='skill-item-image' alt={name} src={imageSrc}/>
      <span className='skill-item-text'>{name}</span>
    </div>
  );
};

export default SkillItem;