---
title: Django 프로젝트 설치 및 기본 셋업
author: Jae
categories: [Django]
tags: [django, 인프런 강의]
---

인프런 **_파이썬/장고 웹서비스 개발 완벽 가이드 with 리액트_** 강의를 보고 정리한 내용입니다.

---

## 강의 내용 정리

강의명 : 파이썬/장고 웹서비스 개발 완벽 가이드 with 리액트

강의: 4강 장고 프로젝트 생성

### 장고 프로젝트 생성

```python
django-admin startproject 프로젝트명
python -m django startproject 프로젝트명
```

### 장고 프로젝트 내부 구조

- (프로젝트 이름): 프로젝트로 생성된 디렉토리 (이름 변경 상관 x)
  - manage.py: 명령행을 통해 각종 장고 명령을 수행
  - (프로젝트 이름): 프로젝트로 생성된 디렉토리 (이 이름을 참조하고 있는 코드가 몇 개 있어서 함부로 수정 x)
  - **init**.py: 모든 파이썬 패키지에 있음. 패키지를 import할 때의 import 대상
  - settings.py: 현재 프로젝트에서 장고 기본설정(django/conf/global_settings.py)을 덮어쓰고 새롭게 지정할 설정들
  - urls.py: 최상위 URL 설정
  - [wsgi.py](http://wsgi.py): 실서비스에서의 웹서비스 진입점

### 프로젝트 초기화 작업 및 개발서버 구동

```python
cd 프로젝트명
python3 manage.py migrate
python3 mange.py createsuperuser
python3 manage.py runserver
```

**python3 manage.py migrate**

- 모델의 변경 내역을 DB 스키마에 적용시키는 장고의 방법 (아직 완벽하게 이해되지는 않았다. 현재는 git commit처럼 모델 스키마에 변경사항을 반영하는 것 정도로 이해하고 있다.)
- 실행을 하면 아래와 같은 출력결과가 뜨고 (Unknown command가 안떴다면 정상적으로 실행된 것), 디렉토리 안에 db.sqlite3가 생긴다.

![](https://velog.velcdn.com/images/a87380/post/d68aedae-7d3f-45ef-b03d-883bd1feef08/image.png)

**python3 manage.py createsuperuser**

- 현재 프로젝트를 진행하는 개발 환경, 즉 장고내에서 모든 권한을 가지는 슈퍼 사용자를 만드는 것이다.
- 쉽게 말하면 관리자로, 장고 내의 admin 페이지에 들어가려면 꼭 만들어야 한다.
- 이름, 이메일 (선택), 비밀번호를 순서대로 입력해주면 되는데, 비밀번호를 8 글자 이내로 설정하면 아래와 같이 경고문구가 뜨고 너무 쉬운 비밀번호인데 그대로 만들것인지 묻는다.
  - 지금은 연습이기 때문에 굳이 복잡한 비밀번호를 만들면 매 입력때마다 번거로울것같아서 그냥 그대로 만들었다.

![](https://velog.velcdn.com/images/a87380/post/963d9b32-9868-4a59-bdb0-27e2a9241702/image.png)

**python3 [manage.py](http://manage.py) runserver**

서버를 구동하는 명령어
![](https://velog.velcdn.com/images/a87380/post/ec6efb31-e58b-41a2-a57b-d694415c4c0c/image.png)

[http://127.0.0.1:8000/](http://127.0.0.1:8000/) 즉 로컬 서버 8000포트에 서버가 구동된 것이다.

맥에서는 option 버튼을 누른 상태에서 해당 링크를 클릭하면 아래와 같이 브라우저가 열린다.

![](https://velog.velcdn.com/images/a87380/post/16ff5564-1a34-4232-b0b5-625f692c2bb1/image.png)

그리고 해당 주소 뒤에 /admin을 붙여서 들어가면 관리자 페이지로 진입한다.

![](https://velog.velcdn.com/images/a87380/post/ee290a2b-14ea-454b-b619-faafef74c823/image.png)

아까 만든 username과 password를 입력하고 들어가서, add 누르면 새로운 유저를 만들수도 있다.

![](https://velog.velcdn.com/images/a87380/post/dcc29767-6dbe-448a-86f5-002b02734db8/image.png)

마치 AWS에서 IAM User를 만들고 권한을 부여하는 것처럼, 관한을 분산시켜서 사용할 수 도 있는 듯 하다.
