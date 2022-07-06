/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Container from './src/UIComponents/Container';
import Icon from 'react-native-vector-icons/FontAwesome';
import IIcon from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const {height, width} = Dimensions.get('window');

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Container style={styles.containerStyle}>
        <View style={styles.appBarContainer}>
          <View style={styles.appBarContent}>
            <View style={styles.appBarItem}>
              <Icon
                name="align-left"
                size={23}
                color="#000"
                style={{transform: [{scaleY: -1}]}}
              />
            </View>
            <View style={styles.appBarItem}>
              <Text style={styles.appbarTitle}>My Feed</Text>
            </View>
          </View>
          <View style={styles.appBarItem}>
            <Icon name="bell-o" size={23} color="#000" />
          </View>
        </View>
        <View style={styles.storyViewParent}>
          <ScrollView horizontal={true} style={styles.storyScrollView}>
            <View style={styles.storyContainer}>
              <View style={styles.addStory}>
                <Image
                  source={require('./assets/img/camera.png')}
                  style={styles.addStoryImg}
                />
              </View>
              <Text style={styles.storyText}>+ Add</Text>
            </View>
            <View style={styles.storyContainer}>
              <View style={[styles.story, styles.storyActive]}>
                <Image
                  source={require('./assets/img/profile-1.jpeg')}
                  style={styles.storyImg}
                />
              </View>
              <Text style={styles.storyText}>Rhina D</Text>
            </View>
            <View style={styles.storyContainer}>
              <View style={[styles.story, styles.storyActive]}>
                <Image
                  source={require('./assets/img/profile-2.jpeg')}
                  style={styles.storyImg}
                />
              </View>
              <Text style={styles.storyText}>Saima</Text>
            </View>
            <View style={styles.storyContainer}>
              <View style={styles.story}>
                <Image
                  source={require('./assets/img/profile-3.jpeg')}
                  style={styles.storyImg}
                />
              </View>
              <Text style={[styles.storyText, styles.visitedStoryText]}>
                Rusian Zz
              </Text>
            </View>
            <View style={styles.storyContainer}>
              <View style={styles.story}>
                <Image
                  source={require('./assets/img/profile-4.jpeg')}
                  style={styles.storyImg}
                />
              </View>
              <Text style={[styles.storyText, styles.visitedStoryText]}>
                Designer b
              </Text>
            </View>
            <View style={styles.storyContainer}>
              <View style={styles.story}>
                <Image
                  source={require('./assets/img/profile-4.jpeg')}
                  style={styles.storyImg}
                />
              </View>
              <Text style={[styles.storyText, styles.visitedStoryText]}>
                Designer b
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.postViewParent}>
          <ScrollView
            style={styles.postScrollView}
            contentContainerStyle={styles.postScrollViewContainer}>
            <View>
              <View style={styles.postContainer}>
                <Image
                  source={require('./assets/img/Neon_TrainStation.jpeg')}
                  style={styles.postImg}
                />
              </View>
              <View style={{marginHorizontal: 20}}>
                <View style={styles.postAction}>
                  <Text style={styles.postTitleText}>Neon Trainstation</Text>
                  <Icon
                    name="heart-o"
                    size={23}
                    color="#bcbcbc"
                    style={{marginRight: 5, fontWeight: '700'}}
                  />
                  <Text style={[styles.postActionText, {marginRight: 5}]}>
                    192
                  </Text>
                  <IIcon
                    name="chatbubble-outline"
                    size={23}
                    color="#bcbcbc"
                    style={{marginRight: 5}}
                  />
                  <Text style={[styles.postActionText]}>12</Text>
                </View>
                <Text style={styles.postActionComment}>NXTLevel Design</Text>
                <View style={styles.postActionImages}>
                  <View style={styles.postCommentView}>
                    <Image
                      source={require('./assets/img/profile-3.jpeg')}
                      style={[styles.postCommentImg]}
                    />
                  </View>
                  <View style={styles.postCommentView}>
                    <Image
                      source={require('./assets/img/profile-1.jpeg')}
                      style={[
                        styles.postCommentImg,
                        {position: 'absolute', right: 7},
                      ]}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.postContainer}>
                <Image
                  source={require('./assets/img/influencer.jpeg')}
                  style={styles.postImg}
                />
              </View>
              <View style={{marginHorizontal: 20}}>
                <View style={styles.postAction}>
                  <Text style={styles.postTitleText}>Fashion Model</Text>
                  <Icon
                    name="heart-o"
                    size={23}
                    color="#bcbcbc"
                    style={{marginRight: 5, fontWeight: '700'}}
                  />
                  <Text style={[styles.postActionText, {marginRight: 5}]}>
                    192
                  </Text>
                  <IIcon
                    name="chatbubble-outline"
                    size={23}
                    color="#bcbcbc"
                    style={{marginRight: 5}}
                  />
                  <Text style={[styles.postActionText]}>12</Text>
                </View>
                <Text style={styles.postActionComment}>NXTLevel Design</Text>
                <View style={styles.postActionImages}>
                  <View style={styles.postCommentView}>
                    <Image
                      source={require('./assets/img/profile-3.jpeg')}
                      style={[styles.postCommentImg]}
                    />
                  </View>
                  <View style={styles.postCommentView}>
                    <Image
                      source={require('./assets/img/profile-1.jpeg')}
                      style={[
                        styles.postCommentImg,
                        {position: 'absolute', right: 7},
                      ]}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabBarParent}>
          <View style={styles.tabBarChild}>
            <Foundation name={'home'} color={'#000'} size={33} />
            <MaterialIcon name={'magnify'} color={'#000'} size={33} />
          </View>
          <View style={styles.tabBarButtonView}>
            <TouchableOpacity style={styles.tabBarButton}>
              <Text style={styles.tabBarBtnText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabBarChild}>
            <MaterialIcon name={'heart-outline'} color={'#000'} size={33} />
            <View style={styles.tabBarProfileView}>
              <Image
                source={require('./assets/img/profile-3.jpeg')}
                style={styles.tabBarImg}
              />
            </View>
          </View>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  containerStyle: {justifyContent: 'flex-start', alignItems: 'flex-start'},
  appBarContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  appBarContent: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  appBarItem: {
    margin: 10,
  },
  appbarTitle: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
    color: '#1A0217',
  },
  storyViewParent: {
    height: 120,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyScrollView: {
    height: '100%',
  },
  storyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addStory: {
    marginHorizontal: 10,
    marginVertical: 3,
    height: 65,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e42c67',
    borderRadius: 50,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 13,
    },
    shadowOpacity: 0.24,
    shadowRadius: 14.86,
    elevation: 18,
  },
  story: {
    marginHorizontal: 6,
    marginVertical: 3,
    height: 65,
    width: 65,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderRadius: 50,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 13,
    },
    shadowOpacity: 0.24,
    shadowRadius: 14.86,
    elevation: 18,
  },
  storyActive: {borderColor: '#1a70ea'},
  visitedStoryText: {
    color: '#BCBCBC',
  },
  addStoryImg: {height: 35, width: 35},
  storyImg: {height: 56, width: 56, borderRadius: 50},
  storyText: {
    fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '700',
    color: '#1A0217',
  },
  postViewParent: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postScrollView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  postScrollViewContainer: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  postContainer: {
    margin: 15,
    height: 230,
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 18,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 13,
    },
    shadowOpacity: 0.24,
    shadowRadius: 14.86,
    elevation: 18,
  },
  postImg: {
    height: '100%',
    width: '100%',
    borderRadius: 18,
  },
  postTitleText: {
    flex: 1,
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: 20,
    color: '#000',
  },
  postAction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postActionText: {
    color: '#bcbcbc',
    fontSize: 13,
    fontWeight: '900',
  },
  postActionComment: {
    marginVertical: 5,
    color: '#bcbcbc',
    fontSize: 10,
    fontWeight: '900',
  },
  postActionImages: {
    flexDirection: 'row',
  },
  postCommentView: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  postCommentImg: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  tabBarParent: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, alpha)',
  },
  tabBarChild: {
    paddingHorizontal: 40,
    height: 60,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabBarProfileView: {
    height: 30,
    width: 30,
    borderRadius: 20,
  },
  tabBarImg: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  tabBarButtonView: {
    // borderWidth: 1,
    position: 'absolute',
    height: 85,
    alignItems: 'center',
  },
  tabBarButton: {
    height: 50,
    width: 50,
    backgroundColor: '#e42c67',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarBtnText: {
    fontSize: 30,
    color: '#fff',
  },
});
