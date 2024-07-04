import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ButtonStyles } from './Button.styles';
import { ColorKeys, StyleProperties } from '../../types/colorTypes';
import { colors } from '../Colors/colors';

@customElement('my-button')
export class MiBoton extends LitElement {
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
      this.updateColorStyles();
    }
  }

  updateColorStyles() {
    const color = String(this.color);

    this.setStyleProperties({
      '--background-color': colors[`${color}500`],
      '--dark-background-color': colors[`${color}700`],
      '--light-background-color': colors[`${color}200`],
      '--text-color': this.getTextColor(color),
    });
  }

  getTextColor(color: string): string {
    return ['warning', 'pink', 'grey'].includes(color) ? 'black' : 'white';
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
