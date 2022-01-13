import React, { useState, useCallback, useEffect, useLayoutEffect } from 'react'
import { StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native'
import { GiftedChat, Bubble, MessageText, Send} from 'react-native-gifted-chat'
import { collection, addDoc, orderBy, query, onSnapshot, where, getDocs, getDoc } from '@firebase/firestore';
import { signOut } from '@firebase/auth';
import {auth, database} from '../config/firebase'

export default function ChatScreen({navigation,route}) {
  
  const [messages, setMessages] = useState([
    /*
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: 2,
      locked:true,
    },*/
    
  ]);

 
  useLayoutEffect(() => {
    const collectionRef = collection(database, 'chats');
    const q = query(collectionRef,  where('_id', '==',route.params.userID ), where ('_rid', '==', 1));
    console.log(q)
    const unsubscribe = onSnapshot(q, querySnapshot => {
      setMessages(
        querySnapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
          locked: doc.data().locked
        }))
      );
    });

  return unsubscribe;
  });

  const onSend = useCallback((messages = []) => {
    
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const {id,  createdAt, text, user} = messages[0]
    const _id = route.params.userID
    const _rid = user._id 
    const _cid = _rid + _id
    const locked = false
    addDoc(collection(database, 'chats'), {
      _id,
      _rid,
      _cid,
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