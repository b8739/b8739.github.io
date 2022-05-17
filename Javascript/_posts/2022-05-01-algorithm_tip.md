---
title: 알고리즘 풀 때 Javascript 문법 꿀팁
author: Jae
categories: [Javascript]
tags: [javascript, algorithm]
---

## (계속 작성중)

파이썬으로만 알고리즘 풀다가, 자바스크립트로 풀어야 할 일이 생겼다.

알아두면 좋을 자바스크립 문법 활용법을 정리해보려고 한다.

## Spread 파라미터

상황: report라는 배열을 Set으로 형 변환해서 다시 배열로 만들어줄때

```javascript
[...new Set(report)];
```

## || (or 문법)

상황: 없으면 추가, 있으면 기존 값 +1을 하려고 할 때 (undefined인 경우를 핸들링함과 동시에 각 상황에 대한 값을 부여)

```javascript
let mapList = new Map();

for (const item of itemList) {
  counts.set(item[1], counts.get(item[1]) + 1 || 1);
}
```

## Filter (feat. 0을 False로 활용)

filter는 map과 달리 조건을 통과하는 요소들로 새로운 배열을 만들고, 기존 숫자 앞에 !를 붙이면 0이 되기 때문에 다음과 같이 작성하면 0의 길이를 구할 수 있음

```javascript
const arr = [0, 0, 1, 2];
arr.filter((v) => !v).length;
```
