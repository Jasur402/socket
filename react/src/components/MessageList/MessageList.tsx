import "./MessageList.css";
import Message from "./Message";
import Data from "./Date";

type Props = {
  messages?: string[];
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
        <Message text={message} />
      ))}
    </div>
  );
}

export default MessageList;
