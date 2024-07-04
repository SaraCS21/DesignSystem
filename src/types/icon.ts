import { TemplateResult } from 'lit';

interface TemplateProps {
  name: string;
  type: string;
}

type Story = {
  (args: TemplateProps): TemplateResult;
  args?: TemplateProps;
  parameters?: {
    controls?: { disable: boolean };
  };
};

interface Icon {
  name: string;
  type: {
    outlined: TemplateResult;
    sharp: TemplateResult;
  };
}

export type { TemplateProps, Story, Icon };
