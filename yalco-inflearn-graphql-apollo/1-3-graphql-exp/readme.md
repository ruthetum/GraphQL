# GraphQL
```
GraphQL의 장점

1. 필요한 정보들만 선택하여 받아올 수 있음
    - Overfetching 문제 해결
    - 데이터 전송량 감소

2. 여러 계층의 정보들을 한 번에 받아올 수 있음
    - Underfetching 문제 해결
    - 요청 횟수 감소

3. 하나의 endpoint에서 모든 요청을 처리
    - 하나의 URI에서 POST로 모든 요청 관리
```

## 실습
### 환경 설정
```
# 프로젝트 모듈 설치
npm i

# 프로젝트 실행 명령어 (해당 프로젝트 폴더에서)
nodemon index.js
# 브라우저에서 localhost:4000 으로 확인
```

### 팀 정보 받아오기
```
query {
  teams {
    id
    manager
    office
    extension_number
    mascot
    cleaning_duty
    project
  }
}
```

### 필요한 정보만 받아오기
```
query {
  teams {
    manager
    office
  }
}
```
```
query {
  team(id: 1) {
    manager
    office
  }
}
```

### 팀 정보와 해당 팀 멤버들의 정보들 받아오기
```
query {
  team(id: 1) {
    manager
    office
    members {
      first_name
      last_name
    }
  }
}
```

### 새 팀 추가
```
mutation {
  postTeam (input: {
    manager: "John Smith"
    office: "104B"
    extension_number: "#9982"
    mascot: "Dragon"
    cleaning_duty: "Monday"
    project: "Lordaeron"
  }) {
    manager
    office
    extension_number
    mascot
    cleaning_duty
    project
  }
}
```

### 특정 번호의 팀 정보 수정
```
mutation {
  editTeam(id: 2, input: {
    manager: "Maruchi Han"
    office: "105A"
    extension_number: "2315"
    mascot: "Direwolf"
    cleaning_duty: "Wednesday"
    project: "Haemosu"
  }) {
    id,
    manager,
    office,
    extension_number,
    mascot,
    cleaning_duty,
    project
  }
}
```

### 특정 번호의 팀 삭제
```
mutation {
  deleteTeam(id: 3) {
    id,
    manager,
    office,
    extension_number,
    mascot,
    cleaning_duty,
    project
  }
}
```

# Apollo
```
- GraphQL은 단순한 형식이기 때문에 정보 제공 및 처리를 위한 솔루션 필요

- 다양한 솔루션이 존재하지만 Apollo의 경우 백엔드와 프론트엔드 모두 기능이 제공되고 간단하기 때문에 사용
```

- GraphQL은 단순한 <b>명세</b>, 형식
- 따라서 GraphQL을 구현할 솔루션 필요
    - 백엔드에서 정보를 제공 및 처리
    - 프론트엔드에서 요청 전송
    - [GraphQL.js](https://www.npmjs.com/package/graphql), [GraphQL Yoga](https://github.com/dotansimha/graphql-yoga), [AWS Amplify](https://docs.amplify.aws/), [Relay](https://relay.dev/)...
    - [기타 솔루션](https://graphql.org/code/)

- [Apollo GraphQL](https://www.apollographql.com/)
    - 백엔드와 프론트엔드 모두 제공
    - 간편하고 쉬운 설정
    - 다양한 기능

- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)를 활용한 백엔드 제작
- [Apollo Client](https://www.apollographql.com/docs/react/)와 React를 활용한 프론트엔드 제작

### Reference
https://www.yalco.kr/@graphql-apollo/1-3/
https://www.yalco.kr/@graphql-apollo/1-4/