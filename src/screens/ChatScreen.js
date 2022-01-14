import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react'
import { StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native'
import { GiftedChat, Bubble, MessageText, Send} from 'react-native-gifted-chat'
import firestore from '@react-native-firebase/firestore';

export default function ChatScreen({navigation,route}) {
  
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    const subscriber = firestore()
      .collection('chats')
      .where('sender_id_pair', 'in',[[route.params.userID, 1], [1, route.params.userID]])
      .orderBy('createdAt','desc')
      .onSnapshot(querySnapshot => {
        setMessages(
          querySnapshot.docs.map(doc => ({
            _id: doc.data()._id,
            sender_id: doc.data().sender_id,
            _rid: doc.data()._rid,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
            locked: doc.data().locked
          }))
        );
      });
    return subscriber;
  });

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const {_id, createdAt, text, user} = messages[0]
    const sender_id_pair = [user._id, route.params.userID]
    const sender_id = user._id
    const _rid = route.params.userID
    const locked = false
    firestore().collection('chats').add({
      _id,
      sender_id,
      _rid,
      sender_id_pair,
      createdAt,
      text,
      user,
      locked
    });
  }, [])
 

  const CustomMessageText = (props) => {
    const { currentMessage } = props;
    return (
      <TouchableOpacity onPress={()=>{alert("Locked")}}>
        <Image
          style={styles.lockedLogo}
          source={require('../../assets/lock.jpeg')}
        />
      </TouchableOpacity>
    );  
  }

  const renderMessageText = (props) => {
    const { currentMessage } = props;
    if (currentMessage.locked){
      return <CustomMessageText {...props} />
    }
    return <MessageText {...props} />
  };

  const renderSend= (props) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', height: 60 }}>
      <TouchableOpacity onPress={()=>{alert("Locked")}}>
        <Image
          style={styles.lockedLogo}
          source={require('../../assets/lock.jpeg')}
        />
      </TouchableOpacity>
      <Send {...props}>
      </Send>
    </View>
  )

  return (
    <GiftedChat
      renderMessageText = {renderMessageText}
      renderSend = {renderSend}
      messages= {messages}
      onSend= {messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

const styles = StyleSheet.create({
  lockedLogo: {
    width: 50,
    height: 50,
  },
})
