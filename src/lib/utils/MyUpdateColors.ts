import { colors } from '../../components/Colors/colors';

export class MyUpdateColors {
  updateColorStyles(
    color: string
  ) {
    return {
      '--background-color': colors[`${color}500`],
      '--dark-background-color': colors[`${color}700`],
      '--light-background-color': colors[`${color}200`],
      '--text-color': this.getTextColor(color),
    };
  }

  getTextColor(color: string): string {
    return ['warning', 'pink', 'grey'].includes(color) ? 'black' : 'white';
  }
}
