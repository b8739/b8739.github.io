---
title: Javascript Array.from()
author: Jae
categories: [Javascript]
tags: [javascript, 배열]
---

# Array.from

파이썬으로 하다가 자바스크립트로 알고리즘을 짜려면 마냥 복잡할줄만 알았다.

근데 막상 익숙해지다 보니 각 언어의 편한 부분이 서로 다른 것 같다.

Mozilla.org의 정의에 따르면 `Array.from()` 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운 `Array` 객체를 만든다.

string도 반복 가능하기 때문에 인자로 넣는다면, 각 character를 배열에 넣을 수 있다.

```jsx
Array.from('foo')
//['f','o','o']

[...'foo']
//['f','o','o']

a = 'foo'
a.split('')
//['f','o','o']
```

또 특이한점은, mapFn이라는 선택함수를 추가로 매개변수로 넣으면 배열에 들어갈 각 요소에 맴핑 함수를 호출할 수 있다. (mapFn이라는 이름처럼 map과 같은 기능을 한다.)

```jsx
Array.from([1, 2, 3], (x) => x + 1);
//[2,3,4]
```

2차원 함수를 만들때도, 번거롭게 for문을 곂쳐서 만들지 않고, Array.from을 이용하면 쉽게 만들 수 있다.

```jsx
Array.from(new Array(2), () => new Array(2).fill(0));
//[[0,0],[0,0]]
```
