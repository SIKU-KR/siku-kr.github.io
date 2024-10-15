import React from "react";

function NavLink(props){
  return (
    <li className="nav-item">
      <a className="nav-link" href={props.link}>{props.title}</a>
    </li>
  );
}

function Navbar(){
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
        <div className="container col-xxl-8">
          <a className="navbar-brand" href="#">Bumshik Park</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <NavLink link="#firstSection" title="About Me"/>
              <NavLink link="#stacks" title="Stacks"/>
              <NavLink link="#projects" title="Projects"/>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
