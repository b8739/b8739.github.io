---
title: 정규표현식
author: Jae
categories: [Javascript]
tags: [javascript, 문자열, 정규표현식]
---

## (계속 작성중)

## **정규식옵션**

아래과 같이 사용

```jsx
ex_str = ex_str.replace(/[매칭패턴]/정규식옵션,'변환 결과')
```

- `g` (global) : 첫번째 문자만이 아닌 패턴에 해당하는 모든 문자들을 검색하여 대체한다.
- `i` (ignoreCase) : 대소문자 구분하지 않음.
- `m` (multillineM) : 여러 줄 검색
- `s` : “dotAll”; 줄 바꿈과 일치 하는 `.`을 허용합니다.
- `u` : 유니 코드; 패턴을 일련의 유니 코드 코드 포인트로 취급
- `y` : sticky; 대상 문자열에서이 정규식의 lastIndex 속성으로 표시된 인덱스에서만 일치하며 이후 인덱스에서는 일치하지 않습니다.

## ^

[] 안의 ^ 는 제외의 의미

```jsx
ex_str = "abc._a!bc12";
// 문자를 제외한 것들은 ''로 치환
ex_str = ex_str.replace(/[^a-z]/g, "");
// 결과: abcabc
```

괄호 밖에 쓰일때는, 시작 문자를 의미

```jsx
ex_str = "abc";
// 시작 문자 a를 ''로 치환
ex_str = ex_str.replace(/^a/g, "");
// 결과: bc
```

## $

끝 문자를 의미

```jsx
ex_str = "abc";
ex_str = ex_str.replace(/c$/, "");
// 결과: ab
```

### [ ]

대괄호 안에 넣으면 개별적으로 치환, 밖에 넣으면 한 묶음으로 처리

## 마침표 (.)

정규표현식에서 점(.)은 모든 문자열을 나타냄 (줄바꿈 제외)

```jsx
ex_str = "...";
// 각 점을 느낌표로 바꾸려고 할 때
ex_str = ex_str.replace(/./g, "!");
// 결과: !!!
```

그래서 이와 같은 용도가 아니라, 마침표라는 문자를 선택하려 할 때는 점 앞에 역슬래시를 붙여야 함

만약 두 점을 선택하려면 각 점 앞에 역슬래시를 붙임

```jsx
ex_str = "abc..abc..";
// abcabc로 변환하려는 상황
ex_str = ex_str.replace(/\.\./g, "");
// 결과: abcabc
```

## +

한개 혹은 여러개

위 예시에서 한개 이상의 .을 지우려고 할 때, 아래와 같이 작성해도 똑같은 결과

```jsx
ex_str = ex_str.replace(/\.+/g, "");
// 결과: abcabc
```

## 공백을 치환하려 할 때

```jsx
ex_str = "";
ex_str = ex_str.replace(/^$/, "a");
// 결과: a
```
