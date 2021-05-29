---
title: (Spring) 빈 등록방법, 의존관계 자동주입, lombok
date: 2021-05-30
tags: [Spring]
excerpt: ComponentScan, Autowired, Lombok ...
---

<br/>
<br/>
<br/>

# 📍 빈 등록

Bean 객체를 등록하는 방법

- XML
- Annotation
- JavaConfig

<br/>

XML 설정파일에 직접 빈을 등록할 시에는 

- 빈의 성격을 구분하기가 힘들다
- 어플리케이션의 크기에 따라 빈의 양이 늘어나 관리가 힘들어진다

라는 단점이 있다. 

때문에 스프링에서는 특정 클래스에 Annotation을 부여하여 클래스를 자동으로 찾아 빈을 등록해주는 **빈 스캐닝** 기능을 제공해준다. 

<br/>
<br/>


## Annotation 으로 Bean 객체를 등록

> @Component, Java Config

<br/>


### 1. @Component / @ComponentScan (스프링 2.5.x)

: 자기 자신부터 시작해서 하위 패키지를 스캔해서 @component 어노테이션(또는 이 어노테이션을 사용하는 다른 어노테이션)이 붙은 클래스를 찾아서 빈으로 등록한다

즉 @ComponentScan 은 어느지점부터 컴포넌트를 찾을지 알려주는 역할, @Component는 등록할 빈을 지정하는 역할을 한다.

<br/>

@ComponentScan 의 스캔 대상

- @Component
- @Repository
- @Service
- @Controller

@Repository ,@Service, @Controller는 @Component의 구체화된 형태이다.

<br/>
<br/>

### 2. Java Config (스프링 3.x)

: 자바 클래스를 생성해서 작성할 수 있음.

@클래스에 @Configuration 어노테이션을 선언. 그 안에 @Bean 어노테이션을 사용해 직접 빈을 정의한다. 

@Configuration 도 @Component 를 사용하기 때문에 컴포넌트스캔의 대상이 되고 그에 따라 빈 설정파일이 읽힐때 그 언에 정의된 빈들이 IoC 컨테이너에 의해 객체로 생성된다.

<br/>

[https://doohong.github.io/2019/01/09/Spring-bean/](https://doohong.github.io/2019/01/09/Spring-bean/)

<br/>
<br/>
<br/>

# 📍 Bean 의 의존관계 자동 주입

## @Autowired

: 주입하려는 객체의 **타입**이 일치하는 객체를 자동 주입

필드, 생성자, setter에 사용할 수 있다. 의존성 주입이 되는 Class에는  당연히 Bean으로 등록되기 위한 어노테이션이 부여되어있어야 한다.

<br/>

### @Autowired 대상이 되는 객체가 여러개일 경우

ex)
```java
@Repository 
public class Aclass implements testRepository{

}

@Repository
public class Bclass implements testRepository{

}

// 주입
@Service
public class testService {

    @Autowired
    TestRepository testRepository;
}
```

하나의 인터페이스를 구현한 클래스가 여러개이고, 각각의 Class들은 Bean으로 등록되기 위한 Annotaion을 가지고 있을 경우 ``` There is more than one one bean of 'testRepository' types ```
이라는 문구와 함께 컴파일 에러가 발생

<br/>

 *해결책 :*

1) @Primary 어노테이션을 함께 부여하면 해당 Class가 자동으로 주입된다. 

2) @Qualifier로 주입할 Bean을 명시해줌

3) 모든 빈을 주입받아 List로 받는다. 

<br/>


```java
// list로 주입받기
@Service
 public class BookService{

    @Autowired
    private List<BookRepository> bookRepository;

    public void printBookRepository(){
        this.bookRepository.forEach(System.out::println);
    } 
}
```

해당 타임을 가지는 모든 Bean들을 List로 받을 수 있다.

[https://galid1.tistory.com/512](https://galid1.tistory.com/512)

<br/>
<br/>


> *참고*

## @Resource

: 주입하려는 객체의 ***이름(id)*** 이 일치하는 객체를 자동 주입.

@Resource는 자바 제공 어노테이션이며 필드, Setter에 사용된다. 생정자에는 사용할 수 없음

@Autowired와 마찬가지로 반드시 기본 생성자가 정의되어 있어야 한다. 

<br/>

[https://atoz-develop.tistory.com/entry/Spring-DI-애노테이션-정리-Autowired-Resource-Inject](https://atoz-develop.tistory.com/entry/Spring-DI-%EC%95%A0%EB%85%B8%ED%85%8C%EC%9D%B4%EC%85%98-%EC%A0%95%EB%A6%AC-Autowired-Resource-Inject)

<br/>
<br/>
<br/>

# 📍 Lombok

롬복을 사용하는 이유 :

- 변수명이 바뀌면 메소드들을 다시 만들어야 하는 번거로움이 있다.
- 멤버변수 제어를 위해 모델 객체마다 반복적으로 메소드 생성
  
  <br/>
  <br/>

## @Getter, @Setter

: 접근자와 설정자 자동 생성. 멤버변수 위에 선언하거나 클래스 위에 선언하면 전체 적용된다.

<br/>
<br/>

## 생성자 생성
<br/>

@AllArgsConstructor

 : 모든 필드값을 파라미터로 받는 생성자 생성

```java
Student std = new Student();
```

<br/>

@RequiredArgsConstructor

: 초기화 되지 않은 final 필드와 @NotNull 어노테이션이 붙은 필드값만 파라미터로 받는 생성자 생성

 ```java
 Student std = new Student(1L);
```

<br/>

@NoArgsConstructor

: 기본 생성자 생성

```java
Student std = new Student();
```

<br/>

@ToString

: toString() 메소드를 자동으로 생성해줌

exclude 속성을 사용하면 특정 필드를 결과에서 제외시킬 수 있다. 

```java
@ToString(exclude = "password")
public class ... {...}
```

<br/>

@EqualsAndHashCode

:equals, hashCode 자동 생성

- equals : 두 객체의 값 비교
- hashCode 두 객체가 같은 객체인지 비교

callSuper 속성 사용 시 부모클래스의 필드까지 감안해서 비교할지 말지의 여부 설정 가능

```java
@EqualsAndHashCode(callSuper = true)
// 부모 클래스 필드 값도 동일한지 체크
```

<br/>

@Data

: 위에서 설명한 어노테이션들의 기능들을 한번에 적용

<br/>
<br/>

## Lombok을 사용한 생성자 주입 방법

<br/>

*생성자주입방법*

```java
@Component
@ToString
@Getter
public class SampleHotel
{
    private Chef chef;
    
    public SampleHotel(Chef chef){
        this.chef = chef;
    }
}
```

생성자 주입을 하면 코드가 복잡해보일 수 있는데, Lombok을 활용하여 코드를 간단하게 만들 수 있다. 

*롬복을 활용한 생성자 주입*

```java
@Component
@ToString
@Getter
@AllArgsConstructor
public class sampleHotel
{
    private Chef chef;
}
```

- @AllArgsConstructor : 모든 필드에 대한 생성자를 생성한다.

```java
@Component
@ToString
@Getter
@RequiredArgsConstructor
public class sampleHotel
{
    @NotNull  // 특정 변수에 대해서만 생성자를 주입하고 싶을 때
    private Chef chef;
}
```

- @RequiredArgsConstructor : 초기화 되지 않은 final 필드와 @NotNull 어노테이션이 붙은 필드에 대한 생성자를 생성한다.

<br/>
<br/>


[https://velog.io/@secho/스프링-02-Lombok-및-어노테이션-정리](https://velog.io/@secho/%EC%8A%A4%ED%94%84%EB%A7%81-02-Lombok-%EB%B0%8F-%EC%96%B4%EB%85%B8%ED%85%8C%EC%9D%B4%EC%85%98-%EC%A0%95%EB%A6%AC)

[https://velog.io/@modsiw/Spring-lombok-롬복의-특징-annotations](https://velog.io/@modsiw/Spring-lombok-%EB%A1%AC%EB%B3%B5%EC%9D%98-%ED%8A%B9%EC%A7%95-annotations)

[https://n1tjrgns.tistory.com/164](https://n1tjrgns.tistory.com/164)