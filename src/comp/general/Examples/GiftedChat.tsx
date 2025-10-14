import React, { JSX, useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Composer,
  Send,
  Actions,
  MessageImage,
  Day,
  IMessage,
} from "react-native-gifted-chat";
import { Ionicons } from "@expo/vector-icons"; // or react-native-vector-icons
import * as ImagePicker from "expo-image-picker"; // optional for attachments

// Example Log -> IMessage mapper from earlier
type Log = { id: string; processId: string; msg: string; createdAt: Date };
function LogToImsg(l: Log): IMessage {
  return {
    _id: l.id,
    text: l.msg,
    createdAt: l.createdAt,
    user: { _id: l.processId, name: `User ${l.processId}` },
  };
}
function iMessageToLog(m: IMessage): Log {
  return {
    id: String(m._id),
    processId: String(m.user._id),
    msg: m.text ?? "",
    createdAt: m.createdAt as Date,
  };
}

export default function LogScreen(): JSX.Element {
  const [logs, setLogs] = useState<Log[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Convert domain logs -> gift messages (newest first)
  const messages = useMemo(
    () => logs.map(LogToImsg).sort((a, b) => +b.createdAt - +a.createdAt),
    [logs]
  );

  useEffect(() => {
    setLogs([
      {
        id: "1",
        processId: "2",
        msg: "Welcome — this is a styled GiftedChat",
        createdAt: new Date(),
      },
    ]);
  }, []);

  // onSend from GiftedChat (IMessage[] -> Log[] then store)
  const onSend = useCallback((newMsgs: IMessage[] = []) => {
    const newLogs = newMsgs.map(iMessageToLog);
    setLogs((prev) => [...newLogs, ...prev]); // keep newest first in state
    // simulate typing / delivered states if you want
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 700);
  }, []);

  /* ---------------- Custom renderers ---------------- */

  const renderBubble = useCallback((props: any) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: styles.bubbleRight,
          left: styles.bubbleLeft,
        }}
        textStyle={{
          right: styles.bubbleRightText,
          left: styles.bubbleLeftText,
        }}
      />
    );
  }, []);

  const renderInputToolbar = useCallback((props: any) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={styles.inputToolbar}
        primaryStyle={{ alignItems: "center" }}
      />
    );
  }, []);

  const renderComposer = useCallback((props: any) => {
    return (
      <Composer
        {...props}
        textInputStyle={styles.composer}
        placeholder="Type a message..."
      />
    );
  }, []);

  const renderSend = useCallback((props: any) => {
    return (
      <Send {...props} containerStyle={styles.sendContainer}>
        <View style={styles.sendButton}>
          <Ionicons name="send" size={20} color="#fff" />
        </View>
      </Send>
    );
  }, []);

  // Attachment button (requires expo-image-picker or similar)
  const handlePickImage = useCallback(async (callback: any) => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });
    if (!res.cancelled) {
      const msg: IMessage = {
        _id: Date.now().toString(),
        createdAt: new Date(),
        user: { _id: "1", name: "You" },
        image: res.uri,
      };
      callback([msg]);
    }
  }, []);

  const renderActions = useCallback(
    (props: any) => {
      return (
        <Actions
          {...props}
          options={{
            ["Pick Image"]: (propsArg) => handlePickImage(propsArg.onSend),
            Cancel: () => {},
          }}
          icon={() => <Ionicons name="attach-outline" size={24} color="#555" />}
          containerStyle={{ marginLeft: 6, marginBottom: 6 }}
        />
      );
    },
    [handlePickImage]
  );

  const renderMessageImage = useCallback(
    (props: any) => <MessageImage {...props} imageStyle={styles.messageImage} />,
    []
  );

  const scrollToBottomComponent = useCallback(
    () => (
      <View style={styles.scrollToBottom}>
        <Ionicons name="chevron-down" size={28} color="#666" />
      </View>
    ),
    []
  );

  const renderFooter = useCallback(() => {
    if (!isTyping) return null;
    return <Text style={styles.footerText}>User is typing…</Text>;
  }, [isTyping]);

  return (
    <SafeAreaView style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{ _id: "1", name: "You" }}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        renderComposer={renderComposer}
        renderSend={renderSend}
        renderActions={renderActions}
        renderMessageImage={renderMessageImage}
        renderDay={(p) => <Day {...p} textStyle={{ color: "#888" }} />}
        renderTime={(p) => (
          <Text style={{ fontSize: 10, color: "#666" }}>
            {new Date(p.currentMessage?.createdAt).toLocaleTimeString()}
          </Text>
        )}
        renderFooter={renderFooter}
        isTyping={isTyping}
        showUserAvatar
        alwaysShowSend
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        listViewProps={{
          keyboardShouldPersistTaps: "handled",
          contentContainerStyle: { paddingBottom: 8 },
        }}
        minComposerHeight={40}
        maxComposerHeight={150}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f3f3f3" },
  bubbleRight: { backgroundColor: "#0b93f6", padding: 8, borderRadius: 12 },
  bubbleLeft: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 12,
    borderColor: "#eee",
    borderWidth: 1,
  },
  bubbleRightText: { color: "#fff" },
  bubbleLeftText: { color: "#000" },
  inputToolbar: {
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    backgroundColor: "#fff",
    padding: 4,
  },
  composer: {
    color: "#333",
    backgroundColor: "#fff",
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#eee",
  },
  sendContainer: { justifyContent: "center", marginRight: 8 },
  sendButton: { backgroundColor: "#0b93f6", padding: 10, borderRadius: 20 },
  messageImage: { width: 200, height: 140, borderRadius: 8 },
  footerText: { color: "#666", fontSize: 12, textAlign: "center", padding: 6 },
  scrollToBottom: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
    elevation: 2,
  },
});
