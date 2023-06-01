import React, {useContext} from 'react';
import {createBox, createText} from '@shopify/restyle';
import {Theme} from 'shared/theme';
import {StoreContext} from 'stores/index';
import {observer} from 'mobx-react-lite';
import {Button} from '@rneui/base';
const Feed = () => {
  const {modeStore} = useContext(StoreContext);
  const Box = createBox<Theme>();
  const Text = createText<Theme>();
  return (
    <Box padding="m" backgroundColor="background" flex={1}>
      <Text variant="body" color="primary">
        aaa
      </Text>
      <Button
        type="solid"
        onPress={() => {
          modeStore.setMode(modeStore.mode === 'light' ? 'dark' : 'light');
        }}>
        change
      </Button>
    </Box>
  );
};
export default observer(Feed);
