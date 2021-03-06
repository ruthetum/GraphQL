# GraphQL 기본 타입

## 스칼라 타입
- GraphQL 내장 자료형

|타입|설명|
|------|-----|
|ID|기본적으로는 String이나, 고유 식별자 역할임을 나타냄|
|String|UTF-8 문자열|
|Int|부호가 있는 32비트 정수|
|Float|부호가 있는 부동소수점 값|
|Boolean|참/거짓|

- ! : Non Null
    - null을 반환할 수 없음

## 열거 타입
- 미리 지정된 값들 중에서만 반환

```
const typeDefs = gql`
    enum Role {
        developer
        designer
        planner
    }
    enum NewOrUsed {
        new
        used
    }
`
```

## 리스트 타입
- 특정 타입의 배열을 반환

```
const typeDefs = gql`
    type EquipmentAdv {
        id: ID!
        used_by: Role!
        count: Int!
        use_rate: Float
        is_new: Boolean!,
        users: [String!]
    }
`
```

## 객체 타입
- 사용자에 의해 정의된 타입들