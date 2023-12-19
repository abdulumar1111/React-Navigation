import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import ButtonComponent from '../../../components/ButtonComponent/ButtonComponent';
import {PROFILE_SCREEN} from '../../../routes/appRoute-label';
import HeaderComponent from '../../../components/HeaderComponent/HeaderComponent';
import {images} from '../../../assets/images';

const Home = ({navigation}) => {
  const handleHome = () => {
    navigation.navigate(PROFILE_SCREEN, {title: 'Welcome to Profile'});
  };
  return (
    <View style={styles.container}>
      <HeaderComponent
        isCenterText={'Home'}
        isRightIcon={images.notification}
      />
      <View style={styles.homeSpacing}>
        <Text style={{color: '#fff'}}>Home Page</Text>
        <ButtonComponent btnText={'Click Here'} onPress={handleHome} />
      </View>
    </View>
  );
};

export default Home;
