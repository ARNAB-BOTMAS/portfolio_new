import '../sass/Education.scss'

const Education = ({education}) => {
    return (
        <div className="education" id="education">
            <h1>
                My Education
            </h1>
            <div className="inneredu">
                {education.map((edu) => (
                <section key={edu.id} className="schoolEduaction">
                    <img src={edu.establishment_picture} alt={edu.establishment_name} />
                    <div className="innerEduText">
                    <span className="courseName">{edu.course_name}</span>
                    <span className="instName">
                        {edu.establishment_name} | {edu.organization_name}
                    </span>
                    <span className="compelteYear">
                        {edu.start_year}-{edu.end_year} | {edu.status}
                    </span>
                    </div>
                </section>
                ))}
            </div>
        </div>
    );
};

export default Education;