import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ChipStyles } from './Chip.styles';
import { ColorKeys, StyleProperties } from '../../types/colorTypes';
import { MyUpdateColors } from '../../lib/utils/MyUpdateColors';
import { createContext, provide } from '@lit/context';

export const updateColorsContext =
  createContext<MyUpdateColors>('updateColors');

@customElement('my-chip')
export class MiChip extends LitElement {
  @provide({ context: updateColorsContext })
  updateColors = new MyUpdateColors();

  @property({ type: String, reflect: true })
  color: ColorKeys = 'blue';

  @property({ type: String })
  variant = 'contained';

  static get styles() {
    return [ChipStyles];
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
    return html`
      <div class=${this.variant}>
        <slot></slot>
      </div>
    `;
  }
}
