/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Image } from 'react-native';
import { InputToolbar, Actions, Composer, Send } from 'react-native-gifted-chat';

export const renderInputToolbar = (props) => (
  <InputToolbar
    {...props}
  />
);

export const renderActions = (props) => (
  <Actions/>
);

export const renderComposer = (props) => (
  <Composer
    {...props}
    textInputStyle={{
      // color: '#222B45',
      // backgroundColor: '#EDF1F7',
      // borderWidth: 1,
      // borderRadius: 5,
      // borderColor: '#E4E9F2',
      // paddingTop: 8.5,
      // paddingHorizontal: 12,
      // marginLeft: 0,
    }}
  />
);

export const renderSend = (props) => (
  <Send
    {...props}
    containerStyle={{
      // width: 44,
      // height: 44,
      // alignItems: 'center',
      // justifyContent: 'center',
      // marginHorizontal: 4,
    }}
  >
  </Send>
);