/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props: any) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContainerStyle}>
        <ImageBackground
          source={require('../../assets/img/menu-bg.jpeg')}
          style={{padding: 20}}>
          <Image
            source={require('../../assets/img/user-profile.jpeg')}
            style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
          />
          <Text style={styles.userNametext}>John Doe</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.userDetailsText}>280 Coins</Text>
          </View>
        </ImageBackground>
        <View style={styles.drawerContent}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footerView}>
        <TouchableOpacity onPress={() => {}} style={styles.footerViewButton}>
          <View style={styles.footerContentView}>
            <Ionicons name="share-social-outline" size={22} />
            <Text style={styles.footerText}>Tell a Friend</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.footerViewButton}>
          <View style={styles.footerContentView}>
            <Ionicons name="exit-outline" size={22} />
            <Text style={styles.footerText}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {flex: 1},
  drawerContainerStyle: {backgroundColor: '#8200d6'},
  userNametext: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 5,
  },
  userDetailsText: {
    color: '#fff',
    marginRight: 5,
  },
  drawerContent: {flex: 1, backgroundColor: '#fff', paddingTop: 10},
  footerView: {padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'},
  footerViewButton: {paddingVertical: 15},
  footerContentView: {flexDirection: 'row', alignItems: 'center'},
  footerText: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 5,
  },
});
