const SkillItem = ({name, imageSrc, experience}) => {
  return (
    <div className='skill-item'>
      <img className='skill-item-image' alt={name} src={imageSrc}/>
      <span className='skill-item-text'>{name}</span>
      <span className='skill-item-experience sub-title'>({experience})</span>
    </div>
  );
};

export default SkillItem;