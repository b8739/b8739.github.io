---
title: Javascript Array.sort() 주의사항
author: Jae
categories: [Javascript]
tags: [javascript, 배열, 정렬]
---

# **Array.prototype.sort()**

sort()는 인자로 compareFunction을 받게 되어 있는데, 주어지지 않을시에는 기본적으로 문자열의 유니코드 코드 포인트를 따라서 정렬한다.

즉, 파이썬의 sort()처럼 수를 비교해서 오름차순, 내림차순으로 정렬되는 것이 아니라, 일차적으로 문자열로 변환하고나서 UTF-16 코드 포인트를 비교한 순서대로 정렬이 됨

```jsx
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

출처: [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## compareFunction (출처: Mozilla)

![](https://velog.velcdn.com/images/a87380/post/05e9d597-2c60-4af8-8057-1edc5472a9aa/image.png)

즉, 이를 활용해서 함수를 만들어서 넣어주면 되는데, a와 b를 매개변수로 주면 compareFunction은 내부적으로 배열의 모든 원소들을 서로 비교한다.

**내림차순의 경우,**

만약 a가 b보다 작은 경우, 즉 a-b가 0보다 작은 경우, a가 먼저오게 된다.

0을 반환한 경우, 즉 a-b의 값이0인 경우, 둘이 같다는 의미이므로 다른 요소에 대하여 정렬한다.

a가 b보다 큰 경우, 즉 a-b가 0보다 큰 경우, b를 a보다 낮은 인덱스로 정렬한다.

오름차순의 경우, a-b를 b-a로만 변경해주면 된다.

### 오름차순 & 내림차순 방법

```jsx
// 원본 배열이 수정됨
const numbers = [1, 30, 4, 21, 100000];
// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 4, 21, 30, 100000]
// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // [100000, 30, 21, 4, 1]
```
