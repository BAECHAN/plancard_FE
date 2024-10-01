// .eslintrc.json

const importPatterns = [
  '@/shared/lib/shadcn-ui/components/ui/*',
  '!@/shared/lib/shadcn-ui/components/ui/index',

  '@/shared/const/*',
  '!@/shared/const/index',

  '@/shared/type/*',
  '!@/shared/type/index',

  '@/shared/ui/*.{ts,tsx}',
  '!@/shared/ui/index.{ts,tsx}',

  '@/entities/**/*.{ts,tsx}',
  '!@/entities/**/index.{ts,tsx}',

  '@/features/**/*.{ts,tsx}',
  '!@/features/**/index.{ts,tsx}',

  '@/widgets/**/**/*.{ts,tsx}',
  '!@/widgets/**/**/index.{ts,tsx}',

  '@/pages/**/*.{ts,tsx}',
  '!@/pages/**/index.{ts,tsx}',
];
module.exports = {
  root: true, // 현재 폴더(root)의 린트 설정파일만 적용함 (상위에 eslintrc 파일이 있어도 참고하지 않음)
  plugins: [
    // ESLint에서 기본 제공하는 규칙(rule)외에 추가할 규칙
    'import', // import관련  (eslint-plugin-import 패키지 설치 필요. --fix 옵션 필요)
    '@typescript-eslint', // typescript 린트
    'react', // react 린트
    'react-refresh', // react-refresh 린트
    'prettier', // prettier 린트
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    // 규칙을 하나하나 세세하게 제어하기 위해 사용 (보통 extends 옵션에 의해 설정된 규칙을 덮어쓰고 싶을 때 사용)

    eqeqeq: 'error', // '===' 사용 권장

    curly: 'error', // if, else, for, while 등의 코드 블록을 항상 중괄호로 감싸도록 함

    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: 'Avoid using enums.', // enum 사용 지양
      },
    ],

    '@typescript-eslint/no-unused-vars': 'off', // 사용하지 않는 변수 경고 끄기

    '@typescript-eslint/no-explicit-any': 'off',

    'react/jsx-boolean-value': ['error', 'never'], // Props에 boolean 타입인 경우 true일때 값을 생략함

    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-var-requires': 'off', // 필요한 다른 규칙을 추가할 수 있습니다.

    'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }], // jsx 파일 확장자를 .ts, .tsx로 한정. 위반 시 경고(warn)
    '@typescript-eslint/camelcase': 'off',

    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    'import/prefer-default-export': 'off',

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
            group: importPatterns,
            message: 'Please import from the index.ts file in the ui folder.',
          },
        ],
      },
    ],
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
              './src/app',
            ],
          },
          {
            target: './src/entities',
            from: [
              './src/features',
              './src/widgets',
              './src/pages',
              './src/app',
            ],
          },
          {
            target: './src/features',
            from: ['./src/widgets', './src/pages', './src/app'],
          },
          {
            target: './src/widgets',
            from: ['./src/pages', './src/app'],
          },
          {
            target: './src/pages',
            from: ['./src/app'],
          },
        ],
      },
    ],

    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect', // 'detect'로 설정하면 ESLint가 설치된 React 버전을 자동으로 감지합니다.
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.app.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  parser: '@typescript-eslint/parser', // ESLint가 이해할수있는 Javascript 문법으로 파싱해주는 파서 설정 (typescript 문법을 Javascript로 변환하는 파서 추가)
  parserOptions: {
    // 파싱하기 위한 Javascript 옵션을 지정
    ecmaVersion: 'latest', // 최신 ECMAScript 버전 사용
    sourceType: 'module', // parser의 export 형태 설정 (module 방식 사용)
    ecmaFeatures: {
      // ECMAScript의 언어 확장 기능을 설정
      jsx: true, // jsx 코드 린트하도록 설정
    },
    project: './tsconfig.app.json', // 파싱할 프로젝트 경로 제공. (TypeScript 인 경우)
  },
  env: {
    // 활성화할 환경 지정 (eslint가 전역 변수를 인식하는 구간)
    browser: true, // 브라우저에서 접근가능 전역 객체 등록 (document나 window가 인식되게 함)
    node: true, // NodeJs에서 접근가능 전역 객체 등록
    es6: true, // ECMAScript 6 버전 사용
  },
  ignorePatterns: [
    'build',
    'dist',
    'public',
    'tailwind.config.js',
    'src/shared/type/index.d.ts',
  ], // 린트 무시할 파일/폴더 (기본적으로 node_modules 폴더나 .로 시작하는 설정 파일은 무시)
  overrides: [
    {
      files: ['*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
      parserOptions: {
        project: null, // 이 파일에 대해서는 TypeScript 프로젝트 설정을 사용하지 않음
      },
    },
    {
      files: ['./src/shared/lib/shadcn-ui/components/ui/*'],
      rules: {
        'react/function-component-definition': 'off',
      },
    }, // shadcn-ui에서는 함수 컴포넌트 정의 규칙을 무시
    {
      files: ['**/*.stories.{js,jsx,ts,tsx}'], // Storybook 스토리 파일 패턴
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              {
                group: importPatterns,
                message:
                  '컴포넌트는 바렐 파일(src/*/index.ts)을 통해서만 임포트해 주세요.',
              },
            ],
          },
        ],
      },
    },
  ],
};
