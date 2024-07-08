import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { AvatarStyles } from './Avatar.styles';

@customElement('my-avatar')
export class MiAvatar extends LitElement {
  @property({ type: String })
  name = 'Avatar';

  @property({ type: String })
  size = 'medium';

  static get styles() {
    return [AvatarStyles];
  }

  render() {
    return html`
      <div class=${this.size}>
        <img
          src="https://picsum.photos/200"
          alt=${this.name}
          title=${this.name}
        />
      </div>
    `;
  }
}
