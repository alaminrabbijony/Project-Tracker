import { Log } from "@/types/model";
import { IMessage } from "react-native-gifted-chat";

// Mapper: Log -> IMessage
export function LogToImsg(log: Log): IMessage {
  return {
    _id: log.id,
    text: log.msg ?? "",
    createdAt: log.createdAt,
    user: { _id: log.processId, name: `User ${log.processId}` },
    image: log.img,
    audio: log.audio,
  };
}

export function iMessageToLog(msg: IMessage): Log {
  return {
    id: String(msg._id),
     processId: msg.user?._id ? String(msg.user._id) : "unknown",
    createdAt: new Date(msg.createdAt),
    msg: msg.text || undefined,  
    img: msg.image,
    audio: msg.audio,
  };
}
