# Apollo 서버 구축

```
npm i graphql apollo-server

# ApolloServer
# - typeDef와 resolver를 인자로 받아 서버 생성

# typeDef
# - GraphQL 명세에서 사용될 데이터, 요청의 타입 지정
# - gql(template literal tag)로 생성

# resolver
# - 서비스의 액션들을 함수로 지정
# - 요청에 따라 데이터를 반환, 입력, 수정, 삭제
```


## 설치
```
npm i graphql apollo-server
```

```
const database = require('./database')
const { ApolloServer, gql } = require('apollo-server')
const typeDefs = gql`
  type Query {
    teams: [Team]
  }
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
  }
`
const resolvers = {
  Query: {
    teams: () => database.teams
  }
}
const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
```

### <b>ApolloServer</b>
- typeDef와 resolver를 인자로 받아 서버 생성

<b>typeDef</b>
  - GraphQL 명세에서 사용될 데이터, 요청의 타입 지정
  - gql(template literal tag)로 생성

<b>resolver</b>
  - 서비스의 액션들을 함수로 지정
  - 요청에 따라 데이터를 반환, 입력, 수정, 삭제


```
npm start
```

## 쿼리 테스트
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

### Reference
https://www.yalco.kr/@graphql-apollo/2-1/