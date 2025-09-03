import { Box, Container, TxtBody } from "@/comp/general/RestyleComp";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "@shopify/restyle";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomeTxtInput from "@/comp/general/CustomeTxtInput";
import { DBLog } from "@/types/db";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { logSchema } from "../../schema/schema";

type formData = {
  msg: string;
};

export default function ProcessScreen() {
  const t = useTheme();

  //chat
  const scrollRef = useRef<ScrollView>(null);
  const insets = useSafeAreaInsets();

  const [msg, setMsg] = useState<DBLog[]>([]);
  // const [input, setInput] = useState("");

  // Auto scroll to bottom when messages change

  useEffect(() => {
    scrollRef.current?.scrollToEnd({ animated: true });
  }, [msg]);

  // Also scroll when keyboard hides
  useEffect(() => {
    const hideSub = Keyboard.addListener("keyboardDidHide", () => {
      scrollRef.current?.scrollToEnd({ animated: true });
    });
    return () => hideSub.remove();
  }, []);

  //input controller
  const { control, handleSubmit, reset } = useForm<formData>({
    resolver: zodResolver(logSchema),
    defaultValues: {
      msg: "",
    },
  });

  const sendMsg = (data: formData) => {
    if (!data.msg.trim()) {
      return;
    }
    setMsg((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        msg: data.msg,
        processId: Date.now().toString(),
      },
    ]);
    reset();
  };

  return (
    <Box style={{ flex: 1 }}>
      <Container style={[styles.titleContainer, {}]}>
        <TxtBody
          style={[
            styles.titleTxt,
            {
              color: t.colors.title,
            },
          ]}
        >
          Process Name
        </TxtBody>
        <TxtBody
          style={[
            {
              color: t.colors.plain,
            },
          ]}
        >
          Date: 30/08/2025
        </TxtBody>

        <TxtBody
          style={[
            styles.logsTitle,
            {
              color: t.colors.title,
              borderBottomColor: t.colors.psBorder,
              borderBottomWidth: 1,
            },
          ]}
        >
          Logs
        </TxtBody>
      </Container>

      {/* Logs */}
      {/* <KeyBoardAvoidingScrollView
      style={[
            styles.logsContainer,
            {
              backgroundColor: t.colors.logsBg,
              opacity: 0.9,
            },
          ]}
        footer={<LogsSendBtn name="logsBtn" control={control} />}
      >
      <Box marginBottom="l">
          <ProcessCard />
          
       
      </Box>
          
      </KeyBoardAvoidingScrollView> */}

      <SafeAreaView
        style={[
          styles.safeArea,
          {
            //  backgroundColor: t.colors.logsBg
            backgroundColor: t.colors.chatScreenBg,
            opacity: 0.9,
          },
        ]}
      >
        <KeyboardAwareScrollView
          style={[
            styles.keyoardAvoiding,
            { 
              backgroundColor: t.colors.logsBg
            }
          ]}
        >
          <ScrollView
            style={[{ flex: 1 }]}
            contentContainerStyle={[styles.msgContent]}
            keyboardShouldPersistTaps="handled"
          >
            {/* Logs screen */}

            {msg.map((m) => (
              <Box key={m.id} style={[styles.messageBubble]}>
                <TxtBody>{m.msg}</TxtBody>
              </Box>
            ))}
          </ScrollView>

          {/* footer */}
          <Box
            style={[
              styles.footer,
              {
                //backgroundColor: t.colors.background,
                backgroundColor: t.colors.chatFooterBg,
                borderColor: t.colors.chatFooterBorder,
                paddingBottom: Platform.OS === "ios" ? insets.bottom : 8, // ✅ fixed extra space
              },
            ]}
          >
            <CustomeTxtInput
              name="msg"
              style={[
                styles.input,
                {
                  backgroundColor: t.colors.chatInput,
                  color: "white",
                },
              ]}
              control={control}
              placeHolder="Post a log..."
              multiline
              placeholderTextColor={t.colors.plain}
            />
            <TouchableOpacity
              style={[
                styles.sendBtn,
                {
                  backgroundColor: t.colors.logsOuter,
                },
              ]}
              onPress={handleSubmit(sendMsg)}
            >
              <FontAwesome5
                name="clipboard-list"
                size={24}
                color={t.colors.logsInner}
              />
            </TouchableOpacity>
          </Box>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </Box>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 2,
  },
  titleTxt: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  logBtnContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },

  logBtn: {
    width: "100%", // full width of parent
    borderRadius: 0, // optional: removes rounded corners if your button adds them
  },

  logsTitle: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 12,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    paddingBottom: 8,
  },

  // new
  safeArea: {
    flex: 8,
    //backgroundColor: "#ece5dd",
    //backgroundColor: "#3F4F44",
  },
  keyoardAvoiding: {
    flex: 1,
  },
  msgContent: {
    flexGrow: 1,
    padding: 10,
  },
footer: {
  flexDirection: "row",
  alignItems: "flex-end", // ✅ fixes alignment
  borderWidth: 1,
  paddingHorizontal: 8,
  paddingVertical: 6, // smaller, avoids overflow
},
input: {
  flex: 1,
  minHeight: 40,
  maxHeight: 100,  // grows as multiline
  borderRadius: 20,
  paddingHorizontal: 12,
  paddingVertical: Platform.OS === "ios" ? 10 : 6,
  marginRight: 8,
},
  sendBtn: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  messageIncoming: { alignSelf: "flex-start", backgroundColor: "white" },
  messageOutgoing: { alignSelf: "flex-end", backgroundColor: "#dcf8c6" },
  messageBubble: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
    maxWidth: "80%",
  },
});
