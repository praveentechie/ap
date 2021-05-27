import './award.scss';

const awards = [
  {
    name: 'Spot award',
    organization: 'AGILYSYS TECHNOLOGIES',
    awardedOn: 'Nov, 2020',
    desc: 'Quarterly awarded to the employees who goes above and beyond in their role to make a positive impact on the organization.'
  }, {
    name: 'Customer focus award',
    organization: 'WIPRO TECHNOLOGIES',
    awardedOn: 'Jun, 2016',
    desc: 'Awarded to the employees annually, who helps in improving Customer\'s satisfaction with the application.'
  }, {
    name: 'Budding star award',
    organization: 'WIPRO TECHNOLOGIES',
    awardedOn: 'Jun, 2015',
    desc: 'Awarded to the employees who are fresh to the industry and provided tremendous contribution towards application development.'
  }
];

const AwardDetails = ({title, organization, awardedOn, desc}) => {
  return (
    <div className='col-md-12 col-lg-6 award-details-container'>
      <div className='award-details'>
        <h4 className='award-title'>{title}</h4>
        <p className='sub-title'>{`${organization} | ${awardedOn}`}</p>
        <p className='desc'>{desc}</p>
      </div>
    </div>
  );
};

const Award = () => {
  return (
    <section id='award' className='section award'>
      <header>
        <h1 className='page-header'>Awards</h1>
      </header>
      <div className='container'>
        <div className='row'>
          {
            awards.map(award => (
              <AwardDetails key={award.awardedOn}
                title={award.name}
                organization={award.organization}
                awardedOn={award.awardedOn}
                desc={award.desc}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
};

export default Award;