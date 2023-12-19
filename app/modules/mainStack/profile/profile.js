import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import ButtonComponent from '../../../components/ButtonComponent/ButtonComponent';
import { HOME_SCREEN } from '../../../routes/appRoute-label';
import HeaderComponent from '../../../components/HeaderComponent/HeaderComponent';
import { images } from '../../../assets/images';

const Profile = ({navigation,route}) => {
  const {title} = route.params;

  const handleProfile = () => {
    navigation.goBack(HOME_SCREEN)
  }
  return (
    <View style={styles.container}>
      <HeaderComponent isLeftIcon={images.arrow_left} isCenterText={'Profile'} isLeftPress={() => navigation.goBack()} />
      <View style={styles.profileSpacing}>
        <Text style={{color:'#fff'}}>{title}</Text>
        <ButtonComponent btnText='Click Here' onPress={handleProfile} />
      </View>
    </View>
  );
};

export default Profile;
