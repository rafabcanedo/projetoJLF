import React from 'react';
import {StatusBar} from 'expo-status-bar';
import { StyleSheet, Button, View, Modal, Text } from 'react-native';

import Qrcode from './Qrcode';

export default function Scanner(){

    const [modalVisible, setModalVisible] = React.useState(false);

    const [type, setType] = React.useState("");
    const [data, setData] = React.useState("");

    const onCodeScanned = (type, data) => {
        setType(type);
        setData(data);
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <Modal
            visible={modalVisible}
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
            >
            <View style={styles.viewModal}>
            <Qrcode  onCodeScanned={onCodeScanned} />
            <Button title="Voltar" style={styles.buttonContainer} onPress={() => setModalVisible(false)} />
            </View>
            </Modal>

            <StatusBar style="auto" />

            <Text>Type: {type}</Text>
            <Text>Data: {data}</Text>
            <Button title="Scannear" onPress={() => setModalVisible(true)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: "lightgrey",
    },
    //buttonContainer: {},
});