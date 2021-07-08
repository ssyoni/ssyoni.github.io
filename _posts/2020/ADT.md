---
title: 추상자료형(Abstract Data Type)
date: 2021-03-29
tags: [Algorithm]
excerpt: 
---

<br/>
<br/>
<br/>

# 추상자료형(ADT) 

<br/>

## 🥨 추상자료형이란?

: 구체적인 기능의 구현방법을 명시하지 않고, 순수하게 기능이 무엇인지 나열한 것이다. 

얼핏 이해한다면 객체지향의 클래스(class) 또는 기능의 명세와 유사하다. ADT는 C언어보단 객체지향 언어에 더 적합하다. 

예를들어서 스택, 큐, 덱, 리스트, 이진트리 등의 자료구조는 자료의 특징과 연산만 제공하기 때문에 추상자료형이다. 

<br/>
<br/>

## 🥨 자료구조에서의 ADT 

자료구조를 학습할 때 그 내부 구현을 알지 못해도 활용할 수 있도록 구현하고, 그러기 위해서는 ADT 정의가 필수이다.

<br/>
<br/>

## 🥨 추상자료형 정의해보기 
<br/>

``` 
- 추상자료형 : 돈을 보관하는 지갑(Wallet)
- 주상화 과정 : 동전과 지폐를 넣었다 뺐다 할 수 있어야 한다. 
```

다음과 같은 구조체 Wallet의 추상자료형 정의(ADT)
```
Date : 동전, 지갑 
Operation : 
    * int TakeOutMoney()
    * void PutMoney()
```

<br/>
<br/>
<br/>

---
references
<br/>

* 윤성우의 열혈자료구조 C
* https://gbsb.tistory.com/306
