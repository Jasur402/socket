import Message from "./Message";
import Data from "./Date";

function MessageList() {
  const date: string = new Date().toLocaleString("ru-RU", {
    timeZone: "Europe/Berlin",
    hour: "2-digit",
    minute: "2-digit",    
  });

  const user: string = "Jasur";
  
  return (
    <div className="message-list">
      <Data className="date" date={date}/>
      <Message user={`${user} :`} text="Hi" />
    </div>
  );
}

export default MessageList;
