import SkillItem from "./SkillItem";

const SkillType = ({skillType, skillItems = []}) => {
  return (
    <div className='skill-type'>
      <h4 className='skill-type-title main-title'>{skillType}</h4>
      <div className='skill-item-container'>
        {
          skillItems.map(item => (
            <SkillItem key={item.name}
              name={item.name}
              imageSrc={item.imageSrc}
              experience={item.formattedExperience}
            />
          ))
        }
      </div>
    </div>
  );
};

export default SkillType;