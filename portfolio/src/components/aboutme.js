import React from "react";

function AboutMeItem({ iconClass, title, description }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="d-flex flex-column align-items-center text-center">
        <i className={`${iconClass} display-6 mb-2`}></i>
        <div>
          <h5 className="aboutme-title">{title}</h5>
          <p className="aboutme-detail">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Aboutme() {
  const aboutMeData = [
    { iconClass: "bi bi-person-circle", title: "이름", description: "박범식" },
    { iconClass: "bi bi-calendar-event", title: "생년월일", description: "2002.01.26" },
    { iconClass: "bi bi-geo-alt", title: "위치", description: "서울특별시 광진구" },
    { iconClass: "bi bi-telephone", title: "연락처", description: "010-5209-3212" },
    { iconClass: "bi bi-envelope", title: "이메일", description: "bumshik0126@gmail.com" },
    { iconClass: "bi bi-pencil", title: "학력", description: "건국대학교 컴퓨터공학부" },
  ];

  return (
    <div className="py-5 bg-light">
      <div className="container col-xxl-6" id="aboutMe">
        <h2 className="text-center mb-5">ABOUT ME</h2>
        <div className="row g-4 justify-content-center">
          {aboutMeData.map((item, index) => (
            <AboutMeItem key={index} iconClass={item.iconClass} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
