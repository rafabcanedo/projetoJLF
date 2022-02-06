import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default class Login extends Component {
    render() {
    return(
    <ScrollView style={styles.scrollContainer}>
     <View style={styles.container}>
      <Image 
       source={require('../../assets/images/logoRed.png')}
       resizeMode='center'
       style={styles.image} /> 
     
     <Text style={styles.textSuport}>Escreve abaixo o código de barras:</Text>
     <TextInput name="Código de barras" style={styles.input} />

     <TouchableOpacity
     style={styles.botao}
     >
     <Text style={styles.botaoEntrar}>Buscar</Text>
     </TouchableOpacity>
     
     <TouchableOpacity
         style={styles.botaoVoltar}
         onPress={() => {this.props.navigation.navigate('Home')}}
         >
         <Text style={styles.botaoEntrar}>Voltar</Text>
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
    input: {
        width: '90%',
        height: 50,
        borderRadius: 100,
        marginVertical: 10,
        borderWidth: 2.5,
        marginTop: 20,
    },
    textSuport: {
        fontSize: 15,
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#0092CA',
        marginTop: 60,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoVoltar: {
        width: 300,
        height: 42,
        backgroundColor: '#0092CA',
        marginTop: 60,
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