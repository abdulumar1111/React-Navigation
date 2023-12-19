import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {moderateScale, verticalScale} from 'react-native-size-matters';

const HeaderComponent = ({
  isLeftIcon,
  isLeftPress,
  isRightIcon,
  isRightPress,
  isCenterText,
}) => {
  return (
    <View style={styles.headerStyle}>
      {isLeftIcon ? (
        <TouchableOpacity onPress={isLeftPress} activeOpacity={0.6}>
          <Image source={isLeftIcon} style={{tintColor: '#fff'}} />
        </TouchableOpacity>
      ) : null}

      {isCenterText ? (
        <Text style={styles.textColor}>{isCenterText}</Text>
      ) : null}

      {isRightIcon ? (
        <TouchableOpacity onPress={isRightPress} activeOpacity={0.6}>
          <Image source={isRightIcon} style={{tintColor: '#fff'}} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(12),
    paddingVertical: verticalScale(8),
  },
  textColor: {
    color: '#fff',
    fontSize: RFValue(16),
    fontFamily: 'Poppins-Regular',
  },
});

export default HeaderComponent;
