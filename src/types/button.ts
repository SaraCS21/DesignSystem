import { CSSResult, TemplateResult } from 'lit';
import {
  buttonColors,
  buttonSizes,
  buttonTargets,
  buttonVariants,
} from '../constants/buttonConstants';
import { colors } from '../styles/colors';

type ColorKeys = keyof typeof colors;

type VariantOption = (typeof buttonVariants)[number];
type ColorOption = (typeof buttonColors)[number];
type SizeOption = (typeof buttonSizes)[number];
type TargetOption = (typeof buttonTargets)[number];

interface TemplateProps {
  label: string;
  color: ColorOption;
  disabled?: boolean;
  variant: VariantOption;
  size: SizeOption;
  rounded: boolean;
  href?: string;
  target?: TargetOption;
}

interface StyleProperties {
  [key: string]: string | CSSResult;
}

type Story = {
  (args: TemplateProps): TemplateResult;
  args?: TemplateProps;
  parameters?: {
    controls?: { disable: boolean };
  };
};

export type { TemplateProps, StyleProperties, Story, ColorKeys };
