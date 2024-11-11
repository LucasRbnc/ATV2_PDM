import React, { useEffect, useState } from "react";
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme, styles } from '../themes/theme';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
    navigation: any;
}

const TelaInicio: React.FC<Props> = ({navigation}) => {
    const [mostraInicio, setMostraInicio] = useState(true);

    useEffect(() =>{
        const timer = setTimeout(() => {
            setMostraInicio(false);
            navigation.replace('Drawer')
        }, 10000)

        return () => clearTimeout(timer);
    }, [])

    const handlePress = () =>{
        setMostraInicio(false);
        navigation.replace('Drawer')
    }

    if(!mostraInicio) return null;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bem-Vindo</Text>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TelaInicio;