---
title: (Spring) DI, IoC, SOLID
date: 2021-05-21
tags: [Spring]
excerpt: 스프링 기초
---


<br/>
<br/>
<br/>


# 🚀 DI (Dependency Injection)

: 의존성 주입 

A라는 크래스에서 B라는 클래스를 필요로 할 때 A는 B의 의존성을 갖는다고 한다. 

의존성 주입을 하면 프로그램 설계를 할 때 코드 재사용성이 향상된다. 객체간의 결합도가 낮아지면서 유연한 코드 작성 가능. 



<br/>
<br/>
<br/>


# 🚀 IoC (Inversion of Control)


제어의 반전이라는 뜻.

근데 why 제어의 반전? 

기존 프로그래밍에서의 논리 흐름은, A클래스에서 B클래스를 호출하게 되면, A클래스를 생성하고, 그 다음으로 호출되는 B클래스 객체를 생성한다. 

그러나 IoC 의 프로세스에서는 주입 객체로 정의되어있는 클래스들(B클래스)을 먼저 생성하고 그 다음에 호출하는 메인 클래스(A클래스)를 생성하기 때문에 이를 제어의 반전 또는 역행이라고 하는 것이다. 

<br/>

>  스프링에서 제공하는 IoC Container : 빈(bean)을 만들고 의존성을 엮어주는 일을 한다.

<br/>

특정한 인터페이스를 상속하거나 빈으로 등록하는 특정 어노테이션이 정의되어있거나(ex. @Controller), 아니면 빈으로 직접 등록하거나의 경우에만 스프링 IoC 컨테이너에 빈으로 등록된다. 
  
이렇게 빈으로 등록된 객체들은 IoC컨테이너가 의존성으로 엮어준다. (기본적으로 의존성 주입은 IoC컨테이너 안에서 빈으로 등록된 객체들만 가능하다. )

<br/>
<br/>
<br/>


## 🔌  Spring 의존성 주입 방법 3가지 

<br/>

> - 생성자 주입
> - 세터 주입
> - 필드 주입


<br/>
<br/>

먼저 DI의 의존성 주입은 ```Setter 주입```, ```생성자 주입``` 두가지가 있다. 

### ✏️  **setter 주입** 


```java
public class Library {
    private Novel novel;

    public cvoid setNovel(Novel novel){
        this.novel = novel
    }

    public void readNovel(){
        novel.subject();
    }
}
```
```java
public interface novel{
    void subject();
}
```
```java
public class NovelImple implements Novel {
    @Override
    public void subject() {
        System.out.println("This Subject is Comics");
    }
}
```

```java
public class Main {
    public static void main(String[] args) {
        Library library = new Library();

        //1.
        library.setNevel(new NovelImple());

        //2.
        library.setNovel(new Novel(){
            @Override
            public void subject(){
                System.out.println("This Subject is Romans");
            }
        });
        // 구현체 주입 후 호출
        library.readNovel();
    }
}

```

- setter 주입을 사용하면 구현체의 내부 동작을 알지 못하고 알 필요도 없게 된다. 
- Library 클래스의  readNovel() 메서드는 Novel 타입의 객체에 의존하고 있다.   **But**, setter에 주입이 필요한 객체가 주입되지 않아도 객체는 얼마든지 생성할 수 있기 때문에 의존성 주입 없이 readNovel() 메소드에 접근하게 되면 NullPointerExceoption 이 발할 수 있다.

<br/>

### ✏️ **생성자 주입**

생성자 주입을 하게 된다면 Library 클래스의 setter를 없애고 다음과 같이 생성자로 주입을 하게된다. 

```java
public class Library {
    private Novel novel;

    public Library(Novel novel){
        this.novel = novel;
    }

    public void readNovel(){
        novel.subject();
    }
}
```

 - 의존관계를 주입하지 않을 시엔 Library 객체를 생성할 수 없기 때문에 NullPointException이 발생할 일이 없다. 컴파일 타임에 오류를 잡아낼 수 있음. 
  


<br/>
<br/>

Spring의 의존성주입은 위의 두가지와 더해서 ```필드주입```까지 세 가지의 방법이 있음. 

<br/>

### ✏️ **필드 주입**

```java
public class A implements B {

    @Autowired 
    private B b ;

    @Override
    public void testMethod(){
        b.bMethod();
    }

}

```



### 필드 주입시 단점

: 순환참조시 StackOverflowError 발생시킴 <- 이는 객체가 모두 생성이 된 후 로직상에서 순환참조가 발생하기 때문에 로직이 구동되기 전 까지 순환참조인지 모른다. 

but 생성자 주입으로 이루여질 경우, 빈 생성 시 객체간 순환참조를 하고있는 경우에 다음과 같은 에러메세지와 함께 스프링 어플리케이션이 구동되지 않는다. 

```Description : The dependencies of some of the beans in the application context form a cycle```

<br/>

**why?** Aclass와 Bclass가 서로 순환참조 하고있다고 가정ㄹ할 경우에, 생성자 주입시 다음과 같은 로직이 수행된다고 볼 수 있다. 

```new Aclass(new Bclass(new Aclass(new ... ))) ```

-> 컨테이너가 빈을 생성하는 시점에서 객체생성에 사이클 관계가 생긴다. 

<br/>

<br/>

# 🚀 SOLID

<br/>
<br/>


---
***references***

<br/>

[Intro to Inversion of Control and Dependency Injection with Spring](https://www.baeldung.com/inversion-control-and-dependency-injection-in-spring)

[스프링 - 생성자 주입을 사용해야 하는 이유, 필드인젝션이 좋지 않은 이유](https://yaboong.github.io/spring/2019/08/29/why-field-injection-is-bad/)

[Spring – 제어 반전 vs 종속성 주입](https://howtodoinjava.com/spring-core/spring-ioc-vs-di/)