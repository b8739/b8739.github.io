---
title: Django가 Media를 처리하는 방법
author: Jae
categories: [Django]
tags: [django, 인프런 강의]
---

인프런 **_파이썬/장고 웹서비스 개발 완벽 가이드 with 리액트_** 강의를 보고 정리한 내용입니다.

---

## Static 파일

개발 리소스로서의 정적인 파일 (js,css,image등)

앱/프로젝트 단위로 저장/서빙

## Media 파일

FiledField/ImageField 를 통해 저장한 모들 파일 → **Model을 통해서 관리하는 방법**

- FileField:
  - FIled Storage API 사용 (장고는 Filed System Storage만 지원. django-storages를 통해 확장 지원)
- ImageField(FileField 상속)
  - Pillow를 통해 이미지 (width,height) 획득
  - Pillow 미설치시에 makemigrations 실패 (M1에서는 설치해도 오류남, 별도 조치 필요할듯)
- 위 필드를 상속받은 커스텀 필드를 만들 수도 있음
  - PDXField, ExcelField등

DB 필드에는 저장경로를 저장하며, 파일은 파일 스토리지에 저장 → **File Storage API**

실제로 문자열을 저장하는 필드(중요)

프로젝트 단위로 저장/서빙

## model에 ImageField를 추가하고 makemigrations

**Mac M1을 사용하는중인데 Pillow를 설치하고, ImageField를 사용하려고 하면 다음과 같은 오류가 뜬다.**

가상환경을 새로 만들어보고, python interpreter를 3.7, 3.9등으로 바꿔보고, Pillow도 다양한 버전을 설치해봤는데도 똑같은 오류가 뜬다.

검색해보니 이런 오류가 뜨는 사람들이 꽤 있는 것 같은데 나중에 알아봐야 할 것 같다.

```python
instagram.Post.photo: (fields.E210) Cannot use ImageField because Pillow is not installed.
        HINT: Get Pillow at https://pypi.org/project/Pillow/ or run command "python -m pip install Pillow".
```

## Media 파일 처리 순서

1. HttpRequest.FILES를 통해 파일이 전달
2. 뷰 로직이나 폼 로직을 통해 유효성 검증
3. FiledFIeld/ImageFIled 필드에 경로를 저장 (문자열)
4. settings.MEDIA_ROOT 경로에 파일을 저장

## 장고 디렉토리 [settings.py](http://settings.py) 에 Media 저장 경로 추가

MEDIA_URL: 미디어의 URL

MEDIA_ROOT: 미디어가 실제 저장되는 경로

![](https://velog.velcdn.com/images/a87380/post/edc93ab2-aa6e-4a15-9495-ef4afeddd0e3/image.png)

해당 파일 최상단에 보면 BASE_DIR을 확인 가능

![](https://velog.velcdn.com/images/a87380/post/38fc53b8-8703-4c2c-a5e5-475d8d636723/image.png)

\*\***file**: 파이썬 파일 import 될 떄의 경로를 담고 있음\*\*

\*\***file**.parent.parent: 해당 파일의 부모의 부모 경로이니 프로젝트 디렉토리를 의미\*\*

admin페이지에서 이미지를 올리고, url을 클릭해서 들어가도 이미지가 안 뜨고 page not loaded가 뜸

urlpatterns에서 static 경로를 추가해주어야 함

장고는 실제 production 상태에서는 장고내에서 static이나 media file serving을 하는것을 권장하지는 않음 (그래서 Debug=False 일때는 아래 경로가 빈 리스트를 반환함 )

![](https://velog.velcdn.com/images/a87380/post/bb88a860-73f8-474f-b72f-60917027b575/image.png)

### 사용할 만한 필드 옵션

**blank**:

- 업로드 옵션 처리 여부
- 디폴트 false

**upload_to**

문자열로 지정하면 ‘중간 디렉토리 경로’

함수로 지정하면 ‘중간 디렉토리 경로' 및 ‘파일명’

- 미디어가 저장될 경로를 override
- 아래 빨간줄처럼 작성하면 media root 아래 instagram/post 경로에 저장됨
- 근데 위와 같이 해도 결국 서비스를 관리하다보면 폴더에 미디어가 몇천개씩 쌓이게 된다.
- 경로 뒤에 /instagram/posts/%Y%m%d%H%M%S 이런식으로 시간별로 저장되게 할 수도 있다.
  - instagram/posts/%Y/%m/%d
  - instagram/posts/%Y%m%d
  - instagram/posts/%Y%m%d/%H%M%S
- 이렇게 변경한다고해서 이미 저장된 파일들이 위와 같은 형식으로 저장되는 것이 아니고, 새로 파일을 **저장할 때** 반영이 됨

![](https://velog.velcdn.com/images/a87380/post/7b1b2825-37a3-4738-9a9e-85e812cc25f4/image.png)

```python
#from 프로젝트폴더 import settings가 아니라 django.conf에서
#import를 해야 global_settings와 settings를 합쳐줌
from django.conf import settings

```

### **File Upload Handler**

파일크기 ≤ 2.5MB

- 메모리에 담겨 전달
- MemoryFileUploadHandler

파일크기 > 2.5MB

- 디스크에 담겨 전달
- TemporaryFIleUploadHandler

관련 설정

settings.File_UPLOAD_MAX_MEMORY_SIZE

- 2.5MB
