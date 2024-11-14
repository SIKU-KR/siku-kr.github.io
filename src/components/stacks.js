import React from "react";

function StackItem({ iconId, title, description, buttonText }) {
  return (
    <div className="col d-flex align-items-start">
      <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">
        <use href={`/icons.svg#${iconId}`} />
      </svg>
      <div>
        <h4 className="fw-bold mb-0">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Stacks() {
  return (
    <div className="bg-spring py-5" id="stacks">
      <div className="container col-xxl-6 px-4">
        <h2 className="pb-2 text-center mb-4">Stacks</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 py-3 mb-3">
          <StackItem iconId="java" title="Java" description="객체지향프로그래밍, JVM, JPA를 이해하고 사용합니다"/>
          <StackItem iconId="spring" title="Spring" description="스프링 프레임워크를 이해하고 서버 애플리케이션을 개발합니다"/>
          <StackItem iconId="sql" title="Database" description="관계형 데이터베이스를 사용하여 개발합니다"/>
          <StackItem iconId="aws" title="AWS" description="클라우드 서비스를 사용하여 서비스를 구축합니다"/>
          <StackItem iconId="python" title="Python" description="범용적인 프로그래밍에서 사용합니다"/>
        </div>
        <p className="lead text-center" style={{ fontWeight: 400 }}>
          이외에도 <strong>Kotlin, JavaScript, React</strong>를 사용합니다.
        </p>
      </div>
    </div>
  );
}

export default Stacks;
