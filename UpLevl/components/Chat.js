import React, {useState, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import initialMessages from './messages';
import {
  renderInputToolbar,
  renderActions,
  renderComposer,
  renderSend,
} from './InputToolbar';
import {
  renderAvatar,
  renderBubble,
  renderSystemMessage,
  renderMessage,
  renderMessageText,
  renderCustomView,
} from './MessageContainer.js';
import messages from './messages';

class Chat extends React.Component {
  state = {
    messages: [],
    newText: '',
  };

  componentDidMount() {
    this.setState({
      messages: initialMessages.reverse(),
    });
  }

  onSend = (newMessages = []) => {
    let newMessageList = GiftedChat.append(this.state.messages, newMessages);
    this.setState({
      messages: newMessageList,
    });

    let latestMessage = newMessages[newMessages.length - 1];
    if (latestMessage.user._ida === 1) {
      //handle repsonse gen
      let response = {
        _id: latestMessage._id + 1,
        text: 'Ok',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Up Levl',
        },
      };
    }
  };

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        text={this.state.newText}
        onInputTextChanged={text => this.setState({newText: text})}
        onSend={this.onSend}
        user={{
          _id: 1,
          name: 'Aaron',
          avatar: 'https://placeimg.com/150/150/any',
        }}
        alignTop
        alwaysShowSend
        scrollToBottom
        renderAvatarOnTop
        renderUsernameOnMessage
        bottomOffset={26}
        onPressAvatar={console.log}
        renderInputToolbar={renderInputToolbar}
        renderActions={renderActions}
        renderComposer={renderComposer}
        renderSend={renderSend}
        renderAvatar={renderAvatar}
        renderBubble={renderBubble}
        renderSystemMessage={renderSystemMessage}
        renderMessage={renderMessage}
        renderMessageText={renderMessageText}
        renderCustomView={renderCustomView}
        isCustomViewBottom
        messagesContainerStyle={{backgroundColor: 'white'}}
        parsePatterns={linkStyle => [
          {
            pattern: /#(\w+)/,
            style: linkStyle,
            onPress: tag => console.log(`Pressed on hashtag: ${tag}`),
          },
        ]}
      />
    );
  }
}
export default Chat;
