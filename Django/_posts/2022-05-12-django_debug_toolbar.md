---
title: Django django-debug-toolbar를 통한 SQL 디버깅
author: Jae
categories: [Django]
tags: [django, 인프런 강의, 검색구현]
---

인프런 **_파이썬/장고 웹서비스 개발 완벽 가이드 with 리액트_** 강의를 보고 정리한 내용입니다.

---

# Django django-debug-toolbar를 통한 SQL 디버깅

**Third Party App**

현재 request/response에 대한 다양한 디버깅 정보를 보여줌

응답 포멧이 html 포멧일 때만 사용 가능 (API 응답에 대해서는 보여줄 수 없음)

다양한 Panel 지원

- SQLPanel을 통해, 각 요청 처리 시에 발생한 SQL 내역 확인 가능
- Ajax 요청에 대한 지원은 불가능 (웹 브라우저에서 바로 보여지지 않기 때문에)

---

## Installation

공식 Documentation 참고

[Installation - Django Debug Toolbar 3.4.0 documentation](https://django-debug-toolbar.readthedocs.io/en/latest/installation.html)

`주의사항`

웹페이지의 템플릿에 꼭 body태그가 있어야만, django-debug-toolbar가 동작함

이유: dbt의 html/script 디폴트 주입 타겟이 body태그 (INSERT_BEFORE 설정 디폴트: body태그)

필요한 부분을 다 채워넣으면, 브라우저 화면 우측에 다음과 같은 toolbar가 생김

![](https://velog.velcdn.com/images/a87380/post/03701c1e-1b32-4bcd-bc85-202f85c82177/image.png)

---

SQL의 경우 소요시간도 확인 가능 (확실히 flask보다 체계적인 관리가 가능하겠다는 느낌)

![](https://velog.velcdn.com/images/a87380/post/694faccd-5f90-4f02-b7c2-f20970a362dc/image.png)

---

## 코드를 통한 SQL 내역 확인

### QuerySet의 query 속성 참조

ex) print(Post.objects.all().query) → 실제 문자열 참조 시에 SQ 생성

### settings.DEBUG=True시에만 쿼리 실행내역을 메모리에 누적

```python
from django.db import connection, connections
for row_dict in connection.queries:
	print(`{time} {sql}`.format(**row_dict))

connections['default'].queries
```

### 쿼리 초기화

메모리에 누적되기에, 프로세스가 재시작되면 초기화

django.db.reset_queries()를 통해서 수동 초기화도 가능

`주의` 배포시에는 Debug를 True로 하면, 메모리가 계속 누적되기 때문에 성능 저하될 수 있어서 꼭 False로 하고 배포
