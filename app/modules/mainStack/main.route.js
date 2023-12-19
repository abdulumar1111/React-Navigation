import React from 'react';

// React Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EXPLORE_SCREEN, HOME_SCREEN, PROFILE_SCREEN } from '../../routes/appRoute-label';
import Home from './home/home';
import Profile from './profile/profile';
import Explore from './explore/explore';

const Stack = createNativeStackNavigator();

const MainRoute = () => {
    return(
        <Stack.Navigator initialRouteName={Home}>
            <Stack.Screen name={HOME_SCREEN} component={Home} options={{headerShown:false}} />
            <Stack.Screen name={PROFILE_SCREEN} component={Profile} options={{headerShown:false}} />
            <Stack.Screen name={EXPLORE_SCREEN} component={Explore} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}


export default MainRoute;