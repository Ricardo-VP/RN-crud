import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {
  TextInput,
  Headline,
  Button,
  Paragraph,
  Dialog,
  Portal,
} from 'react-native-paper';

import globalStyles from '../styles/global';

const NuevoCliente = ({navigation, route}) => {
  const {setConsultarAPI} = route.params;
  // campos formulario
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');

  const [alerta, setAlerta] = useState(false);

  // detectar si estamos editando
  useEffect(() => {
    if (route.params.cliente) {
      const {nombre, telefono, correo, empresa} = route.params.cliente; // destructuring
      setNombre(nombre);
      setTelefono(telefono);
      setCorreo(correo);
      setEmpresa(empresa);
    }
  }, []);

  const guardarCliente = async () => {
    // Validar campos
    if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
      setAlerta(true);
      return;
    }

    // Generar el cliente
    const cliente = {
      nombre,
      telefono,
      correo,
      empresa,
    };

    // Generar el cliente en la API
    // SI estamos editando o creando un cliente nuevo
    if (route.params.cliente) {
      // Actualizar el cliente
      const {id} = route.params.cliente;
      const url = `http://10.0.2.2:3000/clientes/${id}`;
      // Solo android
      try {
        await axios.put(url, cliente);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        if (Platform.OS === 'ios') {
          await axios.post('http://localhost:3000/clientes', cliente);
        } else {
          await axios.post('http://10.0.2.2:3000/clientes', cliente);
        }
      } catch (error) {
        console.log(error);
      }
    }

    // Redireccionar a la pantalla de clientes
    navigation.navigate('Inicio');

    // Limpiar los campos
    setNombre('');
    setTelefono('');
    setCorreo('');
    setEmpresa('');

    // Consultar la API
    setConsultarAPI(true);
  };

  return (
    <>
      <View style={globalStyles.contenedor}>
        <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
        <TextInput
          label="Nombre"
          placeholder="Juan"
          onChangeText={texto => setNombre(texto)}
          value={nombre}
          style={styles.input}
        />
        <TextInput
          label="Teléfono"
          placeholder="1234567890"
          onChangeText={texto => setTelefono(texto)}
          style={styles.input}
          value={telefono}
        />
        <TextInput
          label="Correo"
          placeholder="correo@correo.com"
          onChangeText={texto => setCorreo(texto)}
          style={styles.input}
          value={correo}
        />
        <TextInput
          label="Empresa"
          placeholder="Nombre Empresa"
          onChangeText={texto => setEmpresa(texto)}
          style={styles.input}
          value={empresa}
        />
        <Button
          icon="pencil-circle"
          mode="contained"
          onPress={() => guardarCliente()}>
          Guardar cliente
        </Button>
        <Portal>
          <Dialog visible={alerta} onDismiss={() => setAlerta(false)}>
            <Dialog.Title>Error</Dialog.Title>
            <Dialog.Content>
              <Paragraph> Todos los campos son obligatorios</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setAlerta(false)}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
});

export default NuevoCliente;
