// import { StyleProperties } from '../interfaces/button.interface';
import { colors } from '../styles/colors';

type ColorKeys = keyof typeof colors;

interface StyleProperties {
  [key: string]: string;
}

export class StyleUtils {
  static setStyleProperties(element: HTMLElement, properties: StyleProperties) {
    for (const [key, value] of Object.entries(properties)) {
      element.style.setProperty(key, value);
    }
  }

  static updateStyles(element: HTMLElement, color: ColorKeys) {
    const colorValue = String(color);

    this.setStyleProperties(element, {
      '--background-color': colors[`${colorValue}500`],
      '--dark-background-color': colors[`${colorValue}700`],
      '--light-background-color': colors[`${colorValue}200`],
    });

    if (['warning', 'pink', 'grey'].includes(colorValue)) {
      this.setStyleProperties(element, { '--text-color': 'black' });
    } else {
      this.setStyleProperties(element, { '--text-color': 'white' });
    }
  }
}
