import '../sass/Experience.scss';

const Experience = ({ experience }) => {
  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <div className="comImage">
        <div className="imageLogo">
          {experience.map((item) => (
            <div
              key={item.id}
              className="companyBox"
              style={{ backgroundImage: `url('${item.company_logo}')` }}
            >
              <div className="infoOverlay">
                <h3>{item.position}</h3>
                <p>{item.company_name}</p>
                <p>
                  {item.joining_year} - {item.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
