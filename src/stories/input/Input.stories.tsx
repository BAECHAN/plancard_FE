import { Input } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta = {
  title: 'input/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: 'default-input',
    placeholder: '텍스트를 입력하세요',
  },
};

export const WithLabel: Story = {
  args: {
    id: 'labeled-input',
    label: '이름',
    placeholder: '이름을 입력하세요',
  },
};

export const Password: Story = {
  args: {
    id: 'password-input',
    type: 'password',
    placeholder: '비밀번호를 입력하세요',
  },
};

export const Alignments: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input
        id="left-align"
        placeholder="왼쪽 정렬"
        align="left"
      />
      <Input
        id="center-align"
        placeholder="가운데 정렬"
        align="center"
      />
      <Input
        id="right-align"
        placeholder="오른쪽 정렬"
        align="right"
      />
    </div>
  ),
};

export const WithInitialValue: Story = {
  args: {
    id: 'initial-value-input',
    value: '초기값',
    onReset: () => console.log('리셋 버튼 클릭됨'),
  },
};

export const AutoFocus: Story = {
  args: {
    id: 'autofocus-input',
    autoFocus: true,
    placeholder: '자동으로 포커스됩니다',
  },
};

export const WithEvents: Story = {
  args: {
    id: 'events-input',
    placeholder: '이벤트 테스트',
    onChange: e => console.log('onChange:', e.target.value),
    onFocus: () => console.log('onFocus 이벤트 발생'),
    onBlur: () => console.log('onBlur 이벤트 발생'),
    onKeyDown: e => console.log('onKeyDown:', e.key),
  },
};

export const WithOnChangeTest: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const handleReset = () => {
      setValue('');
    };

    return (
      <div className="flex flex-col gap-4">
        <Input
          id="onChange-test"
          placeholder="텍스트를 입력하세요"
          onChange={handleChange}
          value={value}
          onReset={handleReset}
        />
        <p className="text-gray-600 text-sm">현재 입력값: {value}</p>
      </div>
    );
  },
};

export const WithDefaultValueOnChangeTest: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>('초기값');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const handleReset = () => {
      setValue('');
    };

    return (
      <div className="flex flex-col gap-4">
        <Input
          id="onChange-test"
          placeholder="텍스트를 입력하세요"
          onChange={handleChange}
          value={value}
          onReset={handleReset}
        />
        <p className="text-gray-600 text-sm">현재 입력값: {value}</p>
      </div>
    );
  },
};
