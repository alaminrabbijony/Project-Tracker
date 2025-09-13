import { Log } from "@/types/model";
import { IMessage } from "react-native-gifted-chat";


// Mapper: Log -> IMessage
export function LogToImsg (log: Log): IMessage {
    return {
        _id: log.id,
        text: log.msg,
        createdAt: log.createdAt,
        user: {_id: log.processId, name: `User ${log.processId}`}
    }
}

export function iMessageToLog (msg: IMessage) : Log {
    return {
        id: String(msg._id),
        processId: String(msg.user._id),
        createdAt: new Date(msg.createdAt),
        msg: msg.text

    }
}