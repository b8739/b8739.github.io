---
title:  "[노트] 한시간만에 끝내는 Vue.js 입문 #3 - Data Binding"

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

### 대략적인 Vue Lifecycle Diagram을 이해
![](https://images.velog.io/images/b8739/post/26afb907-6624-4678-84b0-a6d984b2fed5/image.png)
![](https://images.velog.io/images/b8739/post/52e55135-ae03-4b01-95b0-e1635dd2de2f/image.png)  
출처: [Vue 공식 Document](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)

### 데이터 바인딩
![](https://images.velog.io/images/b8739/post/53f2a019-a554-4de4-903b-ebc6c1fff82b/image.png)

#### **결과**
![](https://images.velog.io/images/b8739/post/93a48b7a-7870-4769-9ecb-7afb29e0ed5b/image.png)

### 양방향 데이터 바인딩 (two way)
get버튼을 부르면 console에서 input값을 띄워주고, set버튼을 누르면 지정된 값으로 input값을 바꿔주도록 코드를 작성
![](https://images.velog.io/images/b8739/post/357db246-a6cf-40c7-8cae-1400ccfd94b7/image.png)
#### **결과**
처음에 input창 안에는 abc라고 적혀있고, get을 눌러서 'abc'값이 console창의 띄워지고, set을 눌러서 input값이 지정해놓은 '12345'값으로 바뀐 화면. 
![](https://images.velog.io/images/b8739/post/4d351b10-10ff-40fe-87e3-d507f79092db/image.png)

lifecycle에 대해 공부하기 위해서 코드를 이렇게 작성해본다.
![](https://images.velog.io/images/b8739/post/633883c2-9276-42b5-b0ef-46af6855c974/image.png)  
화면을 새로고침 해보면, 콘솔창에 다음과 같은 결과가 나온다.  
![](https://images.velog.io/images/b8739/post/78423b07-6120-4734-a699-d74a442a1baa/image.png)  
그리고, 데이터로 UI를 바꿔주는 SET버튼을 클릭하면 다음과 같은 결과가 나온다.  
![](https://images.velog.io/images/b8739/post/cb2fae24-08de-44e3-8450-faeda05a549e/image.png)  
그리고 직접 데이터를 INPUT창에서 바꿔도 BEFORE UPDATE와 UPDATE가 콘솔창에 뜬다.  
![](https://images.velog.io/images/b8739/post/65e48460-0a47-4f2c-bd06-01bb4d871f9a/image.png)  
이처럼, Before update와 update는 **데이터가 변경될 때** 실행된다는 것을 알 수 있다.
  
또한, 사용자와 interaction을 통하지 않고 데이터의 변화를 감시할 수 있는 watch라는 함수도 있다.  
![](https://images.velog.io/images/b8739/post/b37580ef-272d-4236-b251-503104b979c2/image.png)  
보이는 것과 같이 input창에 값을 입력할때마다 watch 함수가 이를 감지하고 console창에 띄워주는것을 확인할 수 있다.  
![](https://images.velog.io/images/b8739/post/9fc2cddc-b4e4-4ff0-9de7-223253ec91a0/image.png)  

태그에 더 다양한 @이벤트를 걸 수도 있다.  
![](https://images.velog.io/images/b8739/post/c19e24be-63ab-4aed-8267-71e4ddb02986/image.png)  
메소드임에도 changeRegion()가 아니라 괄호 없이 changeRegion이라고 적어주면 된다.  