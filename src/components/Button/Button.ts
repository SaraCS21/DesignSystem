import { LitElement, TemplateResult, html } from 'lit';
import { createContext, provide } from '@lit/context';
import { customElement, property } from 'lit/decorators.js';
import { ButtonStyles } from './Button.styles';
import { ColorKeys, StyleProperties } from '../../types/colorTypes';
import { MyUpdateColors } from '../../lib/utils/MyUpdateColors';

export const updateColorsContext =
  createContext<MyUpdateColors>('updateColors');

@customElement('my-button')
export class MiBoton extends LitElement {
  @provide({ context: updateColorsContext })
  updateColors = new MyUpdateColors();

  @property({ type: String, reflect: true })
  color: ColorKeys = 'blue';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  variant = 'contained';

  @property({ type: String })
  size = 'small';

  @property({ type: Boolean })
  rounded = false;

  @property({ type: String })
  href: string | null = null;

  @property({ type: String })
  target: string | null = null;

  @property({ type: String })
  icon: TemplateResult | null = null;

  @property({ type: String })
  iconPosition: 'left' | 'right' | null = null;

  static get styles() {
    return [ButtonStyles];
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('color')) {
      const styleProperties = this.updateColors.updateColorStyles(
        String(this.color)
      );

      this.setStyleProperties(styleProperties);
    }
  }

  setStyleProperties(properties: StyleProperties) {
    Object.entries(properties).forEach(([key, value]) => {
      this.style.setProperty(key, String(value));
    });
  }

  render() {
    const buttonClasses = `
      ${this.variant}
      ${this.size}
      ${this.rounded ? 'rounded' : ''}
    `;

    return this.href
      ? html`
          <a href=${this.href} target=${this.target} class=${buttonClasses}>
            ${this.iconPosition === 'left' ? this.icon : ''}
            <slot></slot>
            ${this.iconPosition === 'right' ? this.icon : ''}
          </a>
        `
      : html`
          <button ?disabled=${this.disabled} class=${buttonClasses}>
            ${this.iconPosition === 'left' ? this.icon : ''}
            <slot></slot>
            ${this.iconPosition === 'right' ? this.icon : ''}
          </button>
        `;
  }
}
