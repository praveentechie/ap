import Card from "../utils/card/Card";
import './education.scss';

const Education = () => {
  return (
    <section id='education' className='section education'>
      <header>
        <h1 className='page-header'>Education</h1>
      </header>
      <div className='container'>
        <Card classes='education-card' title='Jeppiaar Engineering College' subtitle='Chennai, TN, India'>
          <ul>
            <li>B.Tech in Information Technology</li>
            <li>2010 - 2014</li>
          </ul>
        </Card>
        <Card classes='education-card' title='S.V.V. Hr. Sec. School' subtitle='Erode, TN, India'>
          <ul>
            <li>Higher secondary</li>
            <li>2008 - 2010</li>
          </ul>
        </Card>
        <Card classes='education-card' title='Bishop Ubagarasamy Hr. Sec. School' subtitle='Tirupur, TN, India'>
          <ul>
            <li>SSLC</li>
            <li>2008</li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default Education;