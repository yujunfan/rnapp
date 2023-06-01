import React, {useContext} from 'react';
import {StoreContext} from 'stores/index';
import {observer} from 'mobx-react-lite';
import {Button} from '@rneui/base';
import {Box, Text} from 'components';
const Feed = () => {
  const {modeStore} = useContext(StoreContext);
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
