# Firebase Boilerplate

Firebase 기반 어플리케이션 구현
- Express
- webpack
- handlebars template

## Table of Contents

## Installation
```sh
# Firebase CLI 설치
npm install -g firebase-tools

# Google 계정으로 로그인
firebase login

# Firebase Functions folder
cd functions

# Set node_modules
npm install
```

## Usage

Set Firebase project `.firebaserc`
```json
{
  "projects": {
    "default": "your-firebase-project-name"
  }
}
```

Local server `functions/package.json` 참조
```sh
cd functions

npm run dev
```

Firebase deploy `functions/package.json` 참조
```sh
cd functions

npm run deploy
```
