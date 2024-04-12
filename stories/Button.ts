import { LitElement, html, css } from 'lit';

class MiBoton extends LitElement {
  static styles = css`
    /* estilos del botón */
  `;

  render() {
    return html`<button><slot></slot></button>`;
  }
}

customElements.define('mi-boton', MiBoton);
