---
title: (SpringBoot) JPA 매핑 어노테이션 - @Entity, @Table, @Column, @Id
date: 2021-06-15
tags: [Spring]
excerpt: Spring scope
---

<br/>
<br/>
<br/>


```java
@Getter
@NoArgConstructor
@Entity
@Table
public class Board implements Serializable{
	...
}
```

<br/>

JPA에서는 어떤 어노테이션을 사용하여 DB와 엔티티를 연결해주는지 알아보자 

<br/>
<br/>

# @Entity

>  클래스에 선언 시 JPA에서 관리한다. DB의 테이블과 Class(VO, DTO)와 매핑한다면 반드시 @Entity를 붙여주어야 한다. name 으로 엔티티 이름 지정. 기본값으로는 클래스 이름 그대로 사용.

## 조건

1. 필드에 final, enum, interface, class 를 사용할 수 없다. 
2. 생성자중 기본 생성자가 반드시 필요하다. 

<br/>
<br/>

# @Table

> 매핑할 테이블을 지정. 

## 속성

1. name : 매핑할 테이블 이름 지정 
2. catalog : DB의 catalog를 매핑한다. 
3. schema : DB 스키마와 매핑한다. 
4. uniqueConstraint : DDL 쿼리를 작성할 때 제약 조건을 생성한다. 

<br/>
<br/>

# @Column

> 객체 필드와 DB테이블 컬럼을 매핑한다. 

## 속성 

1. name : 맵핑할 테이블의 컬럼 이름을 지정
2. insertable : 엔티티 저장시 선언된 필드도 같이 저장
3. updateable : 엔티티 수정시 이 필드를 함께 수정
4. table : 지정한 필드를 다른 테이블에 맵핑할 수 있도록 함
5. nullable : NULL을 허용 여부 결정
6. unique : 제약조건을 걸 때 사용
7. columnDefinition : DB 컬럼 정보를 직접적으로 지정할 때 사용
8. length : varchar의 길이를 조정. 기본값으로 255가 입력
9. precsion, scale : BigInteger, BigDecimal 타입에서 사용합니다.  각각 소수점 포함 자리수, 소수의 자리수를 의미

 <br/>
<br/>

# Id

> JPA 가 객체를 관리할 때 식별할 기본키를 지정

<br/>
<br/>
<br/>

---



참조 : [https://deveric.tistory.com/54](https://deveric.tistory.com/54)