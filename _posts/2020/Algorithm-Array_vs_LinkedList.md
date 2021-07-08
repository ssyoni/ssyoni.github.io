---
title: 배열과 링크드리스트 차이점 (Array vs Linked List)
date: 2021-03-24
tags: [Algorithm]
excerpt: 
--- 

<br/>
<br/>
<br/>

컴퓨터 메모리에 원소들을 저장해야한다면 배열과 리스트 두 가지 방법중 하나를 사용해야 한다. 
배열과 리스트의 각각 장단점과 차이점을 알아야 경우의 맞게 선택하여 사용할 수 있다. 


# Linked list

링크드리스트란 요소들이 연속적인 메모리 위치에 저장되지 않는 선형 데이터 구조이다. 링크드 리스트의 요소는 아래와 같이 포인터를 사용하여 연결된다. 

![](../images/linkedListPointer.png)

출처: https://www.geeksforgeeks.org/data-structures/linked-list/

각 노드는 다른 주소를 가지고 있으며, 다음 노드의 주소를 알고있기 떄문에 연결이 가능하다. 


장점)

* 데이터 항목이 메모리나 디스크에 연속적으로 저장될 필요가 없고, 배열을 재구성할 필요가 없기 때문에 요소의 삽입이나 제거가 쉽다. 

* 동적 할당을 하기 때문에 선언시 크기를 지정하지 않아도 된다. 

단점) 

* 데이터를 찾을 때 처음부터 순차적으로 접근하기 때문에 O(n) 의 시간복잡도를 갖는다. 

<br/>
<br/>
<br/>
<br/>
<br/>

# 배열 
정수 또는 문자열과 같은 동일한 데이터 유형을 포함하는 데이터 구조이다. 


장점) 

* 모든 요소들은 주소를 가지고 있기 때문에 데이터를 찾는데 효율적이다. 

단점 ) 

* 배열에 요소를 삽입하거나 삭제하려면 모든 요소를 이동해야한다. 
* 배열의 크기는 항상 고정되어있다. 
* 배열 끝에 새 요소를 추가할 수 없다. 


<br/>
<br/>
<br/>


> 연산하는데 걸리는 실행시간 

<br/>

|-|배열|리스트|
|------|---|---|
|읽기|**O(1)**|**O(n)**|
|삽입|**O(n)**|**O(1)**|


<br/>
<br/>

따라서 측정 데이터를 찾는데는 각 원소마다 인덱스를 가지고있는 **배열**이 효율적이고, 

노드마다 다음 노드의 주소를 가지고있는 **연결리스트가** 배열을 삽입 or 삭제하는데에 효율적이다. 

<br/>
<br/>
<br/>
<br/>




---
<center>references</center>
<br/>
<br/>

- https://www.geeksforgeeks.org/data-structures/linked-list/
- https://en.wikipedia.org/wiki/Linked_list
- https://www.studytonight.com/data-structures/linked-list-vs-array
