import React, {Component} from 'react';
import { View, Alert, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Question from './Duvida';

export default class Home extends Component{

    render() {
    return(
        <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
            <Image 
            source={require('../../assets/images/logoRed.png')}
            resizeMode='center'
            style={styles.image} />       

        <TouchableOpacity
            style={styles.botao}
            onPress={() => {this.props.navigation.navigate('Scanner')}}
            >
            <AntDesign name="barcode" size={24} color="black" />
            <Text style={styles.botaoScanner}>Scanner com Câmera</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={styles.botao}
           onPress={() => {this.props.navigation.navigate('TextoCodigo')} }
        >
            <MaterialCommunityIcons name="format-text" size={24} color="black" />
            <Text style={styles.botaoText}>Digite o Código de Barras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.questionContainer}>
        <AntDesign name="questioncircle" size={24} color="#e3e3e3" />
        <Question style={styles.textQuestion} />
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
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        height: 42,
        backgroundColor: '#0092CA',
        marginTop: 40,
        borderRadius: 10,
        justifyContent: 'center',

    },
    botaoScanner: {
        fontSize: 17,
        fontWeight: '100',
        color: 'black',
    },
    botaoText: {
        fontSize: 17,
        fontWeight: '100',
        color: 'black',
    },
    questionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '35%',
    },
    textQuestion: {
        paddingLeft: 8,
        fontSize: 15,
    },
});