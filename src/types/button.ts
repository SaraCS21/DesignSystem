import { TemplateResult } from 'lit';
import {
  BUTTON_SIZES,
  BUTTON_TARGETS,
  BUTTON_VARIANTS,
} from '../constants/buttonConstants';
import { COLORS } from '../constants/colorConstants';

type VariantOption = (typeof BUTTON_VARIANTS)[number];
type ColorOption = (typeof COLORS)[number];
type SizeOption = (typeof BUTTON_SIZES)[number];
type TargetOption = (typeof BUTTON_TARGETS)[number];

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
