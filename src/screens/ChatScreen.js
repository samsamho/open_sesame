import React, { useState, useCallback, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, Image, View, Text} from 'react-native'
import { GiftedChat, Bubble, MessageText, Send} from 'react-native-gifted-chat'


export default function ChatScreen({navigation, route}) {
  
  const [messages, setMessages] = useState([
    /*
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
      locked:true,
    },*/
    route.params.messages
  ]);
  
  const onSend = useCallback((messages = []) => {
    messages.locked = true;
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
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