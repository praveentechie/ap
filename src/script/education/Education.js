import Card from "../common/card/Card";
import './education.scss';

const Education = () => {
  return (
    <section id='education' className='section education'>
      <header>
        <h1 className='page-header'>Education</h1>
      </header>
      <div className='container'>
        <div className='row'>
          <Card classes='education-card' title='Jeppiaar Engineering College' subtitle='Chennai, India'>
            <ul className='education-detail'>
              <li>B.Tech in Information Technology</li>
              <li>2010 - 2014</li>
            </ul>
          </Card>
          <Card classes='education-card' title='S.V.V. Hr. Sec. School' subtitle='Erode, India'>
            <ul className='education-detail'>
              <li>Higher secondary</li>
              <li>2010</li>
            </ul>
          </Card>
          {/* <Card classes='education-card' title='Bishop Ubagarasamy Hr. Sec. School' subtitle='Tirupur, India'>
            <ul className='education-detail'>
              <li>SSLC</li>
              <li>2008</li>
            </ul>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default Education;