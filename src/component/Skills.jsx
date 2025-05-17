import '../sass/Skills.scss';

const Skills = ({ skills }) => {
  return (
    <div className="skills" id='skills'>
      <h1>Skills</h1>
      <div className="innerskill">
        {skills.map((skill) => (
          <div key={skill.id} className="skillcart">
            <img src={skill.skill_logo} alt={skill.skill_name} />
            <p>{skill.skill_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
