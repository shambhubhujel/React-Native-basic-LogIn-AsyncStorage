import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar,
    AsyncStorage
} from "react-native";

const userInfo={username:'admin',password:'admin'}
class LogInScreen extends Component{
    static navigationOptions={
        header:null
    }
    constructor (props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <StatusBar backgroundColor="#3498db" barStyle="light-content"/>
                <View style={styles.logoCotainer}>
                    <Image style={styles.logo} source={require('../assets/icon.png')} />
                    <Text style={styles.title}>Log In </Text>
                </View>
                <TextInput style={styles.input} placeholder="Username" 
                    onChangeText={(username)=> this.setState({username})}
                    value={this.state.username}
                    autoCapitalize='none'
                />
                <TextInput style={styles.input} secureTextEntry placeholder="Password" 
                    onChangeText={(password)=> this.setState({password})}
                    value={this.state.password}
                />
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.userBtn} 
                    //onPress= {() => this.props.navigation.navigate('HomeScreen')}
                    onPress={this._login}
                    >
                        <Text style={styles.btnText}>LogIn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.userBtn}>
                        <Text style={styles.btnText}>SignUp</Text>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }
    _login=async()=>{
        if(userInfo.username===this.state.username && userInfo.password===this.state.password){
            alert('Logged In!!');
            await AsyncStorage .setItem('isLoggedIn','1');
            this.props.navigation.navigate('HomeScreen');
            

        }else{
            alert('Worong details!!!');
            
        }
    }
}

export default LogInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db'
    },
    logoCotainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        marginTop: 10,

        width: 160,
        textAlign: 'center',
        opacity: 0.5

    },
    input: {
        width: '90%',
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 10

    },
    btnContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:"90%",
        marginBottom:10
    },
    userBtn:{
        backgroundColor:"#FFD700",
        padding:15,
        width:"45%"
    },
    btnText:{
        fontSize:18,
        textAlign:"center",

    }


});
