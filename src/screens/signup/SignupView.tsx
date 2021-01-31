import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import LinkButton from "../../components/shared/buttons/LinkButton";
import { colors } from "../../theme/colors";
import textStyles from "../../theme/common/textStyles";
import { large, regular, tiny } from "../../theme/metrics";
import { Link } from "@react-navigation/native";
import ActionButton from "../../components/shared/buttons/ActionButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Signup"
>;

type SignupViewProps = {
  navigation: ProfileScreenNavigationProp;
};

const SignupView = ({ navigation }: SignupViewProps) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign up with your mobile number</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          keyboardType="default"
          placeholderTextColor="#999"
          style={inputTextStyle}
        />
        <TextInput
          placeholder="Email address"
          keyboardType="email-address"
          placeholderTextColor="#999"
          style={inputTextStyle}
        />
        <TextInput
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={!toggleCheckBox}
          placeholderTextColor="#999"
          style={inputTextStyle}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
          tintColors={{ true: "#fff", false: "#fff" }}
        />
        <Text style={styles.checkboxText}>Show password</Text>
      </View>
      <ActionButton
        onPress={() => alert("clicked")}
        title="Continue"
        style={styles.signinButton}
        android_ripple={{
          color: colors.orangeYello.light,
        }}
      />
      <LinkButton
        onPress={() => navigation.navigate("Login")}
        style={styles.linkContainer}
        textStyle={styles.linkText}
        title="Already have an account?"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charcoal.regular,
    padding: large,
  },
  heading: {
    ...textStyles.textHeading3,
  },
  alignRight: {
    alignSelf: "flex-end",
  },
  inputContainer: {
    marginTop: regular,
    marginBottom: regular,
  },
  inputText: {
    backgroundColor: colors.charcoal.light,
    height: 40,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#bbb",
    color: "#fff",
    paddingHorizontal: regular,
    marginBottom: regular,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: large,
  },
  checkboxText: {
    ...textStyles.textRegular,
    fontSize: 14,
  },
  signinButton: {
    backgroundColor: colors.orangeYello.regular,
    height: 40,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  linkContainer: {
    marginTop: 8,
  },
  linkText: {
    textAlign: "center",
  },
});

const inputTextStyle = StyleSheet.compose(
  textStyles.textRegular,
  styles.inputText as any
);

export default SignupView;
