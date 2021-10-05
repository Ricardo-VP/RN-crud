import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  TextInput,
  Headline,
  Button,
  Paragraph,
  Dialog,
  Portal,
} from 'react-native-paper';

import globalStyles from '../styles/global';

const NuevoCliente = () => {
  // campos formulario
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [empresa, setEmpresa] = useState('');

  const [alerta, setAlerta] = useState(false);

  const guardarCliente = () => {
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

    // Redireccionar a la pantalla de clientes

    // Limpiar los campos
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
