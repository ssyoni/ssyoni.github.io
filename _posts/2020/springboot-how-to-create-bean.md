---
title: (SpringBoot) 빈 등록방법,의존관계 자동주입, lombok
date: 2021-05-27
tags: [SpringBoot]
excerpt: 빈 등록/의존관계 자동주입/lombok
---

<br/>
<br/>
<br/>

# 빈 등록

Bean 객체를 등록하는 방법은 두 가지가 있음

- @Component, @Bean

1. @ComponentScan 

: 자기 자신부터 시작해서 하위 패키지를 스캔해서 @component 어노테이션(또는 이 어노테이션을 사용하는 다른 어노테이션)이 붙은 클래스를 찾아서 빈으로 등록한다

즉 @ComponentScan 은 어느지점부터 컴포넌트를 찾을지 알려주는 역할,

@Component는 등록할 빈을 지정하는 역할을 한다.

2. 빈 설정파일에 직접 등록하기

설정파일은 XML과 자바설정파일로 작성할 수 있음.

1) 자바설정파일

: 자바 클래스를 생성해서 작성할 수 있음. 명명규칙은 보통 xxxConfoguration 와 같이 명명.

 클래스에 @Configuration 어노테이션을 선언. 그 안에 @Bean 어노테이션을 사용해 직접 빈을 정의한다. 

@Configuration 도 @Component 를 사용하기 때문에 컴포넌트스캔의 대상이 되고 그에 따라 빈 설정파일이 읽힐때 그 언에 정의된 빈들이 IoC 컨테이너에 의해 객체로 생성된다.