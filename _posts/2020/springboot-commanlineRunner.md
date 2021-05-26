---
title: (SpringBoot) CommandLineRunner 
date: 2021-05-26
tags: [SpringBoot]
excerpt: 스프링부트에서 제공하는 초기화 인터페이스
---

<br/>
<br/>
<br/>

# CommandLineRunner

<br/>

CommandLineRunne 는 스프링부트가 제공하는 단순 인터페이스다. 

<br/>

```java
package org.springframework.boot;
public abstract interface CommandLineRunner {
  
  public abstract void run(java.lang.String... args) throws java.lang.Exception;
}
```



- 기능은  ```run(java.lang.String... args)``` 가 있다. 

- 어플리케이션 구동 후 수행할 명령어를 생성할때 사용됨.  초기화 명령을 담는 곳으로 사용되거나  테스트 데이터를 함께 생성하여 데모 프로젝트를 실행/테스트하고 싶을때 편리하다.

- 여러 CommandLineRunner를 구현하여 같은 애플리케이션 컨텍스트의 빈에 사용할 수 있다. 사용 방법은 다양하지만 어떤 방법을 사용하든 빈으로 등록해야 한다. 

- @Component or @Bean 어노테이션으로 빈을 등록하여 활용할 수 있다.

<br/>
<br/>
<br/>

--- 
https://jeong-pro.tistory.com/206

참고서적 - <처음 배우는 스프링부트2 >

<br/>
<br/>
<br/>