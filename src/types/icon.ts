import { TemplateResult } from 'lit';

interface TemplateProps {
  name: string;
}

type Story = {
  (args: TemplateProps): TemplateResult;
  args?: TemplateProps;
  parameters?: {
    controls?: { disable: boolean };
  };
};

type Icon = TemplateResult;

export type { TemplateProps, Story, Icon };
