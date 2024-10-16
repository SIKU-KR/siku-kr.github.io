import React, { useState } from "react";

function ProjectCard({ badges, title, descriptionList, period, tags, buttons, onClickReadme }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm py-3 px-4 d-flex flex-column">
        {/* 배지 */}
        <div className="">
          {badges.map((badge, index) => (
            <span key={index} className={`badge bg-${badge.type} me-2 rounded-pill`}>
              {badge.text}
            </span>
          ))}
        </div>

        {/* 프로젝트 제목 및 기간 */}
        <div className="card-body flex-grow-1 px-0">
          <h5 className="fw-bold">{title}</h5>
          <p className="text-muted">{period}</p>

          {/* 설명을 리스트로 표현 */}
          <ul className="list-unstyled" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            {descriptionList.map((desc, index) => (
              <li key={index} className="">
                {desc}
              </li>
            ))}
          </ul>
        </div>

        {/* 태그 */}
        <div className="mb-3 d-flex flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className="badge bg-warning text-dark me-2">
              {tag}
            </span>
          ))}
        </div>

        {/* 버튼 */}
        <div className="mt-auto">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="btn btn-sm btn-outline-primary me-2"
              onClick={() => onClickReadme(button.link)}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [readmeContent, setReadmeContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleClickReadme = async (link) => {
    try {
      const response = await fetch(link);  // URL에서 HTML 파일 가져오기
      const htmlContent = await response.text(); // HTML 내용을 텍스트로 변환
      setReadmeContent(htmlContent);
      setModalTitle("README");

      // 모달 표시
      const modal = new window.bootstrap.Modal(document.getElementById("readmeModal"));
      modal.show();
    } catch (error) {
      console.error("Error fetching README content:", error);
    }
  };

  return (
    <>
      <div className="album py-5 bg-light" id="projects">
        <div className="container col-xxl-8">
          <h2 className="pb-2 text-center mb-5">Projects</h2>
          <div className="row row-cols-1 row-cols-md-2 g-3">
            <ProjectCard
              badges={[
                { text: "Active", type: "success" },
                { text: "Android", type: "secondary" },
                { text: "Kotlin", type: "secondary" },
              ]}
              title="HolyBean(Android)"
              period="2024.01 - 현재"
              descriptionList={["교회에서 운영하는 카페의 상황에 맞는 POS 시스템 필요", "Kotlin Android를 사용한 네이티브 애플리케이션 구현"]}
              tags={["Kotlin", "Android"]}
              buttons={[{ text: "README", link: "/docs/holybean(android)/holybean.html" }]}  // 링크로 HTML 파일을 전달
              onClickReadme={handleClickReadme}
            />
            <ProjectCard
              badges={[
                { text: "Active", type: "success" },
                { text: "Lambda", type: "secondary" },
                { text: "DynamoDB", type: "secondary" },
              ]}
              title="HolyBean(Cloud)"
              period="2024.10 - 현재"
              descriptionList={["교회에서 운영하는 카페의 상황에 맞는 POS 시스템 필요", "AWS를 통한 서버리스 아키텍처 구현"]}
              tags={["AWS Lambda", "AWS DynamoDB", "JavaScript"]}
              buttons={[{ text: "README", link: "/docs/holybean(server)/holybean.html" }]} 
              onClickReadme={handleClickReadme}
            />
            <ProjectCard
              badges={[
                { text: "Active", type: "success" },
                { text: "React.js", type: "secondary" },
                { text: "CI/CD", type: "secondary" },
              ]}
              title="포트폴리오 페이지"
              period="2024.10 - 현재"
              descriptionList={["React.js를 사용한 포트폴리오 페이지 구성", "빌드부터 배포까지 하나의 스크립트로 진행되는 CI/CD 구축"]}
              tags={["Bootstrap", "React.js", "Github Pages"]}
              buttons={[{ text: "README", link: "/docs/portfolio/portfolio.html" }]}
              onClickReadme={handleClickReadme}
            />
            <ProjectCard
              badges={[
                { text: "Spring", type: "secondary" },
                { text: "MariaDB", type: "secondary" },
              ]}
              title="Unspace"
              period="2024.05 - 2024.10"
              descriptionList={["2024 실감미디어 경진대회", "XR을 통한 공간대여 서비스개선을 위한 RESTful API 작성"]}
              tags={["JAVA", "Spring Boot", "MariaDB"]}
              buttons={[{ text: "README", link: "/docs/portfolio/unspace.html" }]}
              onClickReadme={handleClickReadme}
            />
          </div>
        </div>
      </div>

      {/* Bootstrap Modal for README */}
      <div className="modal fade" id="readmeModal" tabIndex="-1" aria-labelledby="readmeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="readmeModalLabel">{modalTitle}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div dangerouslySetInnerHTML={{ __html: readmeContent }} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
