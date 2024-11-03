// Prettier 설정 파일
module.exports = {
  plugins: [require.resolve('prettier-plugin-organize-imports')],
  importOrder: ['^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,

  // printWidth: 줄 길이를 설정합니다. 기본값은 80입니다.
  printWidth: 80,

  // tabWidth: 탭 간격을 설정합니다. 기본값은 2입니다.
  tabWidth: 2,

  // useTabs: 탭 대신 스페이스를 사용할지 여부를 설정합니다. 기본값은 false입니다.
  useTabs: false,

  // semi: 명령문 끝에 세미콜론을 추가할지 여부를 설정합니다. 기본값은 true입니다.
  semi: true,

  // singleQuote: 큰따옴표 대신 작은따옴표를 사용할지 여부를 설정합니다. 기본값은 false입니다.
  singleQuote: true,

  // quoteProps: 객체 속성에 따옴표를 어떻게 사용할지 설정합니다. 기본값은 as-needed입니다.
  quoteProps: 'as-needed',

  // jsxSingleQuote: JSX에서 큰따옴표 대신 작은따옴표를 사용할지 여부를 설정합니다. 기본값은 false입니다.
  jsxSingleQuote: false,

  // trailingComma: 후행 쉼표를 어디에 사용할지 설정합니다. 기본값은 es5입니다.
  trailingComma: 'all',

  // bracketSpacing: 객체 리터럴의 중괄호 사이에 공백을 넣을지 여부를 설정합니다. 기본값은 true입니다.
  bracketSpacing: true,

  // jsxBracketSameLine: JSX의 마지막 꺽쇠 괄호를 다음 줄로 내릴지 여부를 설정합니다. 기본값은 false입니다.
  bracketSameLine: false,

  // arrowParens: 화살표 함수의 매개변수에 괄호를 사용할지 여부를 설정합니다. 기본값은 always입니다.
  arrowParens: 'avoid',

  // proseWrap: 마크다운 파일에서 줄 바꿈을 어떻게 처리할지 설정합니다. 기본값은 preserve입니다.
  proseWrap: 'preserve',

  // htmlWhitespaceSensitivity: HTML 파일에서 공백을 어떻게 처리할지 설정합니다. 기본값은 css입니다.
  htmlWhitespaceSensitivity: 'css',

  // endOfLine: 줄 끝에 어떤 줄 바꿈 문자를 사용할지 설정합니다. 기본값은 lf입니다.
  endOfLine: 'lf',

  // embeddedLanguageFormatting: 임베디드 언어의 포맷팅을 어떻게 할지 설정합니다. 기본값은 auto입니다.
  embeddedLanguageFormatting: 'auto',

  // singleAttributePerLine: 하나의 속성을 갖는 태그는 한 줄에 표시할지 여부를 설정합니다. 기본값은 false입니다.
  singleAttributePerLine: true,

  // importOrder: import문을 정렬하는 규칙을 설정합니다. 예시는 제공하지 않습니다.
  importOrder: ['^@/(.*)$', '^[./]'],

  // importOrderSeparation: import문 그룹 간에 빈 줄을 추가할지 여부를 설정합니다. 기본값은 true입니다.
  importOrderSeparation: true,

  // importOrderSortSpecifiers: import문 내의 구성 요소를 알파벳순으로 정렬할지 여부를 설정합니다. 기본값은 true입니다.
  importOrderSortSpecifiers: true,
};
