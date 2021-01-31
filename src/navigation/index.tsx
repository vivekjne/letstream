import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login";
import { colors } from "../theme/colors";

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
    >
      <Stack.Screen
        name="Login"
        options={{
          title: "LetStream",
        }}
        component={Login}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
