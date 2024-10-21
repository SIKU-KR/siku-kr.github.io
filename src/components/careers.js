import React from "react";
import CareerList from "./careerlist";

const careersData = [
  {
    logoSrc: "/img/gdg.jpg",
    companyName: "GDG on Campus Konkuk",
    period: "2024.09 - 현재",
    description: "GDG on Campus Konkuk Member",
    tags: ["JAVA", "Spring"],
    careerItems: [
      {
        title: "스터디 참여",
        period: "2024.09 -",
        description: "1. 스프링 MVC 스터디 with Test\n2. Modern JAVA in Action 스터디(JAVA8)",
      }
    ],
  },
  {
    logoSrc: "/img/projectx.jpg",
    companyName: "Project-X with Konkuk",
    period: "2023, 2024",
    description: "이노베이션아카데미, 건국대에서 주관한 Project-X 참여",
    tags: ["JAVA", "Python"],
    careerItems: [
      {
        title: "Project-X with Konkuk 2024",
        period: "2024.05 - 2024.07",
        description: "학생 멘토 참여",
        pdfLink: "https://siku-kr.github.io/pdf/project-x-2024.pdf"
      },
      {
        title: "Project-X with Konkuk 2023",
        period: "2023.11",
        description: "팀 3위 및 우수참여자 수상",
        pdfLink: "https://siku-kr.github.io/pdf/project-x-2023.pdf"
      }
    ],
  }
];

function Careers() {
  return (
    <div className="py-5" id="careers">
      <div className="container col-xxl-6 px-4">
        <h2 className="pb-2 text-center mb-4">Careers</h2>
        <CareerList careers={careersData} />
      </div>
    </div>
  );
}

export default Careers;
