import { BottomTabBarHeightContext } from "@react-navigation/bottom-tabs";
import { useHeaderHeight } from "@react-navigation/elements";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet } from "react-native";
import Btn from "../Btn";
import CustomeTxtInput from "../CustomeTxtInput";
import { Container, TxtTitle } from "../RestyleComp";

type Props = {
  isVisible: boolean;
  control: any;
  handleSubmit: (data: any) => void;
};

export default function CreateNewProject({
  isVisible,
  control,
  handleSubmit,
}: Props) {
  const headerHeight = useHeaderHeight();
  const colors = useTheme(); 
  return (
    <BottomTabBarHeightContext.Consumer>
      {(tabBarHeight) =>
        isVisible && (
          <Container
            style={[
              styles.modalOverlay,
              {
                top: headerHeight,
                bottom: tabBarHeight ?? 0,
              },
            ]}
          >
            <Container style={[styles.modalContent,{backgroundColor: colors.modalBgColor}]}>
              <TxtTitle
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                Project Name
              </TxtTitle>
              <CustomeTxtInput
                control={control}
                name="taskName"
                placeHolder="Enter Project Name"
              />
              <Btn onPress={handleSubmit}>Create</Btn>
            </Container>
          </Container>
        )
      }
    </BottomTabBarHeightContext.Consumer>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    ...StyleSheet.absoluteFillObject,
    top: 0,
    bottom: 0,
    zIndex: 1000,
    //backgroundColor: Color.bg100,
  },
  modalContent: {
    height: "100%",
    padding: 20,
   // backgroundColor: Color.bg200,
   // justifyContent: "center",
    borderWidth: 5,
  },
});
