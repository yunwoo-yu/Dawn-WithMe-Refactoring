import 'styled-components';
import { Color, Device, FontSize, Size } from '../styles/theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme {
    colors: Color;
    fontSizes: FontSize;
    size: Size;
    device: Device;
  }
}
