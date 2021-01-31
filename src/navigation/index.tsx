import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackNavigationProp } from "@react-navigation/stack";
import Login from "../screens/login";
import { colors } from "../theme/colors";
import Signup from "../screens/signup";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.charcoal.regular,
        },
        headerTitleStyle: {
          color: colors.white,
        },
      }}
      initialRouteName="Login"
    >
      <Stack.Screen
        name="Login"
        options={{
          title: "LetStream",
        }}
        component={Login}
      />
      <Stack.Screen
        name="Signup"
        options={{
          title: "LetStream",
        }}
        component={Signup}
      />
    </Stack.Navigator>
  );
}

export default Navigation;

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};
