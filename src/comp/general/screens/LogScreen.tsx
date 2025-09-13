import { Log } from "@/types/model";
import { iMessageToLog, LogToImsg } from "@/util/GiftedTOModelMapper";
import { useTheme } from "@shopify/restyle";
import React, { useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import {
  Bubble,
  Composer,
  GiftedChat,
  IMessage,
  InputToolbar,
  Send,
} from "react-native-gifted-chat";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { IconBtn } from "../RestyleComp";
export default function LogScreen() {
  const [log, setLog] = useState<Log[]>([]);
  const t = useTheme();
  const insets = useSafeAreaInsets();

  const msges: IMessage[] = log.map(LogToImsg);

  //Prebuild data

  // useEffect(() => {
  //   setLog([a
  //     {
  //       id: "1",
  //       processId: "asdasdasd",
  //       msg: "This is a prebuild MSG",
  //       createdAt: new Date(),
  //     },
  //   ]);
  // }, []);

  const onSend = useCallback((newMsgs: IMessage[] = []) => {
    const newLog = newMsgs.map(iMessageToLog);
    setLog((l) => [...newLog, ...l]);
  }, []);

  const renderBubble = useCallback(
    (props: any) => (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: t.colors.logPrimary, // dark background (black here)
            borderRadius: 10, // rounded edges
            borderWidth: 2, // border thickness
            borderColor: t.colors.logsSecondary, // white border
            padding: 8, // spacing inside
            marginBottom: 8, // spacing between bubbles
            // don’t let it stretch across screen
          },
          left: {},
        }}
        textStyle={{
          right: {
            color: t.colors.logsSecondary, // white text
            fontWeight: "600",
          },
          left: {
            color: "#DDDDDD", // softer gray for received messages
          },
        }}
      />
    ),
    [t.colors.logPrimary, t.colors.logsSecondary]
  );
  const renderInputToolBar = useCallback(
    (props: any) => (
      <InputToolbar
        {...props}
        containerStyle={{
          borderRadius: 16,
        }}
        primaryStyle={{
          alignItems: "center",
          borderRadius: 16,
          borderWidth: 1,
          borderColor: t.colors.logsSecondary,
          backgroundColor: t.colors.inputBg,
        }}
      />
    ),
    [t.colors.logsSecondary, t.colors.inputBg]
  );
  const renderComposer = useCallback(
    (props: any) => (
      <Composer
        textInputStyle={{
          color: t.colors.inputColor,
        }}
        {...props}
      />
    ),
    [t.colors.inputColor]
  );
  const renderSend = useCallback(
    (props: any) => (
      <Send {...props} containerStyle={styles.sendContainer}>
        <IconBtn
          name="post-add"
          size={24}
          color={t.colors.iconBtn}
          padding="s"
          borderRadius="m"
        />
      </Send>
    ),
    [t.colors.iconBtn]
  );
  return (
    <SafeAreaView
      style={[
        styles.root,
        {
          backgroundColor: t.colors.chatScreenBg,
          opacity: 0.9,
        },
      ]}
      edges={["top", "bottom"]}
    >
      <GiftedChat
        messages={msges}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolBar}
        renderComposer={renderComposer}
        renderSend={renderSend}
        onSend={onSend}
        user={{ _id: "1", name: "You" }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  sendContainer: { justifyContent: "center", marginRight: 8 },
});
