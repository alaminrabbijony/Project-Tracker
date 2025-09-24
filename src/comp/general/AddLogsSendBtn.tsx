import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { useTheme } from "@shopify/restyle";
import React, { ComponentProps } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import { useController } from "react-hook-form";
import { Box } from "./RestyleComp";

type LogsSendBtnProps = {
  containerStyle?: StyleProp<ViewStyle>;
  name: string;
  control?: any;
  placeHolder?: string;
} & ComponentProps<typeof TextInput>;

export default function LogsSendBtn({
  name,
  control,
  placeHolder,
  containerStyle,
  ...textInputProps
}: LogsSendBtnProps) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: `${placeHolder} is required` },
  });
  const theme = useTheme();
  return (
    <Box
      style={[styles.root, {}]}
      flexDirection="row"
      alignItems="center"
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      backgroundColor="background"
      padding="s"
    >
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.colors.inputBg,
            color: theme.colors.text,
          },
        ]}
        placeholder="Type a log"
        placeholderTextColor={theme.colors.inputColor}
        {...textInputProps}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
      />
      <TouchableOpacity
        style={{
          backgroundColor: theme.colors.logsOuter,
          opacity: 0.7,
          padding: 10,
          borderRadius: 30,
          borderColor: theme.colors.logsInner,
          borderWidth: 1,
        }}
      >
        <FontAwesome5
          name="clipboard-list"
          size={24}
          color={theme.colors.logsInner}
        />
      </TouchableOpacity>
    </Box>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 40,
    marginHorizontal: 10,
    borderRadius: 25,
    justifyContent: "center",
    borderColor: "#B0DB9C",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 8,
  },
});
