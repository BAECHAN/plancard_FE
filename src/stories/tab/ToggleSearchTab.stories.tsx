import { ToggleSearchTab } from '@/shared/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const meta: Meta<typeof ToggleSearchTab> = {
  title: 'Tab/ToggleSearchTab',
  component: ToggleSearchTab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <RecoilRoot>
        <MemoryRouter initialEntries={['/cards/my']}>
          <div className="w-[500px]">
            <Story />
          </div>
        </MemoryRouter>
      </RecoilRoot>
    ),
  ],
} satisfies Meta<typeof ToggleSearchTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'medium',
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    disabled: false,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    disabled: true,
  },
};

export const PlansPage: Story = {
  args: {
    size: 'medium',
    disabled: false,
  },
  decorators: [
    Story => (
      <RecoilRoot>
        <MemoryRouter initialEntries={['/plans/my']}>
          <div className="w-[500px]">
            <Story />
          </div>
        </MemoryRouter>
      </RecoilRoot>
    ),
  ],
};

export const ExploreTab: Story = {
  args: {
    size: 'medium',
    disabled: false,
  },
  decorators: [
    Story => (
      <RecoilRoot>
        <MemoryRouter initialEntries={['/cards/explore']}>
          <div className="w-[500px]">
            <Story />
          </div>
        </MemoryRouter>
      </RecoilRoot>
    ),
  ],
};
