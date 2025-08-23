import React, { ComponentProps } from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { Container, TxtBody } from "./RestyleComp";

type BtnProps = {
  children: string;
  style?: StyleProp<ViewStyle>;
} & ComponentProps<typeof Pressable>;

export default function Btn({ children, style, ...pressableProps }: BtnProps) {
  return (
    <Container>
      <Pressable
        {...pressableProps}
        style={({ pressed }) =>
          pressed ? [styles.pressed, styles.root, style] : [styles.root, style]
        }
      >
        <TxtBody style={styles.txt}>{children}</TxtBody>
      </Pressable>
    </Container>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "hsla(12, 87.60%, 44.10%, 0.74)",
    padding: 12,
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.9,
  },
  txt: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
