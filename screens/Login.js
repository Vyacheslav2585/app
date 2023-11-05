import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  return (
    <KeyboardAvoidingView
    style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
             placeholder='email'
             value={email}
             onChangeText={text=>{setEmail(text)}}
             style={styles.input}
        />
          <TextInput
             placeholder='password'
             value={password}
             onChangeText={text=>{setPassword(text)}}
             style={styles.input}
             secureTextEntry
             nativeID='App1'
        />
       
         </View>
         <View style={styles.buttonConainer}>
            <TouchableOpacity
            onPress={()=>{}}
            style={styles.button}
            >
                <Text  style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>{}}
            style={[styles.button, styles.buttonOutLine]}
            >
                <Text style={styles.buttonOutLinetext}>
                    Registry
                </Text>
            </TouchableOpacity>
         </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
   
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    inputContainer:{
        width:'80%',
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5
    },
    buttonConainer:{
        width:'60%',
        justifyContent:"center",
        alignItems:"center",
        marginTop:40
    },
    button:{
        backgroundColor:'#0782F9',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems:"center"
    },
    buttonText:{
        color:"white",
        fontWeight:"700",
        fontSize:16,
    },
    buttonOutLine:{
        marginTop:5,
        backgroundColor:"white",
        borderColor:'#0782F9',
        borderWidth:2,
    },
    buttonOutLinetext:{
        color:"#0782F9",
        fontWeight:"700",
        fontSize:16,
    }

})