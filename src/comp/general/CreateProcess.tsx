import { useTheme } from "@shopify/restyle";
import React, { ComponentProps } from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { TxtBody } from "./RestyleComp";

type CreateProcessProps = {
  children: string;
  style?: StyleProp<ViewStyle>;
} & ComponentProps<typeof Pressable>;

export default function CreateProcessBtn({
  children,
  style,
  ...pressableProps
}: CreateProcessProps) {
  const t = useTheme();
  return (
    <Pressable
      {...pressableProps}
      style={({ pressed }) =>
        pressed
          ? [
              styles.btn,
              {
                backgroundColor: t.colors.pressedCpBg,
                opacity: 0.9,
                borderColor: t.colors.psBorder,
                borderTopWidth: 1,
                borderBottomWidth: 1,
              },
              style,
            ]
          : [
              styles.btn,
              {
                backgroundColor: t.colors.createProcessBtnBg,
                borderColor: t.colors.psBorder,
                borderTopWidth: 1,
                borderBottomWidth: 1,
              },
              style,
            ]
      }
    >
      <TxtBody style={styles.txt}>{children}</TxtBody>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 12,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
