import { logInput, logSchema } from "@/schema/schema";
import { Log } from "@/types/model";
import { iMessageToLog, LogToImsg } from "@/util/GiftedTOModelMapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTheme } from "@shopify/restyle";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { SafeAreaView } from "react-native-safe-area-context";
import RenderActions from "../GiftedChatComp/RenderActions";
import RenderBubble from "../GiftedChatComp/renderBubble";
import RenderComposer from "../GiftedChatComp/RenderComposer";
import RenderInputToolBar from "../GiftedChatComp/RenderInputToolBar";
import RenderSend from "../GiftedChatComp/RenderSend";
export default function LogScreen() {
  const [log, setLog] = useState<Log[]>([]);
  const t = useTheme();
  const [err, setErr] = useState<string | null>(null);
  // const insets = useSafeAreaInsets();

  //zod
  const { reset } = useForm<logInput>({
    resolver: zodResolver(logSchema),
  });

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

  const onSend = (newMsgs: IMessage[] = []) => {
    const validated = logSchema.safeParse({ msg: newMsgs[0].text });
    if (!validated.success) {
      setErr(validated.error.issues[0]?.message ?? "Inavalid Log");
      reset();
      console.warn(validated.error.issues);
      return;
    }
    setErr(null);
    const newLog = newMsgs.map(iMessageToLog);
    setLog((prev) => [...newLog, ...prev]);
  };
  // const onSubmit = useCallback(
  //   (data: logInput) => {
  //     const newMsg: IMessage = {
  //       _id: Date.now().toString(),
  //       text: data.msg,
  //       createdAt: new Date(),
  //       user: { _id: "1", name: "You" },
  //     };
  //     const newLog = iMessageToLog(newMsg);
  //     setLog((l) => [newLog, ...l]);
  //     reset();
  //   },
  //   [reset]
  // );

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
      <GiftedChat //using (props) => <Render /> for  avoiding GiftedChat sometimes invokes it like a plain function instead of a React component.
        messages={msges} 
        renderBubble={(props) => <RenderBubble {...props} />} //Controls message bubble appearance
        renderInputToolbar={(props) => <RenderInputToolBar {...props} />} //The whole bottom input area.
        renderComposer={(props) => <RenderComposer {...props} />} //The text input itself.
        renderSend={(props) => <RenderSend {...props} />} //Customize send button
        renderActions={(props) => <RenderActions {...props} />}
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
});
