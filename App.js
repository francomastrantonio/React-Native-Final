import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Finder from './screens/finder';
//import Landing from './screens/landing';
//import Login from './screens/login';
import { Home, LandingContent, LoginContent, FinderContent, Header } from './screens/home';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./img/tinderWorldWideLogo.png')}
    />
      );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator style={{ justifyContent: 'center'}}>
        <Stack.Screen 
        name="Landing" component={LandingContent}
        options={{ headerTitle: props => <LogoTitle {...props} />,
        headerStyle: { backgroundColor: "#000000" } }} />

        <Stack.Screen 
        name="Login" component={LoginContent} 
        options={{ headerTitle: props => <LogoTitle {...props} />,
        headerStyle: { backgroundColor: "#000000" } }} />

        <Stack.Screen name="Finder" component={FinderContent} 
        options={{ headerTitle: props => <LogoTitle {...props} />,
        headerStyle: { backgroundColor: "#000000" } }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;