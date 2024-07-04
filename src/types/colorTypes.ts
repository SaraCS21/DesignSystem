import { CSSResult } from 'lit';
import { colors } from '../components/Colors/colors';

type ColorKeys = keyof typeof colors;

interface StyleProperties {
  [key: string]: string | CSSResult;
}

export type { ColorKeys, StyleProperties };
