export type DBTask = {
    id: string;
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
    // more needed
}
