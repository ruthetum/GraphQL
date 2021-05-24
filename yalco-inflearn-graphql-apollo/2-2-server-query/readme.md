# Query 구현

## Query 루트 타입
```
type Query {
    teams: [Team]
}
```
- 자료요청에 사용될 쿼리들을 정의
- 쿼리 명령문마다 반환될 데이터 형태를 지정

## Type
```
type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
}
```
- 반환될 데이터의 형태를 지정
- 자료형을 가진 필드들로 구성

## Resolver
```
const resolvers = {
  Query: {
    teams: () => database.teams
  }
}
```
- Query란 object의 항목들로 데이터를 반환하는 함수 선언
- 실제 프로젝트에서는 MySQL 조회 코드 등..