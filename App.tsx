import React from 'react';
import Home from './src/Components/Home';
import {NavigationContainer} from '@react-navigation/native';
import PostDetails from './src/Components/PostDetails';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './src/Components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -25,
            fontFamily: 'Poppins-SemiBold',
            fontSize: 15,
          },
        }}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="PostDetails"
          component={PostDetails}
          options={{
            drawerIcon: ({color}) => (
              <MaterialIcon name="post" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
