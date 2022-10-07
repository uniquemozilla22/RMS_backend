import { InferSchemaType, model, Schema } from "mongoose";

const NotificationList = new Schema({
  notification_type: {
    type: "string",
    required: true,
  },
  message: {
    type: "string",
    required: true,
  },
  time: {
    type: "string",
    required: true,
  },
  seenStatus: {
    type: "boolean",
    required: true,
  },
});

export type INotificationList = InferSchemaType<typeof NotificationList>;

const Notification = new Schema({
  lists: [NotificationList],
});
const NotificationSchema = model("notifications", Notification);

export default NotificationSchema;
