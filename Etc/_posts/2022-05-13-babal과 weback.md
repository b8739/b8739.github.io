---
title: React babal과 weback, 그리고 create-react-app
author: Jae
categories: [Etc]
tags: [Babel, Webpack]
---

인프런 **_파이썬/장고 웹서비스 개발 완벽 가이드 with 리액트_** 강의를 보고 정리한 내용입니다.

---

# babel/webpack의 역할에 대한 간단한 이해

create react-app 명령어에 포함되어 있음

# Babel

`목적`: Transpiling: 상위 버전의 자바스크립트로 작성된 코드를 하위 버전으로 변경해주는것

## 다양한 babel preset

babel-preset-es2015:es6

babel-preset-es2016:es7

babel-preset-es2017:es8

babel-preset-env

- 디폴트 동작으로 ES6 이상의 preset을 적용하여, ES6로 transpilling
- 개별 지정보다 본 preset을 권장

---

# Webpack (module bundler)

**javascript, jsx, css, sass, ess, es6, 이미지, HTML, 폰트 등 거의 모든 것이 모듈이 될 수 있으며, 하나의 파일 (bundle)로 묶을 수 있다.**

모듈성과 네트워크 성능 향상

### Features

- 코드를 필요할 때 로딩 가능
- Minifying: 불필요한 코드, 공백/줄바꿈, 긴 이름 등을 줄여, 파일 크기 줄이기
- HMR (Hot module replacement): 개발모드에서 원본 소스코드 변경을 감지하여, 변경된 모듈만 즉시 갱신

### 지원 Loaders

- babel-loader: ES6나 리액트코드를 transpilling
- css-loader: 설정에 따라 postcss-loader를 추가로 설정. css를 HTML내에서 link엘리먼트를 포함할 필요 없이 js/jsx단에서 임포트하여 React 컴포넌트에 즉시 적용 가능

---

# create-react-app

webpack, babel,eslint 등의 기본 설정이 된 리액트 프로젝트 생성

```javascript
yarn global add create-react-app
```

react 앱 실행 (package.json에서 명령어 변경 가능)

```javascript
yarn start
```

---

# 상대경로 import를 절대경로로 지정하기

다음 내용을 작성: jsconfig.json

```javascript
//jsconfig.json
{
	"compileOptions":{
		"baseUrl": "src"
	}
	"include":["src"]
}
```
