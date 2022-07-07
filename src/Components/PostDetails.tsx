/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const PostDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appbarView}>
        <View style={styles.appbarTextIcon}>
          <Ionicon name={'arrow-back'} size={35} color="#fff" />
          <Text style={styles.appBarTitleText}>Comments</Text>
        </View>
        <View>
          <MaterialIcon name={'dots-vertical'} color="#fff" size={35} />
        </View>
      </View>
      <View style={styles.postImgView}>
        <Image
          source={require('../../assets/img/Neon_TrainStation.jpeg')}
          style={styles.postImg}
        />
      </View>
      <View style={styles.postDetail}>
        <View style={styles.postAction}>
          <Text style={styles.postTitleText}>Neon Trainstation</Text>
          <Icon
            name="heart-o"
            size={23}
            color="#13153B"
            style={{marginRight: 5, fontWeight: '700'}}
          />
          <Text style={[styles.postActionText, {marginRight: 5}]}>192</Text>
          <Ionicon
            name="chatbubble-outline"
            size={23}
            color="#13153B"
            style={{marginRight: 5}}
          />
          <Text style={[styles.postActionText]}>12</Text>
        </View>
        <Text style={styles.postActionComment}>NXTLevel Design</Text>
        <View style={styles.postActionImages}>
          <View style={styles.postCommentView}>
            <Image
              source={require('../../assets/img/profile-3.jpeg')}
              style={[styles.postCommentImg]}
            />
          </View>
          <View style={[styles.postCommentView, styles.alignLeft]}>
            <Image
              source={require('../../assets/img/profile-1.jpeg')}
              style={styles.postCommentImg}
            />
          </View>
        </View>
      </View>
      <View style={styles.postComments}>
        <View style={styles.commentContainer}>
          <View style={styles.postCommentAvatarView}>
            <Image
              source={require('../../assets/img/profile-3.jpeg')}
              style={styles.postCommentAvatar}
            />
          </View>
          <View style={styles.commentView}>
            <View style={styles.commenter}>
              <Text style={styles.commenterName}>Rhiana D</Text>
              <Icon
                name="heart-o"
                size={20}
                color="#999999"
                //   style={{marginRight: 5, fontWeight: '700'}}
              />
            </View>
            <View style={styles.postComment}>
              <Text style={styles.commentText}>Great Colors</Text>
            </View>
          </View>
        </View>
        <View style={styles.commentContainer}>
          <View style={styles.postCommentAvatarView}>
            <Image
              source={require('../../assets/img/profile-4.jpeg')}
              style={styles.postCommentAvatar}
            />
          </View>
          <View style={styles.commentView}>
            <View style={styles.commenter}>
              <Text style={styles.commenterName}>Rhiana D</Text>
              <Icon
                name="heart-o"
                size={20}
                color="#999999"
                //   style={{marginRight: 5, fontWeight: '700'}}
              />
            </View>
            <View style={styles.postComment}>
              <Text style={styles.commentText}>Awesome 🔥🔥🔥</Text>
            </View>
            <View style={styles.commenter}>
              <Text style={styles.commenterName}>3 likes</Text>
            </View>
          </View>
        </View>
        <View style={styles.addCommentContainer}>
          <View style={styles.addCommentAvatarView}>
            <Image
              source={require('../../assets/img/profile-3.jpeg')}
              style={styles.addCommentAvatar}
            />
          </View>
          <View style={styles.addCommentTextInput}>
            <TextInput
              placeholder="Add Comment..."
              placeholderTextColor="#8c8c8c"
              style={styles.addCommentTextInputStyle}
            />
          </View>
          <View>
            <Icon name="smile-o" color={'#e42c67'} size={25} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PostDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#13153B',
    flex: 1,
  },
  appbarView: {
    flexDirection: 'row',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    zIndex: 3,
    marginHorizontal: 10,
  },
  appbarTextIcon: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    alignItems: 'center',
  },
  appBarTitleText: {
    marginLeft: 20,
    color: '#fff',
    fontSize: 23,
    fontFamily: 'Poppins-SemiBold',
  },
  postImgView: {position: 'absolute', height: '55%', width: '100%', zIndex: 2},
  postImg: {
    height: '100%',
    width: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  postDetail: {
    zIndex: 1,
    marginTop: '74%',
    paddingHorizontal: 25,
    backgroundColor: '#A452FF',
    height: 170,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  postTitleText: {
    flex: 1,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: '#fff',
  },
  postAction: {
    marginTop: 70,
    zIndex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  postActionText: {
    color: '#f2f2f2',
    fontSize: 13,
    fontWeight: '900',
  },
  postActionComment: {
    marginVertical: 5,
    color: '#f2f2f2',
    fontSize: 10,
    fontWeight: '900',
  },
  postActionImages: {
    flexDirection: 'row',
  },
  postCommentView: {
    height: 25,
    width: 25,
    backgroundColor: '#fff',
    borderRadius: 13.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postCommentImg: {
    height: '85%',
    width: '85%',
    borderRadius: 10,
  },
  alignLeft: {position: 'absolute', left: 18},
  commentContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 40,
  },
  postComments: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
  postCommentAvatarView: {
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postCommentAvatar: {
    height: '90%',
    width: '90%',
    borderRadius: 20,
  },
  commentView: {
    width: '88%',
    paddingHorizontal: 20,
  },
  commenter: {
    flexDirection: 'row',
  },
  commenterName: {
    flex: 1,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: '#999999',
  },
  postComment: {},
  commentText: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
  },
  addCommentContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  addCommentAvatarView: {
    backgroundColor: '#fff',
    height: 25,
    width: 25,
    borderRadius: 20,
  },
  addCommentAvatar: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  addCommentTextInput: {
    flex: 1,
    marginLeft: 10,
  },
  addCommentTextInputStyle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
  },
});
