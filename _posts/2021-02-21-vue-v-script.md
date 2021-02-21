---
title: "Vue 기본 스크립트 구조"

categories:
  - vue
tags:
  - [Vue, Vue 스크립트, Vue 구조]

toc: true
toc_sticky: true

date: 2020-02-21
last_modified_at: 2020-02-21
---

회사에서 머신러닝 웹 개발 프로젝트로 Vue를 사용하게 되면서 꽤 많이 익숙해졌다. 문법을 잘못 입력하면 빨간줄이 그어지기 때문에 그때마다 어찌저찌 매번 에러를 수정하기는 했는데, 자잘한 문법들이 헷갈리기 때문에 한번 정리하는 시간을 가져보고자 한다.

![v-on_templateTag](https://user-images.githubusercontent.com/48551743/108617486-2285ba00-745a-11eb-8678-aec98c6bd1c4.PNG)

가장 기본적으로, Vue 컴포넌트 파일은 template 태그로 시작한다. template 태그를 만들어주고 사이에 div를 넣어주면 된다. (이 div 내부에는 얼마든지 추가적으로 div가 더 들어갈 수 있지만, template 태그 내부의 가장 첫번째 level에는 오직 한 가지의 div 태그만 존재할 수 있다.)

![image](https://user-images.githubusercontent.com/48551743/108617570-e2730700-745a-11eb-8190-6217e2770c71.png)

script 코드 안에는 바인딩할 데이터 (data), 사용할 컴포넌트 (component), 받아올 데이터(prop), 사용할 메소드 (methods)들이 정의된다. 각 요소 (data(){}...)가 끝나고는 다음 요소를 적기전에 꼭 ,를 찍어줘야 한다. 1) data, 2) computed, 3) lifecycle (created, mounted 등)은 '(){}' 형태이고 나머지는 :{}형태이다. 이 부분이 늘 헷갈렸는데 끝에 s (복수형)으로 끝나는거는 다 :{}로 끝난다고 암기하면 될 듯 하다.

![image](https://user-images.githubusercontent.com/48551743/108617653-92487480-745b-11eb-9392-1d04cf6ca420.png)
