import "./MessageList.css";
import Message from "./Message";
import Data from "./Date";
import type { MessageData } from "../../types/message";

type Props = {
  messages?: MessageData[];
  className?: string;
};

function MessageList(props: Props) {
  const date: string = new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Berlin",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={props.className}>
      <Data className="date" date={date} />
      {props.messages?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}

export default MessageList;
