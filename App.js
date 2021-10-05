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

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import Inicio from './views/Inicio';
import NuevoCliente from './views/NuevoCliente';
import DetallesCliente from './views/DetallesCLiente';
import BarraSuperior from './components/ui/Barra';

const Stack = createStackNavigator();

// Definir el tema

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1774F2',
    accent: '#0655BF',
  },
};

const App = () => {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={{
              headerTitleAlign: 'center',
              headerStyle: {backgroundColor: theme.colors.primary},
              headerTintColor: theme.colors.surface,
              headerTitleStyle: {fontWeight: 'bold'},
            }}>
            <Stack.Screen
              name="Inicio"
              component={Inicio}
              options={({navigation, route}) => ({
                // headerLeft: props => (
                //   <BarraSuperior
                //     {...props}
                //     navigation={navigation}
                //     route={route}
                //   />
                // ),
              })}
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
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
