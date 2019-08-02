import future from '@mdx-deck/themes/future';

import { vsDarkPartial as codeTheme } from 'code-surfer';

import { slides as intro } from './01-basics/deck.mdx';
import { slides as reactApp } from './02-project-intro/deck.mdx';
import { slides as propTypes } from './03-propTypes/deck.mdx';

export const slides = [...intro, ...reactApp, ...propTypes];

export const themes = [future, codeTheme];
