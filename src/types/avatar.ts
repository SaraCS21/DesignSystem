import { TemplateResult } from 'lit';

interface TemplateProps {
  label?: string;
  name: string;
  size: string;
}

type Story = {
  (args: TemplateProps): TemplateResult;
  args?: TemplateProps;
  parameters?: {
    controls?: { disable: boolean };
  };
};

export type { TemplateProps, Story };
