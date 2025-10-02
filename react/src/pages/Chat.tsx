import MessageList from "../components/MessageList/MessageList";
import MessageForm from "../components/MessageForm";

function Chat() {
  return (
    <div className="chat">
      <MessageList />
      <MessageForm />
    </div>
  );
}

export default Chat;
