import React from 'react';
import { Button } from 'react-native-paper';

const BarraSuperior = ({navigation, route}) => {
    console.log(navigation)
    const handlePress = () => {
        navigation.navigate('NuevoCliente')
    }
    return ( 
        <Button icon="plus" color="#FFF" onPress={() => handlePress()}>
            Cliente
        </Button>
     );
}
 
export default BarraSuperior;