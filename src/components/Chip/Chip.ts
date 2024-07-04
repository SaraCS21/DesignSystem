import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ChipStyles } from './Chip.styles';
import { colors } from '../Colors/colors';
import { ColorKeys, StyleProperties } from '../../types/colorTypes';

@customElement('my-chip')
export class MiChip extends LitElement {
  @property({ type: String, reflect: true })
  color: ColorKeys = 'blue';

  @property({ type: String })
  variant = 'contained';

  static get styles() {
    return [ChipStyles];
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
    return html`
      <div class=${this.variant}>
        <slot></slot>
      </div>
    `;
  }
}
