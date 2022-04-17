---
title: Django 주요 구성 요소
author: Jae
categories: [Django]
tags: [django, 인프런 강의]
---

# Django 주요 구성 요소

## 강의 내용 정리

강의명 : 파이썬/장고 웹서비스 개발 완벽 가이드 with 리액트

강의: 6강 장고 주요 구성 요소

## 장고 주요 기능들 (1)

1. **Function Based Views:**
   - 함수로 HTTP 요청 처리
2. **Models:**
   - 데이터베이스와의 인터페이스 (ORM)
3. **Templates:**
   - 복잡한 문자열 조합을 보다 용이하게 할 수 있도록 도와줌.
   - 주로 HTML 문자열 조합 목적으로 사용하지만, 푸쉬 메시지나 이메일 내용을 만들 때에도 쓰면 편리함.
4. **Admin 기초:**
   - 심플한 데이터베이스 레코드 관리 UI
   - 관리자 페이지를 따로 만들지 않아도 자동적으로 생성됨. (데이터베이스 목적)
5. **Logging:**
   - 다양한 경로로 메세지 로깅
6. **Static files:**
   - 개발 목적으로서의 정적인 파일 관리
7. **Messages framework:**
   - 유저에게 1회성 메세지 노출 목적

## 장고 주요 기능들 (2)

1. **Class Based Views:**
   - 클래스로 함수 기반 뷰 만들기
2. **Forms:**
   - 입력폼 생성, 입력값 유효성 검사 및 DB로의 저장
3. **테스팅**
4. **국제화 & 지역화**
5. **Caching**
   - Redis 등
6. **Geographic**
   - DB의 Geo 기능 활용 (PostgreSQL 중심)
   - 요즘은 mySQL Geo 기능도 좋아짐.
7. **이메일 기능**
8. **Syndication Feeds (Rss/Atom)**
9. **Sitemaps**

## 장고 기본 앱

앱이란 장고가 규정해놓은 하나의 파이썬 패키지라고 보면 됨

admin, admindocs, auth, contenttypes, flatpages, gis, humanize, messages, postgres, redirects, sessions, sitemaps, sites, staticfiles, sydication

## 웹 애플리케이션 기본 구조

웹 브라우저

↔  다양한 언어나 프레임워크로 만드는 웹 서버 (여기선 django)

↔  DB 서버 (MySQL, PostgreSQL 등)

↔  캐시 서버 (Memcached, Redis)

다양한 언어나 프레임워크로 만드는 웹 서버 (여기선 django) 단계의 내부를 살펴보자면

클라이언트로부터 요청이 들어오면 아래와 같은 과정을 수행할 수 있음

- URLConf
  - 미리 URL별로 호출할 함수를 리스트에 등록
- 뷰 (View)
  - URL에 맞춰 호출된 함수
- 모델
  - 파이썬 코드로 데이터베이스와 통신
- 템플릿 엔진
  - 복잡한 문자열을 손쉽게 조합하기 위한 문자열 렌더링 엔진
    - Flask나 github 블로그 관리할 때 {\% 어쩌구 저쩌구 \%} 이런 문법을 많이 봤었는데, 이런 문법으로 쉽게 템플릿 (그러니까 문자열들)을 관리해주는 엔진인 것 같다.
