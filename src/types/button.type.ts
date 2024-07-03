import { TemplateResult } from 'lit';
import { TemplateProps } from '../interfaces/button.interface';
import { colors } from '../styles/colors';

export type Story = {
  (args: TemplateProps): TemplateResult;
  args?: TemplateProps;
};

export type ColorKeys = keyof typeof colors;
