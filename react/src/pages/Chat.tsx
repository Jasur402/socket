import MessageList from "../components/MessageList/MessageList";
import MessageForm from "../components/MessageForm";
import "./Chat.css";
import type { MessageData } from "../types/message";

type Props = {
  messages?: MessageData[];
  className?: string;
};

function Chat(props: Props) {
  return (
    <div className={props.className}>
      <MessageList className="message-list" messages={props.messages} />
      <MessageForm className="message-form" />
    </div>
  );
}

export default Chat;
