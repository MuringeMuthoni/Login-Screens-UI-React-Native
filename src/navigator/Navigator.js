import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome, CreateAccount, SignIn,Dashboard } from "../screens";

const Stack = createStackNavigator();

const MainStackNavigator = ({initialRoute="WelcomeScreen"})=> {
    return (
        <Stack.Navigator initialRouteName={initialRoute} headerMode="none">
            <Stack.Screen name="WelcomeScreen" component={Welcome} />
            <Stack.Screen name="CreateAccountScreen" component={CreateAccount}/>
            <Stack.Screen name="SignInScreen" component={SignIn} />
            <Stack.Screen name="DashboardScreen" component={Dashboard} />
        </Stack.Navigator>
    )
}
export default MainStackNavigator;