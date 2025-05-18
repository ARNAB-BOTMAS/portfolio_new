import '../sass/Project.scss';

const Project = ({ project }) => {
  const viewMore = () => {
    window.open("https://github.com/ARNAB-BOTMAS", "_blank");

    // window.location.href = "https://github.com/ARNAB-BOTMAS";
  };
  return (
    <div className="project" id="project">
      <h1>Projects</h1>
      <div className="innerproject">
        {project.map((item) => (
          <section
            key={item.id}
            className="projectcard"
            style={{ backgroundImage: `url('${item.background}')` }}
          >
            <div className="coverpage">
              <div className="projecttext">
                <span>{item.project_title}</span>
              </div>
              <div className="projectContent">
                <p>{item.project_description}</p>
                <div className="buttonContent">
                  {item.project_link && (
                    <a
                      href={item.project_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>GitHub</button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <button className="viewmore" onClick={viewMore}>View More</button>
    </div>
  );
};

export default Project;
