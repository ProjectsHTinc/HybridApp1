import React from 'react'
import { Button } from 'react-native-elements'
import {
    StyleSheet, Text, View, Image,
    TextInput, TouchableOpacity} from 'react-native'

import eyeImgHide from './images/hide_password.png';
import eyeImgShow from './images/show_password.png';

export default class SignIn extends React.Component {

    static navigationOptions = () => {
        let headerTitle = 'Sign Up';
        let headerStyle = { backgroundColor: 'rgb(129, 195, 65)' };
        let headerTitleStyle = { color: 'white', justifyContent: 'center', textAlign: 'center',
        alignSelf: 'center' };
        let headerTintColor = 'white';
        return { headerTitle, headerStyle, headerTitleStyle, headerTintColor};
    };
    constructor(props) {
        super(props);
        this.state = {
        showPass: true,
        press: false,
        nameField : '',
        mobileNumberField : '',
        emailField : '',
        passwordField : ''
        };
        this.showPass = this.showPass.bind(this);
    }

    showPass() {
        this.state.press === false
            ? this.setState({showPass: false, press: true})
            : this.setState({showPass: true, press: false});
    } 

    renderImage() {
        var imgSource = this.state.press? eyeImgShow : eyeImgHide;
        return (
            <Image
            style={ styles.iconEye }
            source={ imgSource }
            />
        );
    }
    
    saveData()
    {
       

        let nameValue = this.state.nameField;
        let mobile = this.state.mobileNumberField;
        let email = this.state.emailField;
        let passwordValue = this.state.passwordField;
        let mobileKey  = '2';
        let mobileType = '2';
        let newletter  = '1';
        
        if (nameValue.length === 0)
        {
            alert("Please Enter the username");
        }
        else if (mobile .length === 0)
        {
            alert("Please Enter the mobile");
        }
        else if (email.length === 0)
        {
            alert("Please Enter the email");
        }
        else if (passwordValue.length === 0)
        {
            alert("Please Enter the password");
        }
        else
        {
        let apicall = global.baseurl + "registration"
        fetch(apicall, {
        method: 'POST',
        headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),
        //body:"name = 'nameValue' & phone = mobile & email= email & password= passwordValue & newsletter= newletter & mob_key= mobileKey & mobile_type= mobileType" // <-- Post parameters
        body: JSON.stringify({
            name: nameValue,
            phone: mobile,
            email: email,
            password: passwordValue,
            newsletter: newletter,
            mob_key: mobileKey,
            mobile_type: mobileType ,
          }),
        })
        .then((response) => response.json())
        .then((responseText) => {
            console.log(responseText)
        if(responseText.status==='success'){
            alert("User created successfully");
            this.props.navigation.navigate('LoginScreen')
        } else (
            alert(responseText.msg)
        )
        })
        .catch((error) => {
            console.error(error);
        });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.txtContainer}>
                <View >
                        <TextInput
                        style={{marginTop:15,marginLeft:60,marginRight:60,borderColor:'lightgrey',
                        borderWidth:1,}}
                            placeholder="Name"
                            autoCapitalize={'none'}
                            returnKeyType={'done'}
                            autoCorrect={false}
                            placeholderTextColor="lightgrey"
                            underlineColorAndroid="transparent"
                            onChangeText={nameField => this.setState({nameField})}
                        value = {this.state.nameField}
                        />
                    </View>
                    <View >
                        <TextInput
                        style={{marginTop:15,marginLeft:60,marginRight:60,borderColor:'lightgrey',
                        borderWidth:1,}}
                            placeholder="Mobile Number"
                            autoCapitalize={'none'}
                            returnKeyType={'done'}
                            autoCorrect={false}
                            placeholderTextColor="lightgrey"
                            underlineColorAndroid="transparent"
                            onChangeText={mobileNumberField => this.setState({mobileNumberField})}
                        value = {this.state.mobileNumberField}
                        />
                        
                    </View>
                    <View >
                        <TextInput
                        style={{marginTop:15,marginLeft:60,marginRight:60,borderColor:'lightgrey',
                        borderWidth:1,}}
                            placeholder="Email"
                            autoCapitalize={'none'}
                            returnKeyType={'done'}
                            autoCorrect={false}
                            placeholderTextColor="lightgrey"
                            underlineColorAndroid="transparent"
                            onChangeText={emailField => this.setState({emailField})}
                        value = {this.state.emailField}
                        />
                        
                    </View>
                    
                    <View >
                        <TextInput
                            style={{marginLeft:60,marginRight:60,borderColor:'lightgrey',
                            borderWidth:1,marginTop:15,}}
                            secureTextEntry={this.state.showPass}
                            placeholder="Password"
                            autoCapitalize={'none'}
                            returnKeyType={'done'}
                            autoCorrect={false}
                            placeholderTextColor="lightgrey"
                            underlineColorAndroid="transparent"
                            onChangeText={passwordField => this.setState({passwordField})}
                            value = {this.state.passwordField}
                        />
                        
                        
                        <TouchableOpacity
                            style = {{padding: 10,marginTop:18,
                                flexDirection:'row',
                                position: 'absolute', right: 60,
                                justifyContent:'flex-end',}}
                            activeOpacity={0.7}
                            onPress={() =>{this.showPass()}}>
                            {
                            this.renderImage()}
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View style= {styles.container1}>
                    <Button 
                        buttonStyle={styles.buttonSignin}
                        title="Sign up"
                        onPress={()=>{this.saveData()}}/>
                    <Text style={styles.createacuntbtn}
                        onPress={() => 
                        this.props.navigation.navigate('SigninScreen')}>
                        {"Already have an account"}
                    </Text>                
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    btnEye: {
        alignSelf: 'flex-end',
        top: 15,
        right:90,
    },
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
    },
    container1: {
        top: 40,
        flex: 1
    },
    txtContainer: {
        marginTop: 80,
        justifyContent: 'center',
        flex: 1
    },
    createacuntbtn: {
        color: '#81c341',
        marginTop: 15,
        fontSize: 12,
        textAlign: 'center',
        opacity: 0.9
    },
    nametextField: {
        alignSelf: 'center',
        bottom:10,
        width:220,
        height: 55,
        paddingHorizontal: 10,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10
   },
    mobileNumbertextField: {
        alignSelf: 'center',
        bottom:10,
        width:220,
        height: 55,
        paddingHorizontal: 10,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10
},
    emailtextField: {
        alignSelf: 'center',
        bottom:10,
        width:220,
        height: 55,
        paddingHorizontal: 10,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 5
},
    passwordtextField: {
        alignSelf: 'center',
        width:220,
        height: 55,
        paddingHorizontal: 10,
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 5
},
   buttonSignin: {
        backgroundColor: "#81c341",
        width: 150,
        height: 45,
        borderColor: "#81c341",
        borderWidth: 0,
        borderRadius: 30,
        alignSelf: 'center',
    }
})

