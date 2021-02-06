---
title:  "[노트] 한시간만에 끝내는 Vue.js 입문 #2 - 라우팅 세팅"

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

**layout/components/~.vue**: 정적 components  
**views/ ~.vue(ex. About.vue, Home.vue)** - 동적 components  
**App.vue:** components들로 구성되어 최종적으로 보여질 페이지  
**main.js** - 어떤 거를 쓰겠다고 선언해두는 파일로 이해  
**router.js** - 라우팅 관리 파일  

### Components 생성
Bootstrap Vue에서 Nav코드를 복사해서 Header.vue에 복사
![](https://images.velog.io/images/b8739/post/306960ce-944d-4495-b808-8316890b6dfe/image.png)

### Components 삽입 및 선언
App.vue에 component를 넣은 위치에 태그를 입력해주고 (빨간색 표시), 노란색으로 표시한 부분처럼 입력해줘야 최종적으로 component를 사용 가능.

![](https://images.velog.io/images/b8739/post/244192bd-08cb-42c5-821c-c553f6a8dc99/image.png)

### Routing (라우팅)
고정된 부분은 방금 입력한 Header처럼 사용해주면 되고, 자주 바뀔 컨텐츠 영역에 router코드를 넣어둠. 추후에 about.vue나 home.vue같은 페이지를 만들어서 라우팅 시켜놓으면, 페이지 전체가 로딩되는 것이 아니라 router-view 부분만 해당 페이지로 바뀌게 할 수 있음.  
![](https://images.velog.io/images/b8739/post/efb93c7e-ce02-4385-8e8b-8603b203c567/image.png)

### Routing할 페이지 생성
view폴더를 만들고 안에 page를 만들어둠 (About.vue, Home.vue 등)
![](https://images.velog.io/images/b8739/post/f844663a-df25-405e-b9a1-a794bb49001c/image.png)
![](https://images.velog.io/images/b8739/post/65baae42-e4a7-4ac4-a33c-2f99ae204024/image.png)

### Route.js 정의
들어오는 path마다 어떤 .vue파일을 보여줄지 연결시키는 작업 (맨 밑에 export default를 꼭 적어주어야 된다.)
![](https://images.velog.io/images/b8739/post/dc8b1c25-f0ef-4f5e-9e9b-02f3f8570818/image.png)
### Main.js에 router 내용 추가

최종적으로 main.js에 router를 import해오고 사용하겠다고 선언해주어야 페이지에 반영됨.
마지막 new Vue({...}) 부분 설명: App을 mount할 때 router를 쓰겠다는 의미
![](https://images.velog.io/images/b8739/post/6d82faa5-25dd-4602-a415-8303daa987a6/image.png)

### 결과 화면
Home 페이지
![](https://images.velog.io/images/b8739/post/0f04a96c-faf2-46fc-90ef-a82764b9818b/image.png)

About 페이지
![](https://images.velog.io/images/b8739/post/b4a7cfd3-e111-4fe5-9ed7-af51e8caf282/image.png)