import { TemplateResult } from 'lit';
import { CHIP_VARIANTS } from '../constants/chipConstants';
import { COLORS } from '../constants/colorConstants';

type VariantOption = (typeof CHIP_VARIANTS)[number];
type ColorOption = (typeof COLORS)[number];

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
