import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IconStyles } from './Icon.styles';
import { ICONS } from '../../constants/iconConstants';

@customElement('my-icon')
export class MiIcon extends LitElement {
  @property({ type: String })
  name = 'homeOutlined';

  static get styles() {
    return [IconStyles];
  }

  render() {
    const icon = ICONS[this.name];

    return html` <div>${icon}</div> `;
  }
}
