import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

class Home extends React.Component {
  state = {
    userNameInput: '',
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>
                    Enter your name:
                </Text>
                <TextInput
                    style={styles.nameInput}
                    placeholder="John Cena"
                    onChangeText={(text)=> {
                        this.setState({
                            userNameInput: text,
                        })
                    }}
                    value = {this.state.userNameInput}
                />
                <TouchableOpacity
                    onPress={() => {
                        Actions.chats({
                            userNameInput: this.state.userNameInput
                        });
                    }}>
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity> */}
        <View>
          <TouchableOpacity
            onPress={() => {
              Actions.chat();
            }}>
            <Text style={styles.buttonText}>Enter UpLevl</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 20,
  },
  nameInput: {
    height: 40,
    borderWidth: 2,
    borderColor: 'black',
    margin: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: 'black',
  },
});

export default Home;
