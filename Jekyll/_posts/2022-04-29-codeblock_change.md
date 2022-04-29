---
title: Jekyll Chirpy Theme에서 Code Block Style 변경
author: Jae
categories: [Jekyll]
tags: [jekyll]
---

Chirpy Theme은 Light 테마와 Dark 테마로 이루어져 있음

화면 좌측 사이드바 하단의 첫번째 버튼을 클릭해서 변경 가능

![](https://velog.velcdn.com/images/a87380/post/a6de12d1-5165-4752-bcbb-466b34376458/image.png)

## Light 테마

![](https://velog.velcdn.com/images/a87380/post/2b36dcb7-d8e3-480f-aec5-49a75f5e74e2/image.png)

## Dark 테마

![](https://velog.velcdn.com/images/a87380/post/a86d9194-9b27-4c6b-b6d4-f93e2a9d9b43/image.png)

Light 테마의 경우는 다른거는 다 보기 편한데, Code Block도 하얘서 눈에 잘 안 들어왔고, Dark 테마의 경우 반대로 코드는 눈에 잘 들어오지만 다른 부분이 너무 어두침침한 느낌이 있었다.

전체적인 테마는 Light Theme을 사용하되, 코드 블록만 Dark Theme을 사용하고자 한다면 sass/addon/syntax.scss의 아래 빨간 부분을 light에서 dark로 변경해주면 된다.

![](https://velog.velcdn.com/images/a87380/post/df755f46-6b1d-4059-88eb-1405240fcb98/image.png)

![](https://velog.velcdn.com/images/a87380/post/a9bc93dc-3e81-4958-9037-6146ea2c4536/image.png)

추가적으로, 아예 customizing된 style을 적용하고자 할 경우에는 colors 디렉토리에 아예 새로운 scss 파일을 추가해주고, 이를 import해와서 light이랑 dark 대신에 사용하면 된다.

예를 들어, Atom의 One Dark Theme을 사용하고자 하는 경우, 이 분의 가이드에 따라서 syntax.css를 만들고, 이를 colors 디렉토리에 scss 파일 확장자로 추가해서 import해서 사용하면 된다.

[Jekyll의 Code Block 테마 예쁘게 만들기](https://eungbean.github.io/2018/08/14/use-Atom's-One-Dark-syntax-theme-with-jekyll/)

## **변경 전 (Light Theme with Light Style Code Block)**

![](https://velog.velcdn.com/images/a87380/post/44a85040-485c-4fc1-990b-fcad3bacac88/image.png)

## **변경 후 (Light Theme with Dark Style Code Block)**

![](https://velog.velcdn.com/images/a87380/post/a60a6412-ff00-4eba-ab34-60cb359b0532/image.png)
