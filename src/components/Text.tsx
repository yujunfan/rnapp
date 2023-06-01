import {createText} from '@shopify/restyle';
import {Theme} from 'shared/theme';

export const Text = createText<Theme>();
export type TextProps = React.ComponentProps<typeof Text>;
