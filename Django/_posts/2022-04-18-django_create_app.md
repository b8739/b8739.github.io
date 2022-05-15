---
title: Django 앱 생성방법
author: Jae
categories: [Django]
tags: [django, 인프런 강의]
---

인프런 **_파이썬/장고 웹서비스 개발 완벽 가이드 with 리액트_** 강의를 보고 정리한 내용입니다.

---

## 강의 내용 정리

강의명 : 파이썬/장고 웹서비스 개발 완벽 가이드 with 리액트
강의: 장고앱과 블로그 코딩쇼

---

매번 템플릿 생성할 필요 없다.

한번 앱으로 만들면 (프로젝트에서 따로 앱으로 격리해서 생성하는 형태) 만들어두면 다른 프로젝트에서도 재사용 가능

## 앱 생성 방법

manage.py가 있는 파일 경로에서 다음 명령어 입력

```powershell
python3 manage.py startapp 앱이름 (ex.blog)
```

![](https://velog.velcdn.com/images/a87380/post/8465df67-77ad-4f9f-89ab-9214dc55baed/image.png)

이는 장고 앱이 갖추어야 할 최소한의 파일들을 생성해준 것이다.

[urls.py](http://urls.py/) 파일도 포함시키고자 한다면, 직접 이 이름으로 파일을 하나 만들어주면 된다.

![](https://velog.velcdn.com/images/a87380/post/1b457046-1fd1-4b08-bb6c-be2664cd0ec1/image.png)

## 장고 앱의 목적: 재사용성

- 만약 재사용성을 목적으로 둔 것이 아니라면, 하나의 장고 앱에서 현재 프로젝트 거의 모든 기능을 구현해도 상관없다.
- 앱은 하나의 작은 서비스로 봐도 무방하다.
- 하나의 앱 이름은 현재 프로젝트 상에서 유일해야 함
- 단순히 서비스가 방대해진다고해서 분리하는것이 아니고, 재사용성에 초점을 두고 앱으로 분리하는 것
- 새롭게 생성한 장고앱이나 외부 라이브러리 형태의 장공배은 필히 settings.INSTALLED_APPS에 등록을 시켜주어야만 장고앱으로서 취급된다.
  - 장고 프로젝트 폴더의 settings.py에 들어가서 INSTALLED_APPS에 추가해주면 됨

![](https://velog.velcdn.com/images/a87380/post/277cf636-48b0-4d3a-aa4f-1dead3fd22d7/image.png)

- 앱의 URLConfs를 제외한 많은 부분 (model,static)은 자동으로 설정됨
