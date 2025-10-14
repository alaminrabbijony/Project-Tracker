export interface IMessage {
  _id: string | number; // unique per message
  text: string; // message text
  createdAt: Date | number;
  user: {
    _id: string | number; // sender ID
    name?: string;
    avatar?: string;
  };
  image?: string; // image URI
  video?: string; // video URI
  audio?: string; // audio URI (custom field)
  system?: boolean; // system message
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
  quickReplies?: {
    type: "radio" | "checkbox";
    values: { title: string; value: string; image?: string }[];
  };
  // You can attach any custom props (GiftedChat is flexible)
}
