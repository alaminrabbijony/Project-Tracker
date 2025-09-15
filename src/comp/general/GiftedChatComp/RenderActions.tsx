import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Actions } from "react-native-gifted-chat";
import {
  Box,
  FontAwesomeIconBtn,
  IoniconsIconBtn,
  TxtBody,
} from "../RestyleComp";

export default function RenderActions(props: any) {
  const t = useTheme();
  const [visible, setVisible] = useState<boolean>(false);
  const toggleMenu = () => setVisible(!visible);

  return (
    <>
      <Actions
        {...props}
        containerStyle={styles.actionBtn}
        icon={() => (
          <FontAwesomeIconBtn name="plus" color={t.colors.iconBtnColor} />
        )}
        onPressActionButton={toggleMenu}
      />
      {visible && (
        <Box>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => console.log("📷 Take Photo")}
          >
            <IoniconsIconBtn
              name="camera"
              size={22}
              color={t.colors.iconBtnColor}
            />
            <TxtBody style={styles.menuText}>Camera</TxtBody>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => console.log("🖼 Pick Image")}
          >
            <IoniconsIconBtn
              name="image"
              size={22}
              color={t.colors.iconBtnColor}
            />
            <TxtBody style={styles.menuText}>Gallery</TxtBody>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => console.log("📍 Location")}
          >
            <FontAwesomeIconBtn
              name="microphone"
              size={22}
              color={t.colors.iconBtnColor}
            />
            <TxtBody style={styles.menuText}>Microphone</TxtBody>
          </TouchableOpacity>
        </Box>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  actionBtn: {
    marginLeft: 8,
    marginBottom: 4,
  },
  menu: {
    position: "absolute",
    bottom: 60, // sits above input bar
    left: 16,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  menuText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
});
