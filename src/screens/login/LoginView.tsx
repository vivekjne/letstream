import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import LinkButton from "../../components/shared/buttons/LinkButton";
import { colors } from "../../theme/colors";
import textStyles from "../../theme/common/textStyles";
import { large, regular, tiny } from "../../theme/metrics";
import { Link } from "@react-navigation/native";
import ActionButton from "../../components/shared/buttons/ActionButton";

const LoginView = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sign-In</Text>
      <LinkButton
        title="Forgot password?"
        containerStyle={styles.alignRight}
        onPress={() => alert("clicked")}
        type="small"
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email address"
          keyboardType="email-address"
          placeholderTextColor="#999"
          style={inputTextStyle}
        />
        <TextInput
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={!showPassword}
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
        title="Sign-In"
        style={styles.signinButton}
        android_ripple={{
          color: colors.orangeYello.light,
        }}
      />

      <View style={styles.agreementContainer}>
        <Text style={[textStyles.textRegular, { fontSize: 14 }]}>
          By continuing, you agree to Letstream's{" "}
        </Text>
        <LinkButton title="Conditions of Use" onPress={() => console.log()} />
        <Text style={[textStyles.textRegular, { fontSize: 14 }]}>
          {` and `}
        </Text>
        <LinkButton onPress={() => alert("privacy")} title="Privacy Notice" />
      </View>
      <View style={styles.flexRow}>
        <View style={styles.separatorLine}></View>
        <Text style={styles.separatorText}>New to Letstream</Text>
        <View style={styles.separatorLine}></View>
      </View>

      <ActionButton
        onPress={() => alert("clicked")}
        title=" Create a new Letstream account"
        style={newAccountButton}
        android_ripple={{
          color: colors.charcoal.dark,
        }}
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
    marginBottom: regular,
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
    borderColor: colors.charcoal.regular,
    color: "#fff",
    paddingHorizontal: regular,
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
  agreementContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: regular,
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: regular,
  },
  separatorLine: {
    flex: 1,
    backgroundColor: colors.charcoal.light,
    height: 1,
  },
  separatorText: {
    color: colors.charcoal.light,
    fontSize: 12,
    paddingHorizontal: tiny,
  },
  newAccount: {
    backgroundColor: colors.charcoal.light,
  },
});

const inputTextStyle = StyleSheet.compose(
  textStyles.textRegular,
  styles.inputText as any
);

const newAccountButton = StyleSheet.compose(
  styles.signinButton,
  styles.newAccount
);

export default LoginView;
