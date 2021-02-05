---
title:  "Markdown 문법 정리"
excerpt: "기본적인 Markdown 문법들을 정리한 내용이다."

categories:
  - markdown
tags:
  - [Markdown, Github, Git]

toc: true
toc_sticky: true
 
date: 2020-02-05
last_modified_at: 2020-02-05
---
<!-- header   -->
# **Header (헤더)**
+ ## **사용법**
```
# h1  
## h2  
### h3  
#### h4  
##### h5  
###### h6 
```
+ ## **결과**   
# h1
## h2
### h3
#### h4
##### h5   
###### h6

* * *

<!-- italic   -->
# Italic (기울여 쓰기)
+ ## **사용법**
```
*안녕하세요* OR
_안녕하세요_
```
+ ## **결과**
*안녕하세요*

* * *
# Bold (강조)
+ ## **사용법**
```
**안녕하세요** OR
__안녕하세요__
```
+ ## **결과**
**안녕하세요**  

* * *
<!-- Blockquote   -->
# 인용 (Blockquote)
+ ## **사용법**
```
>>안녕하세요
>>>안녕하세요
>>>>안녕하세요
```
+ ## **결과**
>안녕하세요
>>안녕하세요
>>>안녕하세요

* * *
<!-- List up   -->
# 목록
+ ## **사용법**
```
* 부모님
    * 자식
        * 손자
(*, +, - 전부 가능)
```
+ ## **결과**
* 부모님
    * 자식
        *   손자

* * *

<!-- 구분선  -->
# 구분선
+ ## **사용법**
```
* * *
***
******************
- - -
------------------
```
+ ## **결과**
* * *
***
******************
- - -
------------------

* * *
<!-- 코드블럭  -->
# 코드블럭
+ ## **사용법**
```
(```) <- 가로는 실제로 입력하면 안됨, `만 입력
여기에 코드를 집어넣음
(```)
```
+ ## **결과**
```
여기에 코드를 집어넣음
```

* * *
<!-- 링크  -->
# 링크
## **사용법**
```
'[Title](link)'를 입력하면 됨
ex. [Naver](https://naver.com, "naver link")
```
## **결과**
[Naver](https://naver.com, "naver link")

* * *
<!-- 이미지  -->
# 이미지
## **사용법**
```
'![Alt text](/path/to/img.jpg)'를 입력하면 됨
ex. ![Alt text](/path/to/img.jpg "Optional title")
```
## **결과**
![Alt text](https://upload.wikimedia.org/wikipedia/ko/thumb/0/05/Battlegrounds_Cover_Art.png/300px-Battlegrounds_Cover_Art.png "Battle Ground")
