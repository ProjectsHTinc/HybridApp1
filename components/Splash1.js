import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

export default class Splash extends React.Component {

  static navigationOptions = () => {
    return {
        header: () => null
      }
    };

  constructor(props) {
    super(props);
    this.state = {};
}

    componentDidMount() {
      setTimeout(() => {
          this.props.navigation.navigate('LandingScreen')}, 3000);
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Text style={styles.title}>{`Little Amore`}</Text> */}
                <Image source={require('./images/splash.jpg')}
                 style={{width: '100%', height: '100%'}}>
                 </Image>
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
        width: null,
        height: null,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#81c341'
    }
})
