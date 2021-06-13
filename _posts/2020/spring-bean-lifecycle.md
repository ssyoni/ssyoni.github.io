---
title: (Spring) Bean 생명주기
date: 2021-06-13
tags: [Spring]
excerpt: 스프링 빈 라이프사이클 
---

<br/>
<br/>
<br/>


# 스프링 빈의 이벤트 라이프사이클 

스프링 컨테이너 생성 → 스프링 빈 생성 → 의존관계 주입 → 초기화 콜백 → 사용 → 소멸 전 콜백 → 스프링 종료 

- 초기화 콜백 : 빈이 생성되고, 의존관계 주입이 완료된 후 호출
- 소멸전 콜백 : 스프링 컨테이너가 종료되어 소멸되거나, 빈이 소멸되기 직전에 호출

<br/>

스프링은 3가지 방법으로 빈 생명주기 콜백을 지원한다. 

- 인터페이스 (InitializingBean, DisposableBean)
- 설정 정보에 초기화 메서드, 종료 메서드 지정
- 어노테이션 지원  (@PostConstruct, @PreDestroy)

<br/>
<br/>

> 객체의 생성과 초기화의 분리란?

스프링빈도 객체이기 때문에 초기화가 필요하다. 주로 인스턴스가 생성되는 시점에 어떤 작업을 할 때에는 대부분 생성자에서 이루어진다.  

그러나 외부 커넥션 연결(DB 커넥션, 소켓 통신) 등 무거운 동작을 수행할 경우마다 생성자 초기화를 해주는것은 비효율 적이다. 

때문에 객체의 생성과 초기화작업의 분리를 통해서 객체를 생성하는 것은 생성에만 집중하고, 초기화는 초기화에서만 작업하는 것. 

<br/>
<br/>
<br/>
<br/>

---

<br/>
 

## 1. 인터페이스  InitializingBean, DisposableBean 이용

<br/>

```java
public class TestDao implements InitializingBean, DisposableBean {

	@Override
	public void afterPropertiesSet() throws Exception {
		// 빈 초기화 시 코드 구현
	}

	@Override
	public void destroy() throws Exception {
		// 빈 소멸 시 코드 구현
	}
}
```

InitializingBean 

- afterPropertiesSet()

DisposableBean

- destroy()

단점 ) 

- 자바표준 인터페이스가 아니라 스프링 전용 인터페이스라서 스프링에 종속적이다. 스프링 의존성이 높아짐.
(하지만 implements로 초기화, 소멸 인터페이스를 명시적으로 구현하고 있기 때문에 좀 더 직관적으로 확인이 가능하고 편리해서 아직 인터페이스 사용방법을 유지하는 경우가 많다. )
- 초기화, 소멸 메소드의 이름을 변경할 수 없다.
- 직접 제어를 해주어야하는 외부 라이브러리에 적용할 수 없다.
- 현재는 거의 사용하지 않는 방법임.

BUT

<br/>
<br/>
<br/>

## 2. 설정 정보에 초기화 메서드, 종료 메서드 지정

설정 정보에 다음과 같이 초기화, 소멸 메소드를 지정할 수 있다. 

```java
@Bean(initMethod="init", destroyMethod = "close")
```

- 메소드 이름을 자유롭게 줄 수 있다.
- 스프링 빈이 스프링 코드에 의존하지 않는다.
- 코드가 아니라 설정 정보를 사용하기 때문에 코드를 고칠 수 없는 외부 라이브러리에도 초기화, 종료 메소드를 적용할 수 있다. 

<br/>

> 외부 라이브러리에서 어떻게 사용하는가?
>
> 외부라이브러리를 사용할 시에는 외부 라이브러리 내부 코드를 변경/수정 할 수 없기 때문에, 초기화/소멸 메서드 사용에 제약이 있다. 그러나 외우라이브러리를 호출하는 내부 소스 클래스에서 @Bean 어노테이션으로 초기화/소멸 메서드를 지정해주고 사용하면 된다. 


<br/>


### 종료 메소드 추론기능

- @Bean 은 종료메서드를 따로 지정하지 않을 시에 스프링이 종료메서드를 추론해서 자동으로 호출해준다.
- destroyMethod = "" 로 하거나 설정을 아예 하지 않을 경우 추론기능이 작동한다.
- 등록된 Bean 안에 일반적으로 많이 쓰이는 종료 메서드 이름 (close, shutdown 등) 의 메서드가 있으면 스프링이 종료할 때 자동으로 호출해줌

<br/>
<br/>
<br/>

## 3. @PostConstruct, @PreDestroy

 초기화와 소멸을 지정하는 두 어노테이션을 사용하면 편리하게 초기화와 종료를 실행할 수 있다. 

- 스프링에 종속적인 기술이 아니라 자바 표준 기술임. 따라서 스프링이 아닌 컨테이너에서도 잘 작동.
- 컴포넌트 스캔과 잘 어울림 (어떻게 잘 어울린다는 거지?)
- 단점 ) 외부 라이브러리에서 적용하지 못함. 이럴때는 @Bean 기능을 사용하면 해결됨

<br/>

1. @PostConstruct
- 초기화 작업을 할 메소드에 적용된다.
- WAS가 띄워질 때 실행된다. (객체가 생성되고 의존성 주입이 된 후에)


2.  @PreDestroy

- 컨테이너에서 객체를 제거하기 전에 실행된다.

<br/>
<br/>
<br/>
<br/>

---

<br/>

참조

[https://velog.io/@hellozin/스프링-빈의-생성자-afterPropertiesSet-PostConstruct](https://velog.io/@hellozin/%EC%8A%A4%ED%94%84%EB%A7%81-%EB%B9%88%EC%9D%98-%EC%83%9D%EC%84%B1%EC%9E%90-afterPropertiesSet-PostConstruct)

[https://velog.io/@hyungjungoo95/Spring-빈-생명주기-콜백](https://velog.io/@hyungjungoo95/Spring-%EB%B9%88-%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0-%EC%BD%9C%EB%B0%B1)