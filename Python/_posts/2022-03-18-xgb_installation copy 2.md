---
title: Apple M1에서 XgBoost 설치하기
author: Jae
categories: [Python]
tags: [파이썬, xgboost, mac]
---

작년 회사에 입사하면서 노트북을 구매해주겠다고 해서 당시 출시됐던 Apple M1를 구매해서 1년째 잘 사용하고 있습니다.

M1에서 자체적인 칩을 사용하면서 뭔가 내부적으로 혁신적인 변화가 일어난것같은데, 그만큼 자잘한 오류들도 많았습니다.

윈도우에서 사용하던 파이썬 라이브러리를 똑같이 설치해서 사용하려는데 numpy, xgboost 등 설치 안되는 라이브러리가 많아서 다 stackoverflow에서 편법으로 설치했습니다.

다른 프로젝트를 하게 되면서 가상환경을 새로 만들고 설치하려는데 그때 했던 방법으로 안되더라고요. 그 당시에는 아마 아래 두 링크를 참고했던 것 같습니다.

[Error when importing XGBoost on Apple M1?](https://stackoverflow.com/questions/65752489/error-when-importing-xgboost-on-apple-m1)

[How to install xgboost in python on MacOS?](https://stackoverflow.com/questions/39315156/how-to-install-xgboost-in-python-on-macos)

설치는 되는데 실행하면 아래와 같은 오류가 뜹니다. 이거에 대한 해결방안으로 libomp를 설치하고 올바른 폴더로 심볼릭 링크를 이어주는 등 다 해봤는데 그래도 안됐습니다.

```python
xgboost.core.XGBoostError: XGBoost Library (libxgboost.dylib) could not be loaded.
Likely causes:
  * OpenMP runtime is not installed (vcomp140.dll or libgomp-1.dll for Windows, libomp.dylib for Mac OSX, libgomp.so for Linux and other UNIX-like OSes). Mac OSX users: Run `brew install libomp` to install OpenMP runtime.
  * You are running 32-bit Python on a 64-bit OS
Error message(s): ['dlopen(/usr/local/lib/python3.7/site-packages/xgboost/lib/libxgboost.dylib, 6): Library not loaded: /usr/local/opt/libomp/lib/libomp.dylib\n  Referenced from: /usr/local/lib/python3.7/site-packages/xgboost/lib/libxgboost.dylib\n  Reason: no suitable image found.  Did find:\n\t/usr/local/opt/libomp/lib/libomp.dylib: mach-o, but wrong architecture\n\t/opt/homebrew/Cellar/libomp/13.0.1/lib/libomp.dylib: mach-o, but wrong architecture']
```

그래서 디깅한 끝에 작동되는 방법을 찾았습니다.

이분이 정리한거를 따라하니까 되더라고요.

[About various problems encountered by MacBook Pro running XGBoost](https://programmer.group/about-various-problems-encountered-by-macbook-pro-running-xgboost.html)

위 링크 들어가서 step by step으로 따라해봐도 되지만, 밑에 내용 정리해드리겠습니다.

# 설치과정

### Homebrew 설치

```powershell
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### Gcc-6 설치 (다른 버전도 되는 것 같음)

```powershell
brew install gcc --without-multili
```

### llvm, clang-omp 설치 (저는 이 2개는 설치 안해줬는데 작동하더라고요, 안되면 이 둘도 설치해보시기 바랍니다.)

```powershell
brew install llvm
brew install clang-omp
```

### Xgboost Clone 후 설치

```powershell
git clone --recursive https://github.com/dmlc/xgboost
cd xgboost; cp make/config.mk ./config.mk; make -j4
cd python-package; sudo python setup.py install
```

사실 어떤 원리로 작동 안되고, 작동 되는건지는 모르겠습니다.

전 cmake이랑 gcc도 이번에 삽질하면서 처음 접했습니다.

이 부분은 여기 나왔던것들 공부해보려고 합니다.
