import React, { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function ChatScreen() {
  const scrollRef = useRef<ScrollView>(null);
  const insets = useSafeAreaInsets();

  const [messages, setMessages] = useState([
    { id: 1, text: "Hello, how’s it going?", type: "in" },
    {
      id: 2,
      text: "All good! Working on the process logs now ✅",
      type: "out",
    },
  ]);
  const [input, setInput] = useState("");

  // Auto scroll to bottom when messages change
  useEffect(() => {
    scrollRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  // Also scroll when keyboard hides
  useEffect(() => {
    const hideSub = Keyboard.addListener("keyboardDidHide", () => {
      scrollRef.current?.scrollToEnd({ animated: true });
    });
    return () => hideSub.remove();
  }, []);

  const sendMsg = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, type: "out" }]);
    setInput("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // adjust if you have header
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Process Name</Text>
          <Text style={styles.headerSubtitle}>Date: 30/08/2025</Text>
        </View>

        {/* Messages */}
        <ScrollView
          ref={scrollRef}
          style={styles.messagesContainer}
          contentContainerStyle={styles.messagesContent}
          keyboardShouldPersistTaps="handled"
        >
          {messages.map((m) => (
            <View
              key={m.id}
              style={[
                styles.messageBubble,
                m.type === "in"
                  ? styles.messageIncoming
                  : styles.messageOutgoing,
              ]}
            >
              <Text>{m.text}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Footer */}
        <View
          style={[
            styles.footer,
            {
              paddingBottom: Platform.OS === "ios" ? insets.bottom : 8, // ✅ fixed extra space
            },
          ]}
        >
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type a message"
            style={styles.input}
          />
          <TouchableOpacity style={styles.sendBtn} onPress={sendMsg}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ece5dd", // WhatsApp-style background
  },
  container: {
    flex: 1,
  },
  header: {
    padding: 12,
    backgroundColor: "#075e54", // WhatsApp green
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "white",
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    flexGrow: 1,
    padding: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
    maxWidth: "80%",
  },
  messageIncoming: { alignSelf: "flex-start", backgroundColor: "white" },
  messageOutgoing: { alignSelf: "flex-end", backgroundColor: "#dcf8c6" },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === "ios" ? 10 : 6,
    marginRight: 8,
  },
  sendBtn: {
    backgroundColor: "#075e54",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  sendText: { color: "white", fontWeight: "bold" },
});
