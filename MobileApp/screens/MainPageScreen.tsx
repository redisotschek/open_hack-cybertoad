import * as React from 'react';
import { Text, View, TouchableHighlight, ImageBackground, Dimensions, Image } from 'react-native';
import NAVIGATION_ITEMS from '../constants/NavigationItems';
import styles from '../constants/Styles';

// @ts-ignore
export default function MainPageScreen({navigation}) {
  const DeviceWidth: number = Dimensions.get('window').width;
  const MenuItemSizeStyle = {
    width: DeviceWidth / 3,
    height: DeviceWidth / 3,
  };
  const MenuItems = NAVIGATION_ITEMS.map((item, i) => {
    const isItemMiddle = i === 1 || (i - 1 > 0 && (i - 1) % 3 === 0);
    const blockStyles = isItemMiddle ? styles.menuItemStyle : [styles.menuItemStyle, styles.noHorizontalBorder];

    return (
      <View
        key={ item.id }
        style={ [MenuItemSizeStyle, blockStyles] }
        onStartShouldSetResponder={ () => navigation.navigate(item.link) }
      >
        <View style={{flex: 3, justifyContent: 'flex-end'}}>
          <Image
            source={ item.icon }
            style={ {
              width: 40,
              height: 40,
            } }
          />
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
        <Text
          style={ [styles.textXS, styles.whiteText] }
        >
          { item.title }
        </Text>
        </View>
      </View>
    );
  });

  return (
    <View
      style={ {
        flex: 1,
        justifyContent: 'center',
      } }
    >
      <ImageBackground
        source={ require('../assets/images/bg.png') }
        style={ styles.backgroundImage }
      >
        <View
          style={ {
            alignContent: 'flex-start',
            alignItems: 'flex-start',
            flex: 1,
            paddingTop: 120,
          } }
        >
          <Text
            style={ [styles.textM, styles.whiteText, {paddingHorizontal: 20}] }
          >
            Новый платеж
          </Text>
          <View
            style={ {
              flexDirection: 'row',
              marginTop: 20,
            } }
          >
            { MenuItems }
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

