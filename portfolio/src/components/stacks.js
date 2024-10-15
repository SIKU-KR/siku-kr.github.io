import React from 'react';

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
    <div className="container col-xxl-8 px-4" id="stacks">
      <h2 className="pb-2 border-bottom">Stacks</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <StackItem 
          iconId="spring" 
          title="Spring" 
          description="스프링 프레임워크를 이해하고 서버 애플리케이션을 구축합니다."
          buttonText="자세히보기" 
        />
        <StackItem 
          iconId="java" 
          title="Java" 
          description="JDK 17까지의 기능들을 이해하고 사용합니다."
          buttonText="자세히보기" 
        />
        <StackItem 
          iconId="python" 
          title="Python" 
          description="데이터처리와 알고리즘 문제풀이에 사용합니다."
          buttonText="자세히보기" 
        />
        <StackItem 
          iconId="sql" 
          title="Database" 
          description="SQL과 NoSQL을 사용하여 서비스를 개발합니다."
          buttonText="자세히보기" 
        />
        <StackItem 
          iconId="aws" 
          title="AWS" 
          description="클라우드서비스를 사용하여 서비스를 구축합니다."
          buttonText="자세히보기" 
        />
      </div>
      <p className="text-center">추가로 <strong>Kotlin, React, C/C++, HTML, CSS, JavaScript</strong> 을 사용합니다.</p>
    </div>
  );
}

export default Stacks;
