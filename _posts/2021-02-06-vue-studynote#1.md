---
title:  "[노트] 한시간만에 끝내는 Vue.js 입문 #1 - 환경세팅"

categories:
  - vue
tags:
  - [Vue,Vue.js,Front-End]

toc: true
toc_sticky: true
 
date: 2020-02-06
last_modified_at: 2020-02-06
---
개발자의 품격 한시간만에 끝내는 Vue.js 입문  ([**유튜브 링크**](https://www.youtube.com/watch?v=sqH0u8wN4Rs&ab_channel=%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98%ED%92%88%EA%B2%A9, "Youtube Link"))

># Vue.js 소개

**Vue.js는 웹 프론트엔드 프레임워크이다.**

- 컴포넌트 기반의 SPA를 구축할 수 있게 해주는 프레임 워크

**컴포넌트 (Component)**  
	- 웹을 구성하는 로고, 메뉴바, 버튼, 모달창 등 웹페이지 내의 다양한 UI 요소
    - 재사용 가능하도록 구조화 한 것

**SPA (Single Page Application)**  
	- 단일 페이지 어플리케이션
    - 하나의 페이지 안에서 필요한 영역 부분만 로딩 되는 형태
    - 빠른 페이지 변환
    - 적은 트레픽 양  
* * *
 
># CLI 통해 Vue 설치 

Vue 관리를 편하게 해주는 툴 정도라고 일단 이해

```
npm install -g @vue/cli
```
```
vue create test
```
![오류 이미지](https://images.velog.io/images/b8739/post/df1098c4-9af4-4ae3-9b60-9bcee82b19f5/image.png)

스크립트 실행 권한이 제한되어 있기 때문에 Windows PowerShell을 관리자 권한으로 실행해야 한다고 한다.

[참고 문서](https://singa-korean.tistory.com/21, "참고 문서")

다음과 같이 입력한다. Set-ExecutionPolicy RemoteSigned

![](https://images.velog.io/images/b8739/post/cd664c5c-3294-439b-8d65-3d7d5b53f298/image.png)

'모두 예' (A) 를 입력

![](https://images.velog.io/images/b8739/post/6c9db3c5-5542-4649-94eb-22cfa0233750/image.png)

아까와 달리 정상적으로 결과값이 뜨는 것을 확인할 수 있다. 
이제 Default에 진입.
![](https://images.velog.io/images/b8739/post/3cf1ebba-a25b-4c8d-ab70-f0af029092e0/image.png)


보이는 것처럼 뭐가 엄청 다운된다.
![](https://images.velog.io/images/b8739/post/20e0e75e-b714-45ba-990f-b44544d68e40/image.png)

다운이 다 되고나면 입력한대로 'test'란 이름의 디렉토리와 내부 파일들이 생성된다.
리액트 설치할 때 'npm create-react-app'란 방법으로 편리하게 개발 환경을 세팅한 것과 같은 맥락이라고 보면 될 것 같다.  
![](https://images.velog.io/images/b8739/post/aabae2c1-9b78-4f50-88fd-ee4a5df166d5/image.png)
* * *
># 서버 실행 (npm run serve)

파란 글씨로 test 폴더로 들어가서 'npm run serve'를 실행해보라고 해서 입력해본다.  
서버가 실행된다.  
![](https://images.velog.io/images/b8739/post/f9139676-3a76-4e5e-982d-f3ccd963536a/image.png)
![](https://images.velog.io/images/b8739/post/a9698d5f-de8c-443b-9302-efea99fc1968/image.png)

로컬 8080 서버로 진입해보면 다음과 같은 화면이 나온다.  
![](https://images.velog.io/images/b8739/post/81c7274a-a8e4-471f-b778-a5e4c7aa354c/image.png)
Vue가 정상적으로 설치되었음을 알 수 있다. 
여기까지는 React 설치과정이랑 매우 흡사하다.  

Vue도 React, Angular와 같이 라우팅으로 화면을 전환하기 때문에 router를 다음과 같이 설치해주어야 한다고 한다. (설치하고 나면 라우팅을 할 수 있는 상태가 된다.)    

**router 오류가 나서 npm install -save vue-router 이 커멘드로 다시 설치해주었다.**  
![](https://images.velog.io/images/b8739/post/18c433f5-525d-40a9-bc91-23ca3bd66a90/image.png)

화면 Layout을 구성하기 위해서 다음과 같이 components폴더 안에 layout폴더를 만들고 그 안에 화면 상단 부분이 될 Header.vue 파일을 생성한다.    
![](https://images.velog.io/images/b8739/post/5cb7720e-4d26-48a4-803f-dbab89faac7d/image.png)
* * *
># Bootstrap 가져오기

화면 디자인으로는 Bootstrap을 사용한다. 
Vue도 React처럼 전용 Bootstrap이 있다고 한다. ([BootstrapVue](https://bootstrap-vue.org/))

BootstrapVue 사이트에 들어간다.

![](https://images.velog.io/images/b8739/post/0d1c484e-9843-4553-9719-b63951b33af1/image.png)

사용하기 위해서는 npm을 통해 설치해주어야 한다. ('npm install vue bootstrap-vue')
![](https://images.velog.io/images/b8739/post/0c44d8ba-39c8-4a66-adb1-a74525c03e68/image.png)
다운이 다 되고나면, 해당 파일들이 node_modules 폴더 안에 설치되어서, bootstrap을 사용할 수 있는 '상태'가 된다.

그리고 다음 라인들을 main.js 파일 맨 윗 부분에 추가해준다.
![](https://images.velog.io/images/b8739/post/d0f9d606-8f85-469e-9182-40ca67824f36/image.png)
![](https://images.velog.io/images/b8739/post/ead35537-01f5-47c3-b2a3-62d90275c8eb/image.png)

template 태그를 입력하려니 snippet이 작동하지 않는다.  
vscode extension에서 vue snipper을 설치해줘서 사용한다.    
![](https://images.velog.io/images/b8739/post/a7856197-d007-45b7-ae4a-bca4238dee5e/image.png)