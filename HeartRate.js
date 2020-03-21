import * as React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          id: '',
          heartRate: '',
        }
      }

    static navigationOptions = {
        title: 'Heart Rate',
        headerStyle: {
          backgroundColor: 'lightgrey', 
        },
        };

    Exported = () => {
      if (this.state.id === '') {
        Alert.alert('Patient ID cannot be empty!');
        return;
      }

      if (this.state.heartRate === '') {
        Alert.alert('Heart rate cannot be empty!');
        return;
      }
      alert('Data has imported! Thank You!');
      this.props.navigation.navigate('Home');
  }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Patient ID: </Text>
                <TextInput
                    style={styles.input}
                    placeholder= {'Patient ID'}
                    autoCorrect={false}
                    clearButtonMode="always"
                    onChangeText={(id) => this.setState({id})}
                />

                <Text style={styles.text}>Heart Rate: </Text>
                <TextInput
                    style={styles.input}
                    placeholder= {'Username'}
                    autoCorrect={false}
                    clearButtonMode="always"
                    onChangeText={(heartRate) => this.setState({heartRate})}
                />

              <TouchableOpacity
                style = {styles.button}
                onPress={this.Exported.bind(this)}
              >
                <Text style = {styles.buttonText}>Submit</Text>
              </TouchableOpacity>
               
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f3f4',
        height: '100%',
        alignItems: 'center',
        padding: '5%'
      },
    input: {
        width: 300,
        height: 50,
        borderWidth: 2,
        borderColor: 'lightgrey',
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        margin: 5,
        marginTop: 15,
        borderRadius: 15,
    },
    buttonText: {
        color: 'rgba(10, 10, 10, 0.7)',
        fontSize: 20,
    },
    text: {
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        padding: '3%'
    },
  });
  