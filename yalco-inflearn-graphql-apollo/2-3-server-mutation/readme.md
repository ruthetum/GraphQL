# Mutation 구현
```
Query : 데이터 조회
Mutation : 데이터 추가, 수정, 삭제
```

## Equipment 데이터 추가하기
### Mutation - 추가 루트 타입
```
type Mutation {
    insertEquipment(
        id: String,
        used_by: String,
        count: Int,
        new_or_used: String
    ): Equipment
    ...
}
```
### Resolver
```
Mutation: {
    insertEquipment: (parent, args, context, info) => {
        database.equipments.push(args)
        return args
    },
    //...
}
```
- SQL의 INSERT 문 등으로 구현

### Test
```
mutation {
  insertEquipment (
    id: "laptop",
    used_by: "developer",
    count: 17,
    new_or_used: "new"
  ) {
    id
    used_by
    count
    new_or_used
  }
}
```

## Equipment 데이터 수정하기
### Mutation - 수정 루트 타입
```
type Mutation {
    editEquipment(
        id: String,
        used_by: String,
        count: Int,
        new_or_used: String
    ): Equipment
    ...
}
```
### Resolver
```
Mutation: {
    // ...
    editEquipment: (parent, args, context, info) => {
        return database.equipments.filter((equipment) => {
            return equipment.id === args.id
        }).map((equipment) => {
            Object.assign(equipment, args)
            return equipment
        })[0]
    },
    // ...
}
```
- SQL의 UPDATE 문 등으로 구현

### Test
```
mutation {
  editEquipment (
    id: "pen tablet",
    new_or_used: "new",
    count: 30,
    used_by: "designer"
  ) {
    id
    new_or_used
    count
    used_by
  }
}
```

## Equipment 데이터 삭제하기
### Mutation - 삭제 루트 타입
```
type Mutation {
    deleteEquipment(id: String): Equipment
}
```
### Resolver
```
Mutation: {
      deleteEquipment: (parent, args, context, info) => {
          const deleted = database.equipments
              .filter((equipment) => {
                  return equipment.id === args.id
              })[0]
          database.equipments = database.equipments
              .filter((equipment) => {
                  return equipment.id !== args.id
              })
          return deleted
      }
}
```
- 삭제 후 결과값으로 받아올 데이터를 deleted 변수에 저장
- 데이터에서 해당 데이터 삭제 후 deleted 반환
- 실제 프로젝트에서는 SQL의 DELETE 문 등으로 구현

### Test
```
mutation {
  deleteEquipment(id: "notebook") {
    id
    used_by
    count
    new_or_used
  }
}
```

### Reference
https://www.yalco.kr/@graphql-apollo/2-3/