import React from 'react';

function ProjectCard({ imageSrc, altText, badges, title, description, link }) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        {imageSrc ? (
          <img src={imageSrc} className="bd-placeholder-img card-img-top" alt={altText} width="100%" height="225" />
        ) : (
          <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
          </svg>
        )}

        <div className="card-body">
          <h5>
            {badges.map((badge, index) => (
              <span key={index} className={`badge bg-${badge.type} me-2`}>
                {badge.text}
              </span>
            ))}
          </h5>
          <p className="card-text">
            <b>{title}</b><br />
            {description}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">자세히보기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="album py-5 bg-light" id="projects">
      <div className="container">
        <h2 className="pb-2 border-bottom">Projects</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <ProjectCard
            imageSrc="/img/holybean.jpg"
            altText="Holybean Project Image"
            badges={[
              { text: 'Server', type: 'success' },
              { text: 'Android', type: 'secondary' }
            ]}
            title="HolyBean"
            description="제가 다니는 교회에서 사용중인 Android POS Application입니다."
            link="#"
          />

          <ProjectCard
            imageSrc={null}
            altText="Unspace Project Image"
            badges={[
              { text: 'Server', type: 'success' }
            ]}
            title="Unspace"
            description="건국대학교의 X-Space 공간대여 앱&XR 복합서비스입니다."
            link="#"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
