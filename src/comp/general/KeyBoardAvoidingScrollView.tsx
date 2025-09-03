import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Box, ScrollView } from "./RestyleComp";

type props = {
  children: React.ReactNode;
  footer?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export default function KeyBoardAvoidingScrollView({
  children,
  footer,
  style,
}: props) {
  return (
    <KeyboardAvoidingView
      style={[styles.container, style]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={110}
    >
      <SafeAreaView style={[styles.container, style]}>
        <ScrollView
          style={[styles.scrollViewContainer]}
          contentContainerStyle={[styles.scrollViewContent]}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
        {footer && <Box style={[styles.footer]}>{footer}</Box>}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 6,
    justifyContent: "flex-end",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderTopWidth: 1,

    padding: 6,
  },
});
