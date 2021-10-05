import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
 
import Inicio from './views/Inicio';
import NuevoCliente from './views/NuevoCliente';
import DetallesCliente from './views/DetallesCLiente';

const Stack = createStackNavigator();

// Definir el tema

const theme = {
  ...DefaultTheme,
}

console.log(theme)

const App = () => {
 
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Inicio"
        >
          <Stack.Screen 
            name="Inicio"
            component={Inicio}
          />
          <Stack.Screen 
            name="NuevoCliente"
            component={NuevoCliente}
            options={{
              title: 'Nuevo Cliente',
            }}
          />
          <Stack.Screen 
            name="DetallesCliente"
            component={DetallesCliente}
            options={{
              title: 'Detalles Cliente',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
