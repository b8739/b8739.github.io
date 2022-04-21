---
title: Elastic Beanstalk 여러 환경 관리
author: Jae
categories: [AWS]
tags: [aws, elastic beanstalk]
---

사용하는 패키지도 같고 구현하려는 것도 거의 흡사한데, 약간 변형해서 별도의 어플리케이션으로 별도할 일이 있었다.

그래서 git으로 branch로 나눠서 따로 개발을 하고, 이제 배포도 따로 하려고 알아보니 elastic beanstalk는 어플리케이션당 별도의 eb instance를 사용하기 때문에 동시에 서비스하려면 각각의 eb 어플리케이션과 환경을 만들어야 한다고 한다.

아무래도 사용하는 패키지나 기타 등등 다 같기 때문에 지금처럼 branch만 달리해서 개발하는게 좋을 것 같은데, 그러면 동일한 디렉토리에서 어떻게 eb 환경을 구분해야 할지 몰랐다.

Elastic Beanstalk에서 Multiple Environment를 구성하는 방법이 나와있는데 여기 나와있는 명령어를 입력하면 아무 반응이 없다...

```python
eb init --modules componentA componentB
```

[EB CLI를 사용하여 여러 Elastic Beanstalk 환경을 하나의 그룹으로 관리](https://docs.aws.amazon.com/ko_kr/elasticbeanstalk/latest/dg/ebcli-compose.html)

결국 기존의 .elasticbeanstalk의 이름을 벡업하기 위해서 이름을 변경해두고, 새로 eb init을 하고 eb create을 했다.

또 의아한 점 하나는, AWS 웹 사이트에서 어플리케이션을 만들어뒀었다면, eb init할 때 그 어플리케이션을 동기화할거냐고 물어보는데, 웹 사이트에서 만들어뒀던 환경을 동기화 할 방법이 있는지는 모르겠다. (eb create를 하면 아예 새로 환경을 만들어버린다.)

첫 elastic beanstalk 어플리케이션과 환경을 만들때는 웹 사이트에서 eb create을 만들었어서 이를 생략하고 바로 eb deploy를 했는데, 이번엔 새로운 환경에 배포하려면 어떻게 해야할지 따로 옵션이 안주어져서 난감했다..

### 일단 계획은 다음과 같았다.

1. 기존 .elasticbeanstalk 이름 변경 (벡업)
2. eb init (codecommit 사용한다고 선택)
3. AWS 웹사이트에서 codecommit Repo 생성
   - codecommit HTTPS username이랑 password 다시 입력하라고 할거임
4. git branch로 관리하던 코드 이 repo에 push (2번에서 사용한다고 한 branch로 push해야 함)
5. eb create (환경이 생성되고 codecommit에 있는 코드가 배포됨, codecommit을 사용한다고 설정했는데 만약 리포에 push되어있는 코드가 없으면 다음과 같은 에러가 남)

```python
ERROR: InvalidParameterValueError - "Error making request to CodeCommit: Could not retrieve 04b69a00b82806e34b00024c8a3a43282c45a869 (Service: AWSCodeCommit; Status Code: 400; Error Code: CommitIdDoesNotExistException; Request ID: 92bc4c60-a052-47bb-9230-bb5e40a6ddcd; Proxy: null)"
```

이렇게 했다가 어떤 과정에서 에러가 났었는데, 생성했던 리포랑 환경 삭제하고 다시 하니까 왜인지 정상적으로 배포되었다... 뭐가 문제인지는 모르지만 어딘가에서 꼬였던 것 같다.

그래서 기존 환경을 사용하려면 이름 변경했던 .elasticbeanstalk 폴더 이름을 다시 원래대로 바꾸고, 새로운 환경 .elasticbeanstalk 폴더는 다른 이름으로 변경해주어야 한다.

더 편할 방법이 있을 것 같기는 한데... 일단 이게 최선인 것 같다.
