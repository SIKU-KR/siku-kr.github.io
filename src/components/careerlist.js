import React from "react";

// 줄바꿈 처리 함수
function renderDescription(description) {
  return description.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
}

// CareerItem: 개별 경력 항목
function CareerItem({ title, period, description, pdfLink }) {
  return (
    <div className="">
      <h5 className="fw-bold" style={{ marginBottom: "0.5rem", borderLeft: "3px solid black", paddingLeft: "10px", display: "flex", alignItems: "center" }}>
        {title}
        {pdfLink && (
          <a href={pdfLink} target="_blank" rel="noopener noreferrer" className="ms-2" style={{ display: "inline-flex", alignItems: "center" }}>
            <i className="bi bi-file-earmark-pdf-fill" style={{ color: "black", fontSize: "1.2rem", marginLeft: "8px" }}></i>
          </a>
        )}
      </h5>
      <p className="text-muted" style={{ marginBottom: "0.5rem" }}>
        {period}
      </p>
      <p style={{ marginBottom: "0.5rem" }}>{renderDescription(description)}</p>
    </div>
  );
}

// Career: 개별 회사 경력 정보
function Career({ logoSrc, companyName, period, description, tags, careerItems }) {
  return (
    <div className="container py-3">
      <div className="row">
        {/* Left Column: Logo with right border */}
        <div className="col-md-4 d-flex justify-content-center pe-4 career-logo-border" style={{ borderRight: "2px solid #ddd" }}>
          <img src={logoSrc} alt="Company Logo" className="img-fluid mb-3" style={{ width: "125px", height: "125px" }} />
        </div>

        {/* Right Column: Career Details */}
        <div className="col-md-8 ps-4">
          <h4 className="fw-bold">{companyName}</h4>
          <p className="text-muted">{period}</p>
          <p>{description}</p>

          {/* Career Items */}
          {careerItems.map((item, index) => (
            <CareerItem
              key={index}
              title={item.title}
              period={item.period}
              description={item.description}
              pdfLink={item.pdfLink} // Added pdfLink
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// CareerList: 여러 경력을 렌더링하는 컴포넌트
function CareerList({ careers }) {
  return (
    <div>
      {careers.map((career, index) => (
        <Career key={index} logoSrc={career.logoSrc} companyName={career.companyName} period={career.period} description={career.description} tags={career.tags} careerItems={career.careerItems} />
      ))}
    </div>
  );
}

export default CareerList;
