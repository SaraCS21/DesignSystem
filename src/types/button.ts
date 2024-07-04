import { TemplateResult } from 'lit';
import {
  buttonSizes,
  buttonTargets,
  buttonVariants,
} from '../constants/buttonConstants';
import { colors as colorConstant } from '../constants/colorConstants';

type VariantOption = (typeof buttonVariants)[number];
type ColorOption = (typeof colorConstant)[number];
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

type Story = {
  (args: TemplateProps): TemplateResult;
  args?: TemplateProps;
  parameters?: {
    controls?: { disable: boolean };
  };
};

export type { TemplateProps, Story };
