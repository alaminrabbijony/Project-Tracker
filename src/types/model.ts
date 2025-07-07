export type Task = {
  id: string;
  createdAt: Date;
  finishedAt: Date | null ;
};

export type Process = {
    id: string;
    taskId: string;
    name: string;
}

export type Log = {
    id: string;
    processId: string;
    // more needed
}

// Nested Structures

export type TaskWithProgress = {
    processes: Process[];
}

export type ProcessWithLog = {
    logs: Log[]
}
