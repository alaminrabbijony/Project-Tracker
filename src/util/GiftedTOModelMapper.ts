import { Log } from "@/types/model";
import { IMessage } from "react-native-gifted-chat";

// Mapper: Log -> IMessage
export function LogToImsg(log: Log): IMessage {
  return {
    _id: log.id,
    text: log.msg ?? "",
    createdAt: log.createdAt,
    user: {_id: log.processId, name: `USER-${log.processId}`}, //temporary
    //user: { _id: log.processId, name: process.name },// when zustand establish do this
    image: log.img?.uri,
    audio: log.audio,
  };
}

export function iMessageToLog(msg: IMessage): Log {
  return {
    id: String(msg._id),  //note: ideally generated server-side
    // processId,  change: pass processId explicitly instead of trusting msg.user._id
    processId: msg.user?._id ? String(msg.user._id) : "unknown",
    createdAt: new Date(msg.createdAt),
    msg: msg.text || undefined,
    img: msg.image ? {uri: msg.image, caption: msg.text || undefined} : undefined,
    //img: typeof msg.image === "object" ? msg.image.uri : msg.image,
    audio: msg.audio,
  };
}
