---
title: (Spring) Singleton, Prototype
date: 2021-06-17
tags: [Spring]
excerpt: Spring scope
---

<br/>
<br/>
<br/>

# 스프링 빈 스코프 

오브젝트가 생성되고, 적용되는 범위를 빈의 스코프(Scope)라고 한다. 

스프링 빈의 기본 스코프는 싱글톤이다. 

싱글톤 스코프는 강제제거하지 않는 한 스프링 컨테이너가 존재하는 동안 계속 유지된다. 

 경우에따라서 싱클톤 외의 스코프를 가질 수 있다. 

- 프로토타입 스코프
- 요청 스코프
- 세션 스코프

등등...

이 중 스프링에서의 싱글톤과 프로토타입에 대해서 알아보자.

<br/>
<br/>
<br/>


## 👩‍💻 Singleton
<br/>

[스프링 싱글톤이란?](https://ssyoni.github.io/2020/Spring-singletone/)

- 스프링 컨테이너의 시작과 종료까지 1개의 객체로 유지됨
- 스프링을 통해서 bean을 제공받으면 언제나 주입받은 bean은 동일한 객체라는 가정하에서 개발을 한다.

<br/>
<br/>

## 👩‍💻 Prototype

<br/>

빈을 주입받을 때마다 매번 새로운 인스턴스를 만들어서 사용

<br/>

```jsx
@Component @Scope("prototype")
public class Proto {}
```

```java
@Component
public class AppRunner implements ApplicationRunner {
    @Autowired
    ApplicationContext ctx;

    @Override
    public void run(ApplicationArguments args) throws Exception {

// 프로토타입
        System.out.println("proto");
        System.out.println(ctx.getBean(Proto.class));
        System.out.println(ctx.getBean(Proto.class));
        System.out.println(ctx.getBean(Proto.class));
// 호출될 때마다 정보 다름

// 싱글톤
        System.out.println("single");
        System.out.println(ctx.getBean(Single.class));
        System.out.println(ctx.getBean(Single.class));
        System.out.println(ctx.getBean(Single.class));
// 정보 같음 
    }
}
```

<br/>
<br/>

## 👩‍💻 스코프의 혼용

### 프로토타입에서 싱글톤 빈을 참조할 경우

<br/>

→ 프로토타입의 빈은 매번 새로 생성되는 반면, 싱글톤 객체는 언제나 동일하다.

```java
@Component @Scope("prototype")
public class Proto {
    @Autowired
    Single single;
}
```

<br/>

### 싱글톤 빈이 프로토타입 빈을 참조할 경우

```java
@Component
public class Single {

    @Autowired
    Proto proto;

    public Proto getProto() {
        return proto;
    }
}
```

```java
@Component
public class AppRunner implements ApplicationRunner {

    @Autowired
    ApplicationContext ctx;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        System.out.println("proto by single");
        System.out.println(ctx.getBean(Single.class).getProto());
        System.out.println(ctx.getBean(Single.class).getProto());
        System.out.println(ctx.getBean(Single.class).getProto());
    }
}
```

→ **싱글톤 빈 인스턴스가 한번 만들어지고, 이 때 프로토타입의 빈 인스턴스의 프로퍼티도 세팅이 된다.** 

**이 때 싱글톤 빈을 매번 호출할때마다 프로토타입의 빈도 처음에 세팅된 인스턴스로 고정이 된다.** 

<br/>

### 💡 프토로타입의  인스턴스가 정상적으로 생성되게 하려면 ?

**→ proxyMode 설정**

 ```java
 @Component @Scope(value = "prototype", proxyMode = ScopedProxyMode.TARGET_CLASS)
public class Proto {
    @Autowired
    Single single;
}
 ```

- DEFAULT : 프록시 사용 안함
- TARGET_CLASS : 다이나믹 프록시 적용
- INTERFACES : 인스턴스 프록시 생성


<br/>
<br/>

---
<br/>


출처 - [https://blossun.github.io/spring/core-technology/01_IoC-컨테이너와-빈_05/](https://blossun.github.io/spring/core-technology/01_IoC-%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88%EC%99%80-%EB%B9%88_05/)