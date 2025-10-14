Task (Project)
│
├── id: string
├── name: string
├── createdAt: Date
├── finishedAt: Date | null
│
└── processes: Process[]
│
├── id: string
├── taskId: string
├── name: string
│
└── logs: Log[] ← Chat messages
│
├── id: string
├── processId: string
├── msg?: string
├── img?: { uri: string, caption?: string }
├── audio?: string
└── createdAt: Date
↓
↓
Gifted Chat (UI Layer)
├── \_id ← Log.id
├── user.\_id ← Process.id
├── user.name ← Process.name
├── text ← Log.msg or caption
├── image ← Log.img.uri
├── audio ← Log.audio
└── createdAt ← Log.createdAt
