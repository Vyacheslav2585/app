import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';



const Stack = createNativeStackNavigator();

export default function App() {
  
  const [currentScreen, setCurrentScreen] = useState('Login');
  const  onLoginSuccess = () => {
    // Логіка для успішного входу в систему
    setCurrentScreen('Home'); // При успішному вході змінюємо екран на Home
  };
  return (
    <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={currentScreen === 'Login' ? Login : Home} // Вибір компонента в залежності від поточного екрану
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
</NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
