# REST API의 한계와 GraphQL 사용 이유
```
REST API의 한계와 GraphQL의 사용 이유

- Overfetching과 Underfetching을 해결하기 위해
```

# REST API
- 소프트웨어 간 정보를 주고받는 방식
    - GraphQL 이전부터 사용
    - GraphQL은 '다른' 방식 - 용도와 작업특성에 따라 적합한 것을 사용하기 위해

### Data
```
[
  {
    name: '30분짜장',
    category: 'chinese',
    tel: '##-####-####',
    rating: 4.6
  },
  {
    name: '피자파자마',
    category: 'italian',
    tel: '##-####-####',
    rating: 3.9
  },
  {
    name: '공중떡볶이',
    category: 'snack',
    tel: '##-####-####',
    rating: 4.9
  },
  ///...
]
```

- REST API는 데이터를 주고받을 주체들간 약속된 형식
    - URI 형식(어떤 정보를) + 요청 방식(어떻게 할 것인가)

    |요청 형식|용도|
    |------|-----|
    |GET|조회|
    |POST|생성|
    |PUT/PATCH|수정|
    |DELETE|삭제|

## 실습
### 환경 설정
```
# nodemon 설치
npm install -g nodemon

# 프로젝트 모듈 설치
npm i

# 프로젝트 실행 명령어
nodemon index.js
# 브라우저에서 localhost:3000 으로 확인
```

### API 리스트

1. 팀(들), 팀원 목록 받아오기
    |요청 형식|URI|
    |------|-----|
    |GET|localhost:3000/api/team|
    |GET|localhost:3000/api/team/{id 번호}|
    |GET|localhost:3000/api/people|
    |GET|localhost:3000/api/people?{변수}={값}&{변수}={값} ...|
    |GET|localhost:3000/api/team/{id 번호}/people|

2. 팀 추가하기
    |요청 형식|URI|
    |------|-----|
    |POST|localhost:3000/api/team|
    
3. 팀 수정하기
    |요청 형식|URI|
    |------|-----|
    |PUT|localhost:3000/api/team/{id 번호}|

4. 팀 삭제하기
    |요청 형식|URI|
    |------|-----|
    |DELETE|localhost:3000/api/team/{id 번호}|

## REST API의 한계
### Case 1. 각 팀의 매니저와 오피스 호수만 필요할 때 - Overfetching
```
[
  {
    "manager": "Mandy Warren",
    "office": "101A",
  },
  {
    "manager": "Stewart Grant",
    "office": "101B",
  },
  {
    "manager": "Smantha Wheatly",
    "office": "102A",
  },
  // ...
]
```
* 필요한 정보만 받아올 수 없음

### Case 2. 특정 팀의 매니저와 팀원들 명단이 필요할 때 - Underfetching
```
{
  "manager": "Mandy Warren",
  "members": [
    {
      "first_name": "Nathan",
      "last-name": "Jenkins"
    },
    {
      "first_name": "Isabella",
      "last-name": "Martin"
    },
    {
      "first_name": "Kate",
      "last_name": "Owen"
    },
    //...
  ]
}
```
* 필요한 정보들을 요청 한 번에 받아올 수 없음

### Reference
https://www.yalco.kr/@graphql-apollo/1-2/