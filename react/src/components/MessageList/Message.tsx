import "./Message.css";
type Props = {
  text: string;
};

function Message(props: Props) {
  return (
    <div className="message">
      <p className="message-text">{props.text}</p>
    </div>
  );
}

export default Message;
