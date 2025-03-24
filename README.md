### 배포

https://baechan.github.io/plancard_FE/#/cards/my

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

3. App.tsx에 #root 경로로 Modal 세팅

```tsx
import Modal from 'react-modal';

Modal.setAppElement('#root'); // 모달이 열린 상태에서도 접근성을 보장하기 위해 필요합니다.
```

#### Storybook에서 React-Modal 사용하려하니 에러가 나서 Preview.ts파일에 #root가 아닌 #storybook-root로 수정

```ts
// Preview.ts
import Modal from 'react-modal';

Modal.setAppElement('#storybook-root');
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
       "deploy": "gh-pages -d dist"
     }
   }
   ```

   - `homepage`: `https://<GitHub-username>.github.io/<repository-name>` 형식으로 설정하세요.
   - `predeploy`: `npm run build`를 실행해 배포 전에 빌드를 진행합니다.
   - `deploy`: `gh-pages -d dist` 명령어로 `build` 폴더를 `gh-pages` 브랜치에 배포합니다.

3. **`vite.config.ts` 설정 업데이트**:
   `vite.config.ts` 파일에 GitHub Pages 배포를 위한 설정을 추가합니다.

   ```ts
   export default defineConfig({
     plugins: [react()],
     base: '',
     resolve: {
       alias: {
         '@': path.resolve(__dirname, './src'),
       },
     },
   });
   ```

   - `base`: ``로 설정

4. **변경 사항 커밋 및 푸시**:
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

이 명령어는 `gh-pages` 브랜치를 생성하고, `dist` 폴더의 내용을 해당 브랜치로 푸시합니다. 이제 GitHub Pages가 `gh-pages` 브랜치를 통해 사이트를 제공하게 됩니다.

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

### Github Pages & Github Actions 연동

1. Local - .github/workflows/main.yml 파일 추가 ( 코드는 앱에서 확인 )
2. Github - Settings/Pages/Build and deployment
   Source - Deploy from a branch -> Github Actions로 변경

### HashRouter로 변경

#### BrowserRouter vs HashRouter

1. BrowserRouter

- 동작 방식: BrowserRouter는 HTML5의 History API를 사용하여 URL을 관리합니다. 이 방식은 실제 URL 경로를 변경하며, 페이지 이동 시 전체 페이지를 다시 로드하지 않고도 애플리케이션 상태를 유지합니다.
- URL 형식: URL이 깔끔하며 해시 기호(#)가 없습니다. 예: https://example.com/about
- 서버 설정 필요: 브라우저가 특정 URL에 직접 접근하거나 새로 고침할 때 서버가 해당 경로에 대한 요청을 처리해야 합니다. 이를 위해 서버는 모든 요청에 대해 index.html을 반환하도록 설정되어야 합니다.

2. HashRouter

- 동작 방식: HashRouter는 URL의 해시 부분(예: # 이후의 문자열)을 사용하여 라우팅을 관리합니다. 해시 변경은 브라우저의 기본 동작으로 서버에 요청을 보내지 않습니다.
- URL 형식: URL에 해시 기호(#)가 포함됩니다. 예: https://example.com/#/about
- 서버 설정 불필요: 해시 부분은 서버에 전달되지 않으므로, 서버는 항상 index.html을 반환하면 됩니다. 따라서 추가적인 서버 설정이 필요 없습니다.

### SearchInputText 공통 컴포넌트 개선

- normalize 추가
- encodeURIComponent 추가
- debounce 적용
- 부모컴포넌트에서 ref로 접근할 수 있도록 useImperativeHandle 추가
- 초기값 받을 수 있도록 initialValue 추가

### Client State library 변경

recoil 업데이트가 안되고 있다는 것을 알고 있었지만, zustand를 쓰고 있었는데
다시 recoil로도 써보려고 했으나 React DevTools 에서 확인이 안되어 zustand로 우회

- recoil 제거
- zustand 추가

```bash
npm install zustand
```

### github pages로 배포 시 레포지토리 이름은 나오지 않아서 경로를 못찾는 상황이 발생

BrowserRouter -> HashRouter로 변경

```tsx
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
```

### 배포하니까 public안에 있는 images 경로를 못찾고 있는 현상 발생

```tsx
// 변경 전
<image src='/images/eiffel-tower.svg'/>

// 변경 후
<image src='images/eiffel-tower.svg' />
```

### storybook/addon-onboarding이 더 이상 사용되지 않아 제거

[@storybook/addon-onboarding] It seems like you have finished the onboarding experience in Storybook! Therefore this addon is not necessary anymore and will not be loaded. You are free to remove it from your project. More info: https://github.com/storybookjs/storybook/tree/next/code/addons/onboarding#uninstalling

### favicion 추가

- https://favicon.io/favicon-generator/

```html
// index.html
<link
  rel="icon"
  href="/favicon.ico"
  type="image/x-icon"
/>
```

캐시 지우고 확인하면 보입니다.

### storybook emotion warning 관련

Storybook에서 아래와 같은 Warning 출력

> You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.

해결방법 : @emotion/react 패키지가 중복되어 main.ts를 수정

- @emotion/react 패키지 중복 체크

```bash
npm ls @emotion/react
```

- @emotion/react@11.13.3

  - @emotion/styled@11.13.0
  - @emotion/react@11.13.3 deduped

- .storybook/main.ts 파일에서 @emotion/react를 명시적으로 하나로 고정합니다.

```ts
// main.ts
import { mergeConfig } from 'vite';

...
  viteFinal: async viteConfig => {
    return mergeConfig(viteConfig, {
      resolve: {
        alias: {
          '@emotion/react': require.resolve('@emotion/react'), // Force a single instance of @emotion/react
        },
      },
    });
  },
};

```

### Swiper 맨끝으로갔다가 왼쪽버튼 클릭시 맨앞으로가는 현상이 발생하여 cssMode제거후 slidesPerGroup 추가

```tsx
<StyledSwiper
  slidesPerGroup={1}
  navigation
  pagination
  mousewheel
  keyboard
  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
  className="mySwiper"
>
```

### React.memo 사용 시 displayName을 추가해야되는 경우가 있음

```tsx
const ModalContainerCardDetail = React.memo();

...

ModalContainerCardDetail.displayName = 'ModalContainerCardDetail';

export default ModalContainerCardDetail;
```

### Warning: You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.

React 18에서 ReactDOM.render() 관련 문제가 발생하여 document.addEventListener('DOMContentLoaded')의 콜백함수로 전달하여 처리하였습니다.

- App.tsx

```tsx
// AS-IS
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);

  const isDevtoolsOpen =
    import.meta.env.VITE_IS_TANSTACK_QUERY_DEVTOOLS_OPEN === 'true';

  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={isDevtoolsOpen} />
      </QueryClientProvider>
    </React.StrictMode>,
  );
}
```

```tsx
// TO-BE
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);

    const isDevtoolsOpen =
      import.meta.env.VITE_IS_TANSTACK_QUERY_DEVTOOLS_OPEN === 'true';

    root.render(
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <App />
          </RecoilRoot>
          <ReactQueryDevtools initialIsOpen={isDevtoolsOpen} />
        </QueryClientProvider>
      </React.StrictMode>,
    );
  }
});
```

### react-toastify 라이브러리 추가

```bash
npm i react-toastify
```

나는 package.json에 바로 추가해서 쓰긴함

```json
// package.json
"react-toastify": "^10.0.4"
```

App 컴포넌트랑 같은 depth에 ToastContainer 추가해주어야함

```tsx
// App.tsx
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

<React.StrictMode>
  <App />
  <ToastContainer
    position="bottom-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
</React.StrictMode>,
```

#### Storybook에 react-toastify 적용하는 방법

- 버전 참고 ( package.json )

```json
"react-toastify": "^10.0.4"
"@types/react": "^18.3.12",
"@storybook/react": "^8.3.0",
```

- .storybook/preview.tsx ( ts가 아닌 tsx ) 17버전 이상이라 import React from 'react'가 안되서 아래와 같이 @jsxImportSource 추가

```tsx
/** @jsxImportSource react */
import type { Preview } from '@storybook/react';

// react-toastify 관련 import
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#storybook-root');

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    Story => (
      <>
        <Story />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    ),
  ],
};

export default preview;
```

- tsconfig.app.json

```json
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```

### useInput 커스텀훅에 ESC 키보드 입력 시 값 reset되도록 로직 추가

// useInput.tsx

```tsx
import { useCallback, useEffect, useRef, useState } from 'react';

const useInput = (initialValue: string = '') => {
  const [value, setValue] = useState<string>(initialValue);
  const ref = useRef<HTMLInputElement | null>(null);

  const onChange = useCallback((updatedValue: string) => {
    setValue(updatedValue);
  }, []);

  const onReset = useCallback(() => {
    onChange('');
  }, [onChange]);

  useEffect(
    function attachESCKeydownEventListener() {
      const handleResetESCKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onReset();
        }
      };

      const target = ref.current;
      if (!value || !target) {
        return;
      }

      target.addEventListener('keydown', handleResetESCKeyDown);
      return () => {
        target.removeEventListener('keydown', handleResetESCKeyDown);
      };
    },
    [value, onReset],
  );

  return { ref, value, onChange, onReset };
};

export default useInput;
```

### React-Modal 에서 Modal을 전역에서 열고 닫을수 있도록 store추가

- useModalStore

### useFocusOnKeyPress 훅을 제거하고 useKeydown 훅으로 확장성있게 변경

### textarea 스크롤 생길때 text가 흐려지는 문제

- border-radius를 제거하니 흐려지는 문제가 해결됨

https://stackoverflow.com/questions/49349337/chrome-text-blur-with-overflow-yscroll-and-fixed-height

### prettier-plugin-tailwindcss

- Prettier를 사용하면 코드를 자동으로 포맷팅해주는데, tailwind css를 사용할 때 className까지도 포맷팅 해줄 수 있다.

1. 패키지 설치

```
npm install -D prettier prettier-plugin-tailwindcss
```

2. .prettierrc 플러그인 추가

```
 "plugins": [
    ...,
    "prettier-plugin-tailwindcss"
  ],
```

3. 동작 확인

package.json에서 script 확인하여 format에 'prettier --write' 명령어가 포함되는지 확인 후 실행

```
npm run format
```

### Swiper.js 외부컴포넌트에서 핸들링할 수 있도록

Swiper.js에서 onSwiper라는 props를 제공해주어서 외부컴포넌트에서 따로 핸들링할 수 있도록 기능 추가

```
const CardImageSwiper = ({
  imageList,
  onIndexChange,
  onSwiperReady,
  size = 'medium',
}: CardImageSwiperProps) => {
  return (
    <StyledSwiper
      slidesPerGroup={1}
      navigation
      pagination
      mousewheel
      keyboard
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
      onSlideChange={swiper => {
        onIndexChange?.(swiper.activeIndex); // 현재 인덱스를 부모로 전달
      }}
      onSwiper={swiper => {
        onSwiperReady?.(swiper);
      }}
    >

// 외부
<CardImageSwiper
  imageList={mainFirstImageList}
  onIndexChange={handleIndexChange}
  onSwiperReady={handleSwiperReady}
/>
```

참고 :

- useModalContainerCardDetailImageSwiper.ts
- ModalContainerCardDetailImageSwiper.tsx
- CardImageSwiper.tsx

### Autocomplete 컴포넌트 추가

탐험 검색 시 국가 검색 가능하도록 Autocomplete 컴포넌트를 추가 후 적용

- 검색 후 option 선택 시 검색어에 반영
- 키보드 ArrowUp & ArrowDown으로 선택 가능
- 키보드로 focus로 처리 하였으며, scroll 같이 되도록 적용

문제 : 첫 렌더링 시 keyboard 입력이 두번씩되어 ArrowDown 이 두번씩 발생하였었음

해결 : 이벤트 처리 플래그를 관리하는 ref 를 생성 후 이벤트핸들러 함수 내에서 한번에 입력되지 않도록 막음

```
 const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        // 이미 처리된 이벤트인 경우 무시
        if (keydownProcessedRef.current) {
          return;
        }

        // 이벤트 처리 플래그 설정
        keydownProcessedRef.current = true;

        // 다음 이벤트를 위해 플래그 초기화 (약간의 지연 추가)
        if (keydownTimeoutRef.current) {
          clearTimeout(keydownTimeoutRef.current);
        }
        keydownTimeoutRef.current = setTimeout(() => {
          keydownProcessedRef.current = false;
        }, 100);
...
```

### 이미지를 상대경로로 못찾아서 BASE_URL을 붙여서 처리

```
iconPath={`${import.meta.env.BASE_URL}icons/card.svg`}
```

import.meta.env.BASE_URL은 Vite에서 기본적으로 제공하는 내장 환경 변수라서 env파일이 없어도 자동 반영됨.

### 해야할 것

1. query와 api 위치 나 코드를 결합할지 고민
2. useQuery 더 학습 및 캡슐화
3. 컴포넌트 언마운트 시 api abort처리
4. 폴더 위치 및 type, model 등 어떻게 할 것 인지 고민
