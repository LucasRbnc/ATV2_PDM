import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LotteryProvider } from './src/contexts/context';
import { StatusBar } from 'expo-status-bar';
import DrawerNavigator from './src/routes/DrawerNavigator';
import { theme } from "./src/themes/theme";
import TelaInicio from './src/pages/inicializacao';

export type RootStackParamList = {
  TelaInicio: undefined;
  Drawer: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <LotteryProvider>
      <NavigationContainer>
      <StatusBar style="dark" backgroundColor={theme.colors.background}/>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="TelaInicio" component={TelaInicio}/>
          <Stack.Screen name="Drawer" component={DrawerNavigator}/>
        </Stack.Navigator>
      </NavigationContainer>
    </LotteryProvider>
  );
};

export default App;