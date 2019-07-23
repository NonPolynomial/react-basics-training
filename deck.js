import future from '@mdx-deck/themes/future';

import {
  vsDarkPartial as codeTheme,
} from 'code-surfer';

import {slides as intro} from './01-intro/deck.mdx';
import {slides as reactApp} from './02-react-app/deck.mdx';

export const slides = [
  ...intro,
  ...reactApp,
];

export const themes = [future, codeTheme];
