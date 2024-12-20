import { SearchContainerExplore } from '@/widgets/search/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SearchContainerExplore> = {
  title: 'Widgets/Search/SearchContainerExplore',
  component: SearchContainerExplore,
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
    size: 'medium',
  },
} satisfies Meta<typeof SearchContainerExplore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

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
