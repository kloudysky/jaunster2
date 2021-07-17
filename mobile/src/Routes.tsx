import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import {Center} from './Center';
import {Button} from 'react-native';
import {AuthNavProps, AuthParamList} from './AuthParamList';
import {useEffect} from 'react';

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

function Login({navigation}: AuthNavProps<'Login'>) {
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
    </Center>
  );
}

function Register({navigation, route}: AuthNavProps<'Register'>) {
  return (
    <Center>
      <Text>Route name: {route.name}</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </Center>
  );
}

function Index() {
  return (
    <Center>
      <Text>I am the index screen</Text>
    </Center>
  );
}

export const Routes: React.FC<RoutesProps> = ({}) => {
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    //check if user is logged in or
  }, []);

  // if (loading) {
  //   return (
  //     <Center>
  //       <ActivityIndicator size="large" />
  //     </Center>
  //   );
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
