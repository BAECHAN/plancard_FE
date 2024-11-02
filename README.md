### 초기세팅

### Vite 프로젝트 생성

```
npm create vite@latest my-fsd-project -- --template react-ts
cd my-fsd-project
```

### 의존성 설치

```
npm install
```

### 디렉토리 구조를 FSD로 세팅 ( 작업하면서 수정 중 - 아래는 임시 구조 )

```
src/
├── app/
│   └── index.tsx
├── entities/
│   └── user/
├── features/
│   └── auth/
├── shared/
│   ├── api/
│   ├── components/
│   └── lib/
├── pages/
│   ├── home/
│   ├── about/
│   └── index.tsx

```

### ESLint 및 Prettier 설정

#### ESLint 설치

```
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react --save-dev
```

#### Prettier 설치

```
npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

### React Router 설치

```
npm install react-router-dom
```

### FSD 용 Import 적용

#### 적용 코드

```tsx
import { MainPage } from 'pages/main';
//import { MainPage } from './pages/main/ui/Page/index';
// './pages/main/ui/Page/index' 모듈 또는 해당 형식 선언을 찾을 수 없습니다.ts(2307)
```

### Tailwindcss 적용

- https://tailwindcss.com/docs/guides/create-react-app

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### Import Sorting 처리

```
npm install --save-dev prettier prettier-plugin-organize-imports
```

### Husky + lint-staged 설정

#### Husky

Husky는 Git 훅을 쉽게 관리하고 실행할 수 있게 해주는 도구입니다. Git 훅은 특정 Git 이벤트가 발생할 때 자동으로 실행되는 스크립트입니다. 예를 들어, 커밋하기 전에 코드 린터를 실행하거나, 푸시하기 전에 테스트를 실행하는 등의 작업을 수행할 수 있습니다.

##### 주요 특징

- 간편한 설정: Git 훅을 쉽게 설정하고 관리할 수 있습니다.
- 다양한 훅 지원: pre-commit, pre-push, commit-msg 등 다양한 Git 훅을 지원합니다.
- 자동 실행: 특정 이벤트가 발생할 때 자동으로 스크립트를 실행합니다.

#### lint-staged

lint-staged는 Git의 스테이징 영역에 있는 파일에 대해서만 린팅(Linting)이나 포맷팅을 수행하는 도구입니다. 이를 통해 커밋 시점에서 코드 품질을 유지하면서 전체 프로젝트에 대해 린터를 실행하지 않아도 됩니다.

##### 주요 특징

- 빠른 성능: 변경된 파일에 대해서만 린터를 실행하므로 빠른 성능을 제공합니다.
- 다양한 작업 지원: 린팅 외에도 포맷팅, 테스트 실행 등 다양한 작업을 수행할 수 있습니다.
- 간편한 설정: 간단한 설정으로 다양한 파일 형식에 대해 작업을 설정할 수 있습니다.

Husky와 lint-staged를 조합하여 git commit 전에 linting에 실패할 경우 commit 되지 않도록 처리한다.

##### 요약

Husky: Git 훅을 관리하고 실행하는 도구로, 특정 Git 이벤트가 발생할 때 자동으로 스크립트를 실행합니다.
lint-staged: 스테이징된 파일에 대해 린팅 및 기타 작업을 수행하는 도구로, 커밋 시점에서 코드 품질을 유지합니다.

이 두 도구를 함께 사용하면, 개발 워크플로우에서 자동으로 코드 린팅과 포맷팅을 수행하여 코드 품질과 일관성을 보장할 수 있습니다.

아래는 실행 명령어로 Husky와 lint-staged 패키지를 추가하고, 필요한 환경 파일을 추가로 만들어준다.

```
npx mrm lint-staged
```

### Shadcn-ui

Shadcn은 UI 라이브러리로, Tailwind CSS와 React를 사용하여 스타일링 및 컴포넌트 개발을 쉽게 할 수 있도록 도와줍니다. Tailwind CSS의 유틸리티 클래스와 함께 사용하는 컴포넌트 모음을 제공하여, 사용자 인터페이스를 빠르고 일관성 있게 구축할 수 있도록 지원합니다.

#### 공식문서

- https://ui.shadcn.com/docs/installation/vite

1. Shadcn-ui를 적용해주는데 기존 tailwindcss가 적용이 안되서 확인해보니 components.json ( shadcn config 파일 )에서 prefix로 특정 접두사를 쓰다보니 tailwind가 적용이 되지 않았었습니다.

before - "prefix": 'false'

after - "prefix": ""

before일때 falseflex, falsebg-gray-100 이런식으로 말그대로 prefix로 false가 붙어야만 Tailwind가 적용되도록 변경되어있어서 after와 같이 적용 후 기존 shadcn에서 falseflex와 같이 되어있던부분들을 제거

2. shadcn-ui에서 컴포넌트를 추가하는 경우 기존 lint 설정한 옵션들과 맞지 않아 수정

- className is missing in props validation react/prop-types lint

해결방법 : eslintrc파일에 rule 수정

```js
// .eslintrc.cjs
module.exports = {
  // 기존 설정...
  rules: {
    // 기존 규칙...
    'react/prop-types': 'off',
  },
};
```

3. import 해올 때 절대경로를 못읽어와서 환경파일을 몇몇개 수정하였음

- tsconfig.app.json 에서 path와

### import 설정

- 절대경로 '@/entities/~' 이런식으로만 import해올 수 있도록 lint 설정
- import해올 떄 index.tsx파일로만 import 해올 수 있도록 ( 원본파일에 직접 import 해올 수 없게 막음 ) lint 설정
- import해올 때 확장자 생략 가능

#### 사용한 라이브러리

```bash
  "eslint-import-resolver-alias": "^1.1.2",
  "eslint-plugin-import": "^2.29.1",
```

```js
// .eslintrc.cjs
module.exports = {
  // 기존 설정...
  rules: {
    // 기존 규칙...
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ], // 라이브러리 패키지는 제외하고 import문에 확장자 없을 시 에러. 에러시 수동수정 필요 (TypeScript에서는 확장자 붙이는 것을 권장)

    'no-restricted-imports': [
      'error',
      {
        paths: [],
        patterns: [
          {
            group: [
              '@/shared/lib/shadcn-ui/components/ui/*',
              '!@/shared/lib/shadcn-ui/components/ui/index',

              '@/entities/**/*.{ts,tsx}',
              '!@/entities/**/index.{ts,tsx}',

              '@/features/**/*.{ts,tsx}',
              '!@/features/**/index.{ts,tsx}',

              '@/widgets/**/*.{ts,tsx}',
              '!@/widgets/**/index.{ts,tsx}',

              '@/pages/**/*.{ts,tsx}',
              '!@/pages/**/index.{ts,tsx}',
            ],
            message: 'Please import from the index.ts file in the ui folder.',
          },
        ],
      },
    ], // import 해올 수 있는 파일을 index.tsx ( Barrel ) 파일로 한정시켜 export 관리에 용이하게 처리함
  },
};
```

### FSD폴더 구조 변경

index.ts파일로만 import해올 수 있으며,
다른 컴포넌트 파일들은 LoginForm/index.tsx -> LoginForm.tsx 파일로 명명하여 검색에 용이하게 수정하고, 폴더 구조를 단순화 시킴

### 선택사항

#### settings.json파일 추가

git에는 안올라가기 때문에 필요하시면 따로 드리겠습니다.

제 경우 아래와 같이 적용

- 인텔리센스에서 추천항목 일부 제외
- import 상대경로 안쓰기
-

#### Extension

- Tailwind CSS IntelliSense ( tailwind class 인텔리센스 추천 )

### import 설정2

A라는 경로에서 B 경로를 import 해올 수 없게 하도록 처리하려고함. ( FSD 아키텍처에서는 하위 Layer가 상위 Layer를 import 해오지 못하게 구성해야됨 )

```js
// .eslintrc.cjs
module.exports = {
  // 기존 설정...
  rules: {
    ..., // 기존 규칙

    'import/no-restricted-paths': [
      'error',
      {
        zones: [
          {
            target: './src/shared',
            from: [
              './src/entities',
              './src/features',
              './src/widgets',
              './src/pages',
              './src/processes',
              './src/app',
            ],
          },
          {
            target: './src/entities',
            from: [
              './src/features',
              './src/widgets',
              './src/pages',
              './src/processes',
              './src/app',
            ],
          },
          {
            target: './src/features',
            from: [
              './src/widgets',
              './src/pages',
              './src/processes',
              './src/app',
            ],
          },
          {
            target: './src/widgets',
            from: ['./src/pages', './src/processes', './src/app'],
          },
          {
            target: './src/pages',
            from: ['./src/processes', './src/app'],
          },
          {
            target: './src/processes',
            from: ['./src/app'],
          },
        ],
      },
    ], // target에서 from으로부터 import해올 수 없도록 함
  },
};
```

### TanstackQuery + Recoil 추가

```bash
npm install @tanstack/react-query recoil
```

```bash
npm install --save-dev @types/react-query @types/recoil
```

### Axios

axios 인스턴스를 생성해서 한번에 관리하자.
axios.create

### TanstackQuery DevTools 라이브러리 추가

```bash
npm install react-query react-query-devtools
```

```tsx
// app/index.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
  </QueryClientProvider>,
);
```

env파일로 환경에 따라 ReactQueryDevtools의 initialIsOpen 속성을 바꿔줘야함

### env파일 생성 및 gitIgnore에서 제외

vite-app이라 REACT*APP*으로 환경변수를 접두사를 하지않고 VITE\_로 함

### axios로 임의 로컬 서버 API 연결 테스트

1. 아래와 같이 서버 index.js를 아래 코드와 같이 입력 후 서버 실행

```js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const port = 5174;
const preUrl = '/api';
const ACCESS_TOKEN_SECRET = 'youraccesstokensecret';
const REFRESH_TOKEN_SECRET = 'yourrefreshtokensecret';

// 가짜 게시판 데이터
const fakeBoards = [
  {
    id: 1,
    title: 'First Board',
    content: 'This is the first board content',
    author: 'Author1',
    createdAt: new Date(),
  },
  {
    id: 2,
    title: 'Second Board',
    content: 'This is the second board content',
    author: 'Author2',
    createdAt: new Date(),
  },
  // 필요한 만큼 가짜 데이터를 추가하십시오.
];

app.use(
  cors({
    origin: 'http://localhost:5173', // React 개발 서버 도메인
    credentials: true, // 자격 증명 허용
  }),
);
app.use(cookieParser());
app.use(bodyParser.json());

let refreshTokens = [];

app.post(`${preUrl}/login`, (req, res) => {
  const { email, password } = req.body;

  // 간단한 로그인 로직 (실제 프로젝트에서는 데이터베이스와 비교해야 합니다)
  if (email === 'test@example.com' && password === 'test1234') {
    const user = { name: email };

    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken);

    //res.cookie("accessToken", accessToken, { httpOnly: true, secure: true });
    res.cookie('accessToken', accessToken, { httpOnly: true }); // 개발 서버라 SSL이 아니라서 secure 옵션을 주면 안됨
    return res.json({
      success: true,
      message: 'Login successful!',
      refreshToken,
    });
  } else {
    return res
      .status(401)
      .json({ success: false, message: 'Invalid email or password' });
  }
});

app.post(`${preUrl}/token`, (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null)
    return res.sendStatus(401).json({ message: 'No token provided' });
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err)
      return res.sendStatus(403).json({ message: 'Invalid or expired token' });
    const accessToken = generateAccessToken({ name: user.name });
    //res.cookie("accessToken", accessToken, { httpOnly: true, secure: true });
    res.cookie('accessToken', accessToken, { httpOnly: true }); // 개발 서버라 SSL이 아니라서 secure 옵션을 주면 안됨
    res.json({ accessToken });
  });
});

app.post(`${preUrl}/logout`, (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter(token => token !== refreshToken);
  res.clearCookie('accessToken');
  res.sendStatus(204);
});

app.get(`${preUrl}/board`, authenticateToken, (req, res) => {
  res.json(fakeBoards);
});

function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
}

function authenticateToken(req, res, next) {
  const token = req.cookies.accessToken;
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

2. 로컬 서버로 api 통신을 위해 axiosInstance에서 baseUrl과 withCredentials 설정해주고, 서버로 api 요청 시 /api를 붙여서 보냄

```ts
// src/api/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api`, // 로컬 개발 서버의 기본 URL
  withCredentials: true, // 쿠키와 함께 요청을 보냄
});

export default axiosInstance;
```

3. package.json에서 proxy 설정 ( 필수는 아니고 production 환경에선 안되는 것으로 암)

```json
{
 ...,
 "proxy": "http://localhost:5174"
}
```

4. axios로 api 통신 테스트

```ts
try {
  const response = await axiosInstance.post('/login', { ...data });
  alert(`Login successful! Token: ${response.data.token}`);
} catch (error) {
  alert('Login failed: Invalid credentials');
}
```

#### axiosInstance + jwt 프로세스 설명

accessToken - 쿠키에 저장하나, httpOnly라서 Client에서 접근 불가
refreshToken - indexedDB에 저장하여, accessToken이 없으면 refreshToken을 담아서 accessToken을 가져오도록 서버에 요청하는 역할

1. 로그인 성공 시 accessToken과 refreshToken을 발급하여 각각 쿠키와 indexedDB에 저장
2. API요청할때마다 cookie에 있는 accessToken을 담아서 ( httpOnly: true라 항상 담아서 보냄 ) 요청함

   2-1. 만약 accessToken이 없다면, 서버에서 401로 반환해줌.

   2-2. 클라이언트에서 서버로부터 401로 받으면, retry하여 indexedDB에서 refreshToken을 꺼내서 accessToken을 API 호출하여 서버로부터 다시 가져옴

   2-3. accessToken을 가져오면 다시 retry 하여 API 요청

3. 로그아웃하면 accessToken, refreshToken 모두 소멸

### react-modal

https://www.npmjs.com/package/react-modal

#### 시작

1. 패키지 설치

```bash
npm i react-modal
npm i @types/react-modal
```

2. tsconfig.json 에서 allowSyntheticDefaultImports 플래그 설정

```bash
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    // 다른 설정들...
  }
}
```

3. ModalComponent.tsx - 모달컴포넌트 생성

```tsx
import * as ReactModal from 'react-modal';

ReactModal.setAppElement('#root'); // 모달이 열린 상태에서도 접근성을 보장하기 위해 필요합니다.
```

#### Storybook에서 React-Modal 사용하려하니 에러가 나서 수정

```tsx
import Modal from 'react-modal';

// Modal.setAppElement('#root'); // 해당 코드 제거
```

#### tip

- 만일 여기서 모달창 밖 부분을 클릭해서 꺼지는 걸 멈추고 싶을땐 shouldCloseOnOverlayClick={false} 속성값을 또 추가한다면 오버레이부분의 클릭으로 인한 꺼짐을 막을 수 있다.

### useMutation 적용

```tsx
const useUpdateUserMutation = () => {
  return useMutation({
    mutationFn: (userForm: UserInfo) => {
      return updateUser(userForm);
    },
    onSuccess: () => {
      // Do something on success
      queryClient.invalidateQueries({ queryKey: [queryKeys.userList] }); // queryKey로 userList 초기화
    },
  });
};

const { mutate: updateUserMutate } = useUpdateUserMutation(); // alias 처리

updateUserMutate({ ...data, id: userInfo.id }); // useForm에 id가 없어서 key를 추가
```

### api 이름은 create / update / get / delete로

### storybook 추가 - 기존 코드 활용

#### 시작

1. storybook 추가

```bash
npx storybook@latest init
```

2. 추가적으로 필요한 라이브러리 추가

```bash
npm install @storybook/addon-docs
npm install @storybook/builder-vite @storybook/addon-essentials --save-dev
```

### 폰트 추가

```bash
 npm install @fontsource/noto-sans-kr
```

### Shadcn/ui를 storybook에서 사용할 수 있도록

tailwind 기반인 Shadcn/ui를 storybook에서 사용할 수 있도록 설정을 추가합니다.

아래의 방법은 Shadcn/ui뿐만아니라 tailwind 적용하는 방법이기도 함

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}' // 해당 라인 추가 : Storybook 폴더도 Tailwind에서 인식되게 설정
  ],
```

```css
// app/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```ts
// .storybook/preview.ts

import type { Preview } from '@storybook/react';
import '@/app/index.css'; // tailwind 전역 선언한 index.css파일을 호출함

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' }, // 해당 라인 추가
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
```

### react-icons 라이브러리 추가

```bash
npm install react-icons
```

공식문서 : https://react-icons.github.io/react-icons/search/#q=plus

### flagIcon이 필요하여 아래 사이트 참고

svg파일 cdn으로 가져오는 중

- https://kr.freepik.com/free-vector/flags-world-collection_837815.htm#fromView=keyword&page=1&position=2&uuid=b9b26ff4-3808-4ed0-8ef7-a0ebbd46de46
- https://flagcdn.com/gr.svg

### Swiper 라이브러리 추가

```bash
npm install Swiper
```

### UI 및 스토리북 폴더명을 대문자 -> 소문자로 변경하였으나 git에서 인지를 못하여 아래와 같이 실행

```bash
git config core.ignorecase false
```

### react-spinners

- www.davidhu.io/react-spinners/

```tsx
import SyncLoader from 'react-spinners/SyncLoader';

const override: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70%',
};

const Loading = () => {
  return (
    <SyncLoader
      color={'#3498db'}
      loading={true}
      cssOverride={override}
      size={15}
    />
  );
};

export default Loading;
```

### react-transition-group

```bash
npm install @types/react-transition-group
```

### 폴더 및 파일 네임컨벤션

- 폴더 : 카멜케이스
- 컴포넌트 파일 : 파스칼케이스
- 일반 파일 : 카멜케이스

### github-pages로 임시 배포

- 백엔드 개발자를 위해 서버 환경 구축 전에 임시로 사용

#### 1단계: GitHub 저장소 생성

1. **GitHub에 로그인**하고 [새 저장소 생성 페이지](https://github.com/new)로 이동합니다.
2. 프로젝트 이름을 입력하고, **공개 저장소**로 설정한 후 **Create repository** 버튼을 클릭합니다.
3. 생성한 저장소의 URL을 복사해 둡니다. 예를 들어, `https://github.com/username/repository-name`입니다.

#### 2단계: 로컬 프로젝트와 GitHub 저장소 연결

1. **터미널을 열고 프로젝트 폴더로 이동**합니다. 예를 들어:
   ```bash
   cd path/to/your-project
   ```

2. **Git 초기화 및 원격 저장소 연결**:
   ```bash
   git init
   git remote add origin https://github.com/username/repository-name.git
   ```

3. **프로젝트 커밋 및 푸시**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```
   이 명령어로 `main` 브랜치에 프로젝트 코드를 푸시합니다.

#### 3단계: `gh-pages` 패키지 설치

GitHub Pages에 배포하기 위해 `gh-pages` 패키지를 사용합니다.

1. **`gh-pages` 설치**:
   ```bash
   npm install --save gh-pages
   ```
   
2. **`package.json` 설정 업데이트**:
   `package.json` 파일에 GitHub Pages 배포를 위한 설정을 추가합니다.

   ```json
   {
     "homepage": "https://username.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```
   - `homepage`: `https://<GitHub-username>.github.io/<repository-name>` 형식으로 설정하세요.
   - `predeploy`: `npm run build`를 실행해 배포 전에 빌드를 진행합니다.
   - `deploy`: `gh-pages -d build` 명령어로 `build` 폴더를 `gh-pages` 브랜치에 배포합니다.

3. **변경 사항 커밋 및 푸시**:
   ```bash
   git add package.json
   git commit -m "Add gh-pages configuration"
   git push
   ```

#### 4단계: `gh-pages` 브랜치로 배포

`gh-pages` 브랜치에 배포하려면 `deploy` 스크립트를 실행합니다.

```bash
npm run deploy
```

이 명령어는 `gh-pages` 브랜치를 생성하고, `build` 폴더의 내용을 해당 브랜치로 푸시합니다. 이제 GitHub Pages가 `gh-pages` 브랜치를 통해 사이트를 제공하게 됩니다.

#### 5단계: GitHub Pages 설정 확인

1. GitHub 저장소 페이지로 이동하여 **Settings** 탭을 클릭합니다.
2. 왼쪽 메뉴에서 **Pages** 항목을 클릭합니다.
3. **Source** 항목에서 `gh-pages` 브랜치가 선택되어 있는지 확인합니다.
4. URL이 `https://username.github.io/repository-name` 형태로 표시되면, 클릭하여 배포된 사이트가 정상적으로 작동하는지 확인합니다.

#### 6단계: 변경사항 업데이트 (필요할 때)

앱에 변경 사항이 생기면 다시 `npm run deploy` 명령어를 실행하여 배포할 수 있습니다.

```bash
npm run deploy
```

이 명령어로 새 빌드를 `gh-pages` 브랜치에 푸시하고, 변경된 내용이 GitHub Pages에 자동으로 반영됩니다.

### 해야할 것

1. query와 api 위치 나 코드를 결합할지 고민
2. useQuery 더 학습 및 캡슐화
3. 폴더 위치 및 type, model 등 어떻게 할 것 인지 고민
