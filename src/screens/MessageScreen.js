import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';


const Messages = [
  {
    userName: 'Jenny Doe',
//      userImg: require('../assets/users/user-3.jpg'),
    id: '1',
    message:{
      _id: '1',
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
    id: '2',
    message:{
      _id: '1',
      text: 'Hey there, this is my test for a post of my social app in React Native.',
      createdAt: new Date(),
      user: {
        _id: '3',
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
      locked:true,
    },
  },
]

export default function MessageScreen({navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data ={Messages}
        keyExtractor={item=>item.id}
        renderItem={({item}) => (
          <TouchableOpacity 
            style = {styles.profile}
            onPress={() => navigation.navigate('Chat', {userName: item.userName, messages: item.message})}
          >
            <View style={styles.userInfo}>
              <View style={styles.imgWrapper}>
                <Image
                  style={styles.userImg}
                  source={item.message.user.avatar}
                />
              </View>
              <View style={styles.textSection}>
                <Text style = {styles.userName}> {item.userName}</Text>
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
  container: {
    flex: 1, 
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  profile:{
    width:'100%',
  },
  textSection:{
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 399
  },
  userInfoText:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  userName:{
    fontSize: 14,
    fontWeight: 'bold',
  },
  postTime:{
    fontSize: 12,
    color: '#666',
  },
  messageText:{
    fontSize: 14,
    color: '#333333',
  },
  imgWrapper:{
    paddingTop: 15,
    paddingBottom: 15,
  },
  userImg:{
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo:{
    flexDirection:'column',
    justifyContent:'space-between',
  },
});
