---
title: Python 가상환경 관련 (feat. Jupyter)
author: Jae
categories: [Python]
tags: [파이썬, 가상환경, jupyter]
---

## 가상환경 생성

```powershell
//python3 -m venv (가상환경이름)
python3 -m venv newEnv
```

## 가상환경 활성화

```powershell
source bin/activate
```

## 가상환경 활성화 하고 ipykernel 설치

```powershell
pip3 install ipykernel
```

ipykernel 설치 시 아래 오류가 뜨면

```powershell
ERROR: Could not build wheels for pyzmq which use PEP 517 and cannot be installed directly
```

**해결책**

```powershell
pip install --upgrade pip setuptools wheel
pip install opencv-python
```

## Jupyter Notebook에 설치된 가상환경 추가 (가상환경 활성화 이후)

```python
python3 -m ipykernel install --user --name 가상환경이름 --display-name "보여질 이름"
```

이 명령어를 치면 Installed되었다고 뜨고, Jupyter 서버를 재실행하면 kernel에 추가되어 있음

## Jupyter Notebook에 가상환경 제거

```python
jupyter kernelspec uninstall 가상환경이름
```

## 가상환경 설정한 디렉토리를 이동했을 시

파이썬에서 가상 환경을 생성할 때 이미 해당 경로가 가상환경 폴더 안에 입력되기 때문에, 생성 뒤 폴더를 다른 곳으로 이동시키면 가상환경 경로가 저절로 갱신되지 않음

그래서 경로를 옮긴 상태에서 가상환경을 활성화하더라도, 패키지를 설치하면 Global하게 설치됨.

이를 해결하려면 , 가상환경 폴더의 **Scripts** 폴더 아래에 있는 **activate.bat, Activate.ps1, activate** 세개의 파일을 수정해야 함

파일들 안에 `VIRTUAL\_ENV`라는 부분이 있는데,  해당 부분을 옮긴 경로로 수정하면 정상적으로 구동이 가능하다.
