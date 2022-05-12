---
title: 학교 홈페이지_트렌드 조사
author: Jae
categories: [Projects]
tags: [React, django, 풀스택, 학교 홈페이지]
---

# First Page

## Main Article

요즘은 웬만한 웹사이트에 들어가면 Article이 화면에서 대문짝만하게 자리를 차지하고 있다.

마치 잡지의 맨 앞 겉표지를 연상시킨다.

UX Principle중에 Visibiltiy (가시성)이라고 있는데, 그것에 올빵한 느낌.

기능이 더 중요시되는 웹 어플리케이션이라면, 이와 같은 화면 구조가 UX를 낮출수도 있겠다.

하지만 우리가 흔히 아는 홈페이지 형식의 웹사이트는 정보 제공의 목적이 강하다.

게다가 첫 화면 같은 경우에는 텍스트 많은 Information을 제공하려하기보다는, 흥미를 낚으려는 목적이 더 크기 때문에 대문짝만한 Article이 들어간 첫화면이 괜찮은 구조라는 생각이 든다.

![](https://velog.velcdn.com/images/a87380/post/9bd2f6dc-b225-42ae-bfcb-831ac1ae56c6/image.png)

이러한 인상을 받은건 아래 세 사이트에서이다.

사실 학교 홈페이지 말고 요즘 대부분의 사이트들을 (ex.애플, 삼성 등)을 들어가봐도, 첫 화면이 거의 다 이러한 모양새이다.

마치 잡지나 온라인 기사와 같은 인상을 준다.

심지어, 첫 화면에 영상을 띄우기도 한다.

요즘 사이트의 첫 화면은, 어떠한 강렬하고도 상징적인 (스스로를 representing하는) 첫 인상을 주고싶어함을 알 수 있다.

[Home](https://hms.harvard.edu/)

[Stanford University](https://www.stanford.edu/)

[UCLA](https://www.ucla.edu/)

[서울대학교](https://www.snu.ac.kr/)

---

## Sub Articles

가장 사이즈가 큰 Article이 맨 처음에 나오고, 스크롤을 내릴수록 세부 Article이 Row 형태로 나온다.

역시 첫 화면은 개요의 역할을 하는 듯 하다.

각 카테고리의 가장 최근 정보, 혹은 돋보이고 싶은 정보들을 **선발대** 느낌으로 보이게 해서, 유저로 하여금 직접 모든 메뉴에 들어가지 않고도 개괄적으로 학교에 대한 정보를 습득할 수 있게 된다.

![](https://velog.velcdn.com/images/a87380/post/c51dce10-0cdd-4841-bbf2-93fd27e6eec3/image.png)

![](https://velog.velcdn.com/images/a87380/post/0a69f2f3-c6d9-44a9-8b8a-7afabdb59a03/image.png)

![](https://velog.velcdn.com/images/a87380/post/526e9b6b-41ef-4e51-9698-fc2d0868dcbe/image.png)

---

## Navigation

### 한양대학교 상단 Nav

![](https://velog.velcdn.com/images/a87380/post/10a23fcd-9aa5-45ec-b9c7-dd7f0d96fe2a/image.png)

전통적인 느낌의 상단 Nav이다.

많이 접한 형태의 Nav구조라서, 이질적이지 않고 (UX 용어로 Natural Mapping 잘 돼고), 메뉴 아키텍쳐도 잘 구분되어 있는 느낌이다.

그리고 아래 서울대학교에 비해, 더 메뉴 텍스트가 눈에 잘 들어온다.

한양대학교는 흰 배경에 채도가 짙은 파란색과 짙은 회색을 사용한 것에 비해, 서울대학교의 메뉴 색 사용은 이와 대조된다.

### 서울대학교 좌측 Nav

![](https://velog.velcdn.com/images/a87380/post/89251fda-24d0-492d-9bf5-1f3d2f2c8316/image.png)

서울대학교의 좌측 Nav는 참신한 인상을 준다.

좌측에 Nav가 있다고해서, 메뉴 위치와 구조가 난해한 것은 절대 아니다.

하지만 하필 텍스트 색상도 배경과 구분되지 않는 색을 사용해서, 한양대 홈페이지에 비해 눈에 확 들어오는 Nav라는 인상을 주지는 않는다.

### 국민대학교 상단 Nav (화면 전체 차지)

국민대학교는 서울대와 한양대 홈페이지를 섞어놓은 것 같아서 또 인상깊다.

Nav 위치는 한양대와 마찬가지로 상단에 있지만 (메뉴를 클릭하면 화면 전체를 차지함), 좌측에 부가서비스를 위한 사이드바가 있다. (그림 아이콘이 정부 24를 연상케한다.)

![](https://velog.velcdn.com/images/a87380/post/639ab8d1-fbd1-4fc4-94d3-5ba5d399ea28/image.png)

![](https://velog.velcdn.com/images/a87380/post/d6d108d4-2343-4cda-a17b-57f5eefccee9/image.png)

---

# Contents

해외 사이트일수록 도전적인? Animation이 많이 들어간 스타일의 디자인이 있다.
하버드의 경우 유독 사진도 많고, css animation도 많이 걸려있다.
처음엔 시각요소가 많아서 재밌었지만, 자주 방문하게 될 학생 입장에서는 난잡하다고 느낄수도 있겠다는 생각이 들었다.
그리고, 바로 띄울 수 있는것을 거의 다 딜레이를 걸어놨기 때문에 이러한 부분이 UX를 헤칠 수도 있겠다는 생각이 들었다.

![](https://velog.velcdn.com/images/a87380/post/c1c0fa41-5146-49c1-bb82-cc8c606a8e3c/image.gif)
