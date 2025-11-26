import "./Message.css";
import type { MessageData } from "../../types/message";

type Props = {
  message: MessageData;
};

function Message(props: Props) {
  const { message } = props;
  const messageClass = message.isOwn
    ? "message message-own"
    : "message message-other";

  return (
    <div className={messageClass}>
      {!message.isOwn && (
        <span className="message-sender">{message.sender}</span>
      )}
      <p className="message-text">{message.text}</p>
      <span className="message-time">
        {message.timestamp.toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </span>
    </div>
  );
}

export default Message;
