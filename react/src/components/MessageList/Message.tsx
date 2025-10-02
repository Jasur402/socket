type Props = {
  text: string;
  user: string;
}

function Message(props: Props) {
  return <div className="message">
    <p className="user"> {props.user} </p>
    <p className="message-text">{props.text}</p>
  </div>;
}

export default Message;
