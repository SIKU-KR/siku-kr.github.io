import React from "react";

function Title() {
  return (
    <div className="d-flex justify-content-center align-items-center" id="title">
      <div className="container text-center col-xxl-8 px-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-5 fw-bold lh-1 mb-3">안녕하세요,</h1>
            <h1 className="display-5 fw-bold lh-1 mb-3">백엔드 개발자 박범식입니다!</h1>
            <p className="lead">
              사람들이 필요로 하는 서비스를 개발하는 개발자,
              <br />
              최선의 코드와 아키텍쳐를 제시하는 개발자를 지향합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
