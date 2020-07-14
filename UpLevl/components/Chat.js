import React, {useState, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {ObjectID} from 'bson';
// import initialMessages from './messages';
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
import {getDummyMessage, postMessage} from '../services/messageService';

// import messages from './messages';

class Chat extends React.Component {
  state = {
    messages: [],
    newText: '',
  };

  async componentDidMount() {
    const initialMessages = await getDummyMessage();

    this.setState({
      messages: initialMessages.reverse(),
    });
  }

  onSend = async newMessage => {
    let newMessageList = GiftedChat.append(this.state.messages, newMessage);
    this.setState({
      messages: newMessageList,
    });

    const botResponse = await postMessage(newMessage);

    newMessageList = GiftedChat.append(this.state.messages, botResponse);

    this.setState({
      messages: newMessageList,
    });
  };

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        text={this.state.newText}
        onInputTextChanged={text => this.setState({newText: text})}
        onSend={messages => {
          const message = messages[0];
          message._id = new ObjectID().toHexString();
          this.onSend(message);
        }}
        user={{
          _id: 1,
          name: 'Username',
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
