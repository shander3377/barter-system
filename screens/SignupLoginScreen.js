import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import SantaAnimation from "../components/santaClaus.js";
import db from "../config.js";
import firebase from "firebase";
export default class SignupLoginScreen extends React.Components {
  constructor(props) {
    super(props);
    this.state = {
      emailId: "",
      password: "",
     
    };
  }

     

  
  
  userLogin = async (email, password) => {
    firebase
      .auth()
      .loginUserWithEmailAndPassword(email, password)
      .then((response) => {
        return Alert.alert("Succesfully Logged In");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errormsg = error.message;
        return Alert.alert(errormsg);
      });
  };
  userSignUp = async (email, password, confirmPass) => {
   
      firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
      
        return Alert.alert("User Succefully added");
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errormsg = error.message;
        return Alert.alert(errormsg);
      });
    }
  
  render() {
    return (
      <View style={styles.Container}>
      <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
      <Text
        style={styles.Title}
        >Registration</Text>
    
      <TextInput
        style={styles.formTextInput}
        placeholder ={"Email"}
        keyboardType ={'email-address'}
        onChangeText={(text)=>{
          this.setState({
            emailId: text
          })
        }}
      /><TextInput
        style={styles.formTextInput}
        placeholder ={"Password"}
        secureTextEntry = {true}
        onChangeText={(text)=>{
          this.setState({
            password: text
          })
        }}
      />
    
      <View style={styles.Button}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={()=>
            this.userSignUp(this.state.emailId, this.state.password)
          }
        >
        <Text style={styles.registerButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Button}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={()=>
            this.userSignIn(this.state.emailId, this.state.password)
          }
        >
        <Text style={styles.registerButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
</View>    
    );
  }
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#F8BE85',
   alignItems: 'center',
   justifyContent: 'center'
 },
 profileContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
 },
 title :{
   fontSize:65,
   fontWeight:'300',
   paddingBottom:30,
   color : '#ff3d00'
 },
 loginBox:{
   width: 300,
   height: 40,
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: 20,
   margin:10,
   paddingLeft:10
 },
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 Title :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#ff5722',
   margin:50
 },
 modalContainer:{
   flex:1,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"#ffff",
   marginRight:30,
   marginLeft : 30,
   marginTop:80,
   marginBottom:80,
 },
 formTextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
 },
 registerButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:1,
   borderRadius:10,
   marginTop:30
 },
 registerButtonText:{
   color:'#ff5722',
   fontSize:15,
   fontWeight:'bold'
 },
 cancelButton:{
   width:200,
   height:30,
   justifyContent:'center',
   alignItems:'center',
   marginTop:5,
 },

 Button:{
   width:300,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"#ff9800",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10
 },
 buttonText:{
   color:'#ffff',
   fontWeight:'200',
   fontSize:20
 }
})

