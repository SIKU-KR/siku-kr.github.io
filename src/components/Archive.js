import React from "react";

function ArchiveItem({ iconSrc, title, link, description }) {
  return (
    <div className="col-md-6">
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
        <div className="card h-100 shadow-sm border-0 rounded-3 archive-card">
          <div className="card-body d-flex flex-column align-items-center text-center">
            <div style={{ width: "150px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={iconSrc} alt={title} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
            </div>
            <h5 className="card-title mt-3">{title}</h5>
            <p className="text-primary mb-2">{link}</p>
            <p className="card-text text-muted">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

function Archive() {
  return (
    <div className="bg-arch py-5" id="archiving">
      <div className="container col-xxl-6 px-4">
        <h2 className="pb-2 text-center mb-5">Archiving</h2>
        <div className="row g-5">
          <ArchiveItem
            iconSrc="/img/github.webp"
            title="GitHub"
            link="https://github.com/SIKU-KR"
            description="소스 코드 저장소"
          />
          <ArchiveItem
            iconSrc="/img/tistory.png"
            title="Siku.Log"
            link="https://cseant.tistory.com/"
            description="공부, 개발에 대한 생각을 적는 블로그"
          />
        </div>
      </div>
    </div>
  );
}

export default Archive;
