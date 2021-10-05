import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import axios from 'axios';

const Inicio = () => {

    // State de la app
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const obtenerClientesdeApi = async () => {
            try {
                // SOLO android
                const resultado = await axios.get('http://10.0.2.2:3000/clientes');
                setClientes(resultado.data);
            } catch (error) {
                console.log(error);
            }
        }
        obtenerClientesdeApi(); 
    }, []);

    return ( 
        <Text>Inicio</Text>
    );
}
 
export default Inicio;