---
title: 선택정렬/버블정렬/삽입정렬
date: 2021-06-24
tags: [Algorithm]
excerpt: 
---

<br/>
<br/>
<br/>

## 선택정렬 (Selection sort)

- 맨 앞의 인덱스부터 지정하고, 그 뒤의 원소들 중 최소값을 찾아 지정한 인덱스와 교환한다.

```java
// 재귀함수 
	public static void selectionsort(int [] array) {
		selectionsort(array, 0);
	}

	public static void selectionsort(int [] array, int start) {
		int min = start;
		for (int i = start; i < array.length; i++) {
			if (array[min] > array[i]) {
				min = i;
			}
		}
		swap(array, start, min); // 정렬
		if (start < array.length-1) {
			selectionsort(array, start+1);
		}
	}

	// 변수 교환 함수
	public static void swap(int [] array, int start, int min) {
		int temp = array[start];
		array[start] = array[min];
		array[min] = temp;
	}

//main
	public static void main(String[] args) {
		int [] array = {10,3,8,7,4,5,6,9,2,1};
		selectionsort(array);
		System.out.println(Arrays.toString(array));

	}
```

<br/>
<br/>

## 버블정렬 (Bubble sort)

- 앞에서부터 인접한 두 개의 원소를 비교하여 큰 수를 뒤로 보낸다. → 배열이 끝날 때까지 반복

```java
// 재귀함수 
	public static void selectionsort(int [] array) {
		selectionsort(array, 0);
	}

	public static void selectionsort(int [] array, int start) {
		int min = start;
		for (int i = start; i < array.length; i++) {
			if (array[min] > array[i]) {
				min = i;
			}
		}
		swap(array, start, min); // 정렬
		if (start < array.length-1) {
			selectionsort(array, start+1);
		}
	}

	// 변수 교환 함수
	public static void swap(int [] array, int start, int min) {
		int temp = array[start];
		array[start] = array[min];
		array[min] = temp;
	}

//main
	public static void main(String[] args) {
		int [] array = {10,3,8,7,4,5,6,9,2,1};
		selectionsort(array);
		System.out.println(Arrays.toString(array));

	}
```

<br/>
<br/>

## 삽입정렬 (Insert sort)

- 두 번째 인덱스 값부터 시작
- 앞의 원소들과 비교하여 정렬
- 정렬되어있을 경우 O(n)의 시간 복잡도를 가짐

```java
public static void insertionSort(int [] array) {
		insertionSort(array, array.length-1);
	}
	public static void insertionSort(int [] array, int end) {
		int min = end;
		for (int i = end-1; i >= 0; i--) {
			if(array[min] < array[i]) {
				swap(array, min, i);
			}
		}
		if (end > 0) {
			insertionSort(array, end-1);
		}
	}
	
	public static void swap(int [] array, int min, int i) {
		int temp = array[min];
		array[min] = array[i];
		array[i] = temp;
		
	}

	public static void main(String[] args) {
		int [] array = {2,3,7,8,4,5,6,9,10,1};
		insertionSort(array);
		System.out.println(Arrays.toString(array));
	}
```

<br/>
<br/>

위 세개의 정렬 알고리즘은 모두 동일한 시간복잡도와 공간복잡도를 갖는다. 

> ***시간복잡도*** : O(n^2) → (n) + (n-1) + (n-2) + (n-3) ...
> 
> ***공간복잡도*** :  O(n) → 한 개의 배열에서 진행됨



그러나 삽입정렬의 경우, 인덱스가 정렬되있다는 가정 하에 O(n) 의 시간복잡도를 갖게된다. 

정렬 되어있는 상태에서는 최소 한번씩 밖에 비교를 하지 않기 때문이다. 

따라서 앞에서 설명한 정렬 알고리즘 중 제일 최 단의 시간복잡도를 갖는다고 말 할 수 있다.