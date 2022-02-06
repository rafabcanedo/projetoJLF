import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const COLORS = {
    //ref: '',
    azul: '#0092CA',
    azulEscuro: '#132743',
    white: '#FFFFFF',
    red: '#FF0000',
};

export const SIZES = {
    base: 10,
    width,
    height,
};