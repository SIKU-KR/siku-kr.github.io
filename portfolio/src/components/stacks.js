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
    <div className="container px-4 " id="stacks">
      <h2 className="pb-2 border-bottom">Stacks</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
        <StackItem 
          iconId="spring" 
          title="Spring" 
          description="Spring Boot를 사용하여 RestAPI를 개발할 수 있습니다."
          buttonText="자세히보기" 
        />
        <StackItem 
          iconId="java" 
          title="Java" 
          description="JDK 17까지의 기능들을 이해하고 사용합니다. JPA를 사용할 수 있습니다."
          buttonText="자세히보기" 
        />
        <StackItem 
          iconId="python" 
          title="Python" 
          description="데이터분석 및 시각화, 다양한 알고리즘 문제해결이 가능합니다."
          buttonText="자세히보기" 
        />
        <StackItem 
          iconId="sql" 
          title="Database" 
          description="RDB(MariaDB, SQLite)와 NoSQL(MongoDB)를 사용할 수 있습니다."
          buttonText="자세히보기" 
        />
        <StackItem 
          iconId="git" 
          title="Git, Github" 
          description="Git과 GitHub를 사용한 협업이 가능합니다."
          buttonText="자세히보기" 
        />
        <StackItem 
          iconId="aws" 
          title="AWS" 
          description="클라우드 웹서비스를 사용하여 서버 또는 서버리스로 서비스를 구현할 수 있습니다."
          buttonText="자세히보기" 
        />
      </div>
      <p>추가로 <strong>Kotlin, React.js, C/C++, HTML, CSS, JavaScript</strong> 개발 경험이 있습니다.</p>
    </div>
  );
}

export default Stacks;
