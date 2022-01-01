import React, { useState, useCallback, useEffect } from 'react'
import {Text, View, Stylesheet, Button, Switch, TouchableOpacity} from 'react-native'
import { GiftedChat, Bubble, MessageText} from 'react-native-gifted-chat'
 
export default function ChatScreen({navigation }) {
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    setMessages([
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
      },
    ])
  }, [])
 
  const onSend = useCallback((messages = []) => {
    messages.locked = true;
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
 

  const CustomMessageText = (props) => {
    const {
      currentMessage,
    } = props;

    return (
      <View >

      <Button>Locked</Button>

      </View>
    );  
  }

 const renderMessageText = (props) => {
  const {
    currentMessage,
  } = props;
  if(currentMessage.locked){
    return <CustomMessageText {...props} />
  }
  return <MessageText {...props} />
};

  
  return (
    <GiftedChat
      renderMessageText = {renderMessageText}
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}