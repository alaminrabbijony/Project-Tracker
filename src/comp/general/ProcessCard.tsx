import { useTheme } from "@shopify/restyle";
import { StyleSheet, View } from "react-native";
import { Container, TxtBody } from "./RestyleComp";

export default function ProcessCard() {
  const t = useTheme();
  return (
    <Container
      style={[
        styles.outerCard,
        {
          backgroundColor: t.colors.pscBg,
        },
      ]}
    >
      {/* Left side border */}
      <View style={[styles.sideBorder, {
         borderColor: t.colors.pscSideBorder,
          backgroundColor: t.colors.pscSideBorderBg,
      }]} />

      {/* Inner Card */}
      <Container
        style={[
          styles.innerCard,
          {
            borderColor: t.colors.pscBorder,
            backgroundColor: t.colors.pscBorderBg,
          },
        ]}
      >
        <TxtBody
          style={[
            styles.title,
            {
              color: t.colors.pscTxt,
            },
          ]}
        >
          Process Title:
        </TxtBody>
        <TxtBody
          style={[
            styles.text,
            {
              color: t.colors.pscTxtSub,
            },
          ]}
        >
          Date: 26-08-25
        </TxtBody>
        <TxtBody
          style={[
            styles.text,
            {
              color: t.colors.pscTxtSub,
            },
          ]}
        >
          Last Log: This is total gibirish............
        </TxtBody>
      </Container>
    </Container>
  );
}

const styles = StyleSheet.create({
  outerCard: {
    flexDirection: "row",
    margin: 8,
    padding: 12,
    borderRadius: 8,

    elevation: 4, // for Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  sideBorder: {
    width: 4,
    borderWidth: 1,
   
    borderRadius: 1,
    // blue side border
    marginRight: 10,
  },
  innerCard: {
    flex: 1,
    borderWidth: 1,

    borderRadius: 6,
    padding: 10,
    // inner card bg
  },
  title: {
    fontWeight: "bold",

    marginBottom: 6,
  },
  text: {
    marginBottom: 4,
  },
});
