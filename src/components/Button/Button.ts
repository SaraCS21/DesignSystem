import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { colors } from '../../styles/colors';
import { ColorKeys } from '../../types/button.type';
import { StyleProperties } from '../../interfaces/button.interface';
import { ButtonStyles } from './Button.styles';

@customElement('mi-boton')
export class MiBoton extends LitElement {
  @property({ type: String, reflect: true })
  color: ColorKeys = 'blue';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  variant = 'contained';

  static get styles() {
    return [ButtonStyles];
  }

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('color')) {
      const color = String(this.color);

      this.setStyleProperties({
        '--background-color': colors[`${color}500`],
        '--dark-background-color': colors[`${color}700`],
        '--light-background-color': colors[`${color}200`],
      });

      if (['warning', 'pink', 'grey'].includes(color)) {
        this.setStyleProperties({ '--text-color': 'black' });
      } else {
        this.setStyleProperties({ '--text-color': 'white' });
      }
    }
  }

  setStyleProperties(properties: StyleProperties) {
    for (const [key, value] of Object.entries(properties)) {
      this.style.setProperty(key, String(value));
    }
  }

  render() {
    return html`
      <button ?disabled=${this.disabled} class=${this.variant}>
        <slot></slot>
      </button>
    `;
  }
}
