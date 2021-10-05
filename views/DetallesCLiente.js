import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Headline, Text, Button} from 'react-native-paper';
import globalStyles from '../styles/global';

const DetallesCliente = ({route}) => {
  const {nombre, telefono, correo, empresa,} = route.params.cliente;

  const mostrarConfirmacion = () => {
    Alert.alert(
      '¿Deseas eliminar este cliente?',
      'Un contacto eliminado no se puede recuperar',
      [
        {text: 'Si, Eliminar', onPress: () => eliminarCliente()},
        {text: 'Cancelar', style: 'cancel'},
      ],
    );
  };

  const eliminarCliente = () => {
    console.log('eliminando...');
  };

  return (
    <View style={globalStyles.contenedor}>
      <Headline style={globalStyles.titulo}>{nombre}</Headline>
      <Text style={styles.texto}>Empresa: {empresa}</Text>
      <Text style={styles.texto}>Correo: {empresa}</Text>
      <Text style={styles.texto}>Teléfono: {telefono}</Text>
      <Button
        style={styles.boton}
        mode="contained"
        icon="cancel"
        onPress={() => mostrarConfirmacion()}>
        Eliminar Cliente
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 18,
    marginbottom: 20,
  },
  boton: {
    marginTop: 100,
    backgroundColor: 'red',
  },
});

export default DetallesCliente;
