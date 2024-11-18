import React from "react";

// 네비게이션 클릭 시 스크롤 위치를 조정하는 함수
function handleNavClick(e, link) {
  e.preventDefault(); // 기본 앵커 이동 방지
  const targetElement = document.querySelector(link);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 60, // 네비게이션 높이만큼 조정
      behavior: "smooth", // 부드러운 스크롤
    });
  }
}

function NavLink(props) {
  return (
    <li className="nav-item">
      <a className="nav-link px-2" href={props.link} onClick={(e) => handleNavClick(e, props.link)}>
        {props.title}
      </a>
    </li>
  );
}

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark px-2">
      <div className="container col-xxl-6">
        <a className="navbar-brand" href="#aboutMe">SIKU's Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <NavLink link="#aboutMe" title="About Me" />
            <NavLink link="#stacks" title="Stacks" />
            <NavLink link="#archiving" title="Archiving" />
            <NavLink link="#projects" title="Projects" />
            <NavLink link="#careers" title="Careers" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
