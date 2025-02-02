import { CountryCard } from '@/widgets/card/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof CountryCard> = {
  title: 'Widgets/Card/CountryCard',
  component: CountryCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: '컨텐츠 크기',
    },
  },
  args: {
    onClick: fn(),
    size: 'medium',
    info: {
      title: '스페인',
      imageUrl: `${import.meta.env.BASE_URL}images/spain.svg`,
      description: `Learn step-by-step instructions on how to bake a moist and delicious chocolate cake that will impress everyone. From mixing the ingredients to frosting and decorating, this guide has all the tips and tricks you need for baking success.`,
      isoCode: 'SP',
    },
  },
} satisfies Meta<typeof CountryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};
export const Medium: Story = {
  args: {},
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
