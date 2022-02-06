import React, {Component} from 'react';
import { Text, StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';


export default class Login extends Component {
    state = {
        nome: ''
    }

    render() {
    return (
    <ScrollView style={styles.scrollContainer}>
     <View style={styles.container}>
         <Image 
         source={require('../../assets/images/logoRed.png')}
         resizeMode="center"
         style={styles.image} />
         {/* QUEBRAR LINHA TITLE */}
         <Text style={styles.textTitle}>
             Seja Bem Vindo
         </Text>
         
         <View style={styles.viewPicker}>
             <Picker
             style={styles.pickerContainer}
             selectedValue= {this.state.nome}
             onValueChange={
                (itemValue, itemIndex) =>
               this.setState({nome: itemValue})
            }>
                <Picker.Item label="Escolha o Perfil:" value="" />
                <Picker.Item label="Rafael" value="Rafael" />
                <Picker.Item label="Gabriel" value="Gabriel" />
                <Picker.Item label="José" value="José" />
                <Picker.Item label="Maria" value="Maria" />

             </Picker>
         </View>

         <TouchableOpacity
         style={styles.botao}
         onPress={() => {this.props.navigation.navigate('Home')}}
         >
         <Text style={styles.botaoEntrar}>Login</Text>
         </TouchableOpacity>
     </View>
     </ScrollView>
   );
  };
};

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 250,
        height: 250,
        marginVertical: 10,
    },
    textTitle: {
        fontFamily: 'Roboto',
        justifyContent: 'center',
        fontSize: 40,
        marginVertical: 10,
    },
    pickerContainer: {
        width: 300,
        marginTop: 30,
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#0092CA',
        marginTop: 120,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoEntrar: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
});