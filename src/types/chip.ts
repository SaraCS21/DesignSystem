import { TemplateResult } from 'lit';
import { chipVariants } from '../constants/chipConstants';
import { colors as colorConstant } from '../constants/colorConstants';

type VariantOption = (typeof chipVariants)[number];
type ColorOption = (typeof colorConstant)[number];

interface TemplateProps {
  label: string;
  variant: VariantOption;
  color: ColorOption;
}

type Story = {
  (args: TemplateProps): TemplateResult;
  args?: TemplateProps;
  parameters?: {
    controls?: { disable: boolean };
  };
};

export type { TemplateProps, Story };
