export type DBTask = {
    id: string;
    name: string;
    createdAt: string;
    finishedAt: string | null;
}
export type DBProcess = {
    id: string;
    taskId: string;
    name: string;
}

export type DBLog = {
    id: string;
    processId: string;
    msg: string;
    img: {uri: string, caption?: string} | null;
    audio: string | null;
    // more needed
}
