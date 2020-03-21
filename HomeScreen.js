import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';


export default class ProfileScreen extends React.Component {

  static navigationOptions = {
    title: 'Patient Check-Up',
    headerStyle: {
      backgroundColor: 'lightgrey', 
    },
    };

    render() {
        return (
            <View style={styles.container}>
              <TouchableOpacity
                style = {styles.button}
                onPress={() => this.props.navigation.navigate('BloodPressure')}
              >
                <Text style = {styles.buttonText}>Blood Pressure</Text>
              </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.button}
                    onPress={() => this.props.navigation.navigate('HeartRate')}
                >
                    <Text style = {styles.buttonText}>Heart Rate</Text>
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
      },
    profile:{
        paddingRight: 30,
        flexDirection:'row',
        marginTop: 40,
        backgroundColor: '#cee8f0',
        borderRadius: 30,
        width: '95%',
        height: 110,
        alignItems: 'stretch',
    },
    text: {
      marginLeft: -40,
      marginBottom: '2%',
    },
    image: {
        marginLeft: -40,
        marginTop: 5,
        height: 100,
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
    buttonImg: {
        width: 35,
        height: 35,
        margin: 10
    },
    buttonText: {
        color: 'rgba(10, 10, 10, 0.7)',
        fontSize: 20,
    }
  });
  