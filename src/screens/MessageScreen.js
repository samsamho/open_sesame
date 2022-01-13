import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';


const Messages = [
    {
      
      userName: 'Jenny Doe',
//      userImg: require('../assets/users/user-3.jpg'),

      message:{
        _id: 1,
        text: 'Hey there, this is my test for a post of my social app in React Native.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
        locked:false,
      },
      
    },
    {
      userName: 'John Doe',
 //     userImg: require('../assets/users/user-1.jpg'),
      message:{
      _id: 1,
      text: 'Hey there, this is my test for a post of my social app in React Native.',
      createdAt: new Date(),
      user: {
      _id: 3,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
    locked:true,
},
     
    },
  ]

export default function MessageScreen({navigation }) {
    return (
        <View style={styles.Container}>
            <FlatList
            data ={Messages}
            keyExtractor={item=>item.id}
            renderItem={({item}) => (
            <TouchableOpacity 
            style = {styles.Profile}
            onPress={() => navigation.navigate('Chat', {userName: item.userName, messages: item.message, userID: item.message.user._id})}>
              <View style={styles.UserInfo}>
                <View style={styles.ImgWrapper}>
                   <Image
                    style={styles.UserImg}
                    source={item.message.user.avatar}
                    />
                </View>
                <View style={styles.TextSection}>
                  <Text style = {styles.UserName}> {item.userName}</Text>
                </View>
              </View>   
            </TouchableOpacity>
          )}
            >
          </FlatList>
        </View>
    );
};


const styles = StyleSheet.create({
  Container: {
    flex: 1, 
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  Profile:{
    width:'100%',
  },
  TextSection:{
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 399
  },
  UserInfoText:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  UserName:{
    fontSize: 14,
    fontWeight: 'bold',
  },
  PostTime:{
    fontSize: 12,
    color: '#666',
  },
  MessageText:{
    fontSize: 14,
    color: '#333333',
  },
  ImgWrapper:{
    paddingTop: 15,
    paddingBottom: 15,
  },
  UserImg:{
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  UserInfo:{
    flexDirection:'column',
    justifyContent:'space-between',
  },
});