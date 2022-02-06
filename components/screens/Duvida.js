import React, {useRef} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

export default function Duvida(){
    const modalizeRef = useRef(null);

    function onOpen(){
        modalizeRef.current?.open();
    }

    return (
     <View style={StyleSheet.container}>

      <TouchableOpacity onPress={onOpen}>
          <Text style={styles.textContainer}>Tire sua Dúvida</Text>
      </TouchableOpacity>
      <Modalize
        ref={modalizeRef}
        snapPoint={180}
      >
        <View
            style={{
                flex: 1,
                height: 180,
                flexDireciton: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity style={styles.textHelp}>
                <Text>Scanner: Abrirá sua câmera para scannear o código de barras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textHelp}>
                <Text>Text: Abrirá uma tela para colocar o código de barras em forma de texto</Text>
            </TouchableOpacity>
        </View>
      </Modalize>
     </View>
   );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        color: '#e3e3e3',
    },
    textHelp: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 10,
        color: '#e3e3e3',
        padding: 15,
        borderRadius: 7,
    },
});