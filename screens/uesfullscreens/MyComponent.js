import * as React from 'react';
import { View } from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 60,
          flexDirection: 'row',
          justifyContent: 'center',
          position:'absolute',
          zIndex:1,
          alignSelf:'flex-end'
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}> <MaterialCommunityIcons name="dots-vertical" size={30} color= '#000000' /> </Button>}>
          <Menu.Item onPress={() => {}} title="1x" />
          <Menu.Item onPress={() => {}} title="1.5x" />
          <Menu.Item onPress={() => {}} title="2x" />
        </Menu>
      </View>
    </Provider>
  );
};

export default MyComponent;