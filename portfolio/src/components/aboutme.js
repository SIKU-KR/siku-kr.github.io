import React from "react";

function PrimaryButton(props){
  return <>
      <a href={props.link} target="_blank" rel="noopener" className="btn btn-primary btn-lg px-4">{props.title}</a>
  </>
}

function Careers(props){
    return (
        <>
            <dt className="col-sm-5">{props.header}</dt>
            <dd className="col-sm-5">{props.detail}</dd>
        </>
    );
}

function Aboutme(){
    return <div className="container col-xxl-8 px-4 py-5" id="firstSection">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="/img/main.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">안녕하세요, 박범식입니다!</h1>
        <p className="lead">사람들이 필요로 하는 서비스를 개발하는 개발자를 지향합니다.<br/>건국대학교 컴퓨터공학부 3학년이며, Server 관련한 공부하고 있습니다.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <PrimaryButton link="https://github.com/SIKU-KR" title="GitHub"/>
            <PrimaryButton link="https://velog.io/@siku-kr" title="Blog"/>
        </div>
        <br/>
        <h3 className="pb-2 border-bottom">Careers</h3>
        <dl className="row">
            <Careers header='GDG on Campus Konkuk' detail='24-25 Member (now)' />
            <Careers header='Project-X Konkuk 2024' detail='Mentor' />
        </dl>
      </div>
    </div>
  </div>
}

export default Aboutme;
