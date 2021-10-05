import React, {useEffect, useState} from 'react';
import {Text, FlatList, View} from 'react-native';
import axios from 'axios';
import {List, Headline, Button, FAB} from 'react-native-paper';
import globalStyles from '../styles/global';

const Inicio = ({navigation}) => {
  // State de la app
  const [clientes, setClientes] = useState([]);
  const [consultarAPI, setConsultarAPI] = useState(true);

  useEffect(() => {
    const obtenerClientesdeApi = async () => {
      try {
        // SOLO android
        const resultado = await axios.get('http://10.0.2.2:3000/clientes');
        setClientes(resultado.data);
        setConsultarAPI(false); // Para que no se vuelva a ejecutar
      } catch (error) {
        console.log(error);
      }
    }
    if (consultarAPI) {
      obtenerClientesdeApi();
    }
  }, [consultarAPI]);

  return (
    <View style={globalStyles.contenedor}>
      <Button
        icon="plus-circle"
        onPress={() => navigation.navigate('NuevoCliente', {setConsultarAPI})}>
        Nuevo Cliente
      </Button>
      <Headline style={globalStyles.titulo}>
        {clientes.length > 0 ? 'Clientes' : 'Aún no hay clientes'}
      </Headline>
      <FlatList
        data={clientes}
        keyExtractor={cliente => cliente.id.toString()}
        renderItem={({item}) => (
          <List.Item
            title={item.nombre}
            description={item.empresa}
            onPress={() =>
              navigation.navigate('DetallesCliente', {
                cliente: item,
                setConsultarAPI,
              })
            }
          />
        )}
      />
      <FAB
        icon="plus"
        style={globalStyles.fab}
        onPress={() => navigation.navigate('NuevoCliente', {setConsultarAPI})}
      />
    </View>
  );
};

export default Inicio;
