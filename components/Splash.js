import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
export default class Splash extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
        header: () => null
      }
    };

  constructor(props) {
    super(props);
    this.state = {};
}

    componentDidMount() {
      setTimeout(() => {this.props.navigation.navigate('LoginScreen')}, 3000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{`Little Amore`}</Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#81c341'
    }
})
