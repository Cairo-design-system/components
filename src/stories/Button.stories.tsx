// Button.stories.tsx
import './../sass/main.scss'

import React from 'react';

import { Meta } from '@storybook/react';

import Button from './../components/atoms/button'

export default {
  title: 'Components/Button',
} as Meta;

// export const Primary: React.VFC<{}> = () => <Button />;
export const Primary: React.VFC<{}> = () => <button type="button" className="btn btn-primary">Primary</button>;