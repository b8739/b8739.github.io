---
title: "Vue 기본 디렉토리 구조"

categories:
  - vue
tags:
  - [Vue, Vue 디렉토리, Vue 구조]

toc: true
toc_sticky: true

date: 2020-02-21
last_modified_at: 2020-02-21
---

CLI로 설치한 Vue 디렉토리이다. 가장 자주 사용하는 파일들은 src에 밀집되어 있다.

![image](https://user-images.githubusercontent.com/48551743/108617759-3a5e3d80-745c-11eb-94e9-dccd94312790.png)

내부를 살펴보자면
assets 폴더에는 주로 사용하는 이미지 파일이나 css파일이 들어간다.

![image](https://user-images.githubusercontent.com/48551743/108617794-77c2cb00-745c-11eb-8eb4-f9ed57ef172e.png)

components 폴더에는 페이지를 구성하는 단일 컴포넌트들이 들어간다.

![image](https://user-images.githubusercontent.com/48551743/108617805-85785080-745c-11eb-9a5e-b8f3b5a59e77.png)

router파일에는 라우팅을 관리하는 index.js (or router.js) 파일이 들어간다.
![image](https://user-images.githubusercontent.com/48551743/108617831-a476e280-745c-11eb-9353-5ca6fd894a4f.png)

Views 폴더에는 앞서 설명한 components 파일속의 컴포넌트로 구성된 'page'가 들어간다. (쉽게 설명하면, component 폴더의 vue파일들은 로고블럭이고, view 폴더의 vue파일을 그 블럭들로 만든 완제품이라고 생각하면 된다. 약간 어렵게 설명하자면, routing 되는 페이지들이 view 폴더에 들어간다.)

![image](https://user-images.githubusercontent.com/48551743/108617927-5c0bf480-745d-11eb-8e19-568d305f8283.png)

src 폴더 내에서, 세부폴더에 따로 속하지 않는 두 파일이 있는데 App.vue와 main.js이다. 각각 어떤 역할을 하는지는 다른 포스팅에서 설명하도록 하겠다.
![image](https://user-images.githubusercontent.com/48551743/108617937-7e057700-745d-11eb-8731-b584727525d8.png)
