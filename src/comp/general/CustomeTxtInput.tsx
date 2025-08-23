import { useTheme } from "@shopify/restyle";
import React, { ComponentProps } from "react";
import { useController } from "react-hook-form";
import { StyleProp, StyleSheet, TextInput, ViewStyle } from "react-native";
import { Container, TxtBody } from "./RestyleComp";

type CustomeTxtInputProps = {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  name: string;
  control?: any;
  placeHolder: string;
} & ComponentProps<typeof TextInput>;

export default function CustomeTxtInput({
  label,
  name,
  control,
  containerStyle,
  ...textInputProps
}: CustomeTxtInputProps) {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: `${label} is required` },
  });
  const t = useTheme();
  return (
   <Container style={containerStyle}>
      {label && <TxtBody>{label}</TxtBody>}

      <TextInput
        {...textInputProps}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        style={[
          styles.input,
          {
            backgroundColor: t.colors.inputBg,
            borderColor: t.colors.inputBorder,
            color: t.colors.inputColor,
          },
          textInputProps.style,
        ]}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    color: "white",
    borderRadius: 16,
    height: 54,
  },
});
