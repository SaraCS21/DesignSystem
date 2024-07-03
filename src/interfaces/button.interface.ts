import { CSSResult } from 'lit';

interface TemplateProps {
  label: string;
  color: string;
  disabled?: boolean;
  variant: string;
  size: string;
  rounded: boolean;
}

interface StyleProperties {
  [key: string]: string | CSSResult;
}

export type { TemplateProps, StyleProperties };
