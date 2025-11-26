import "./MessageForm.css";
import useSocket from "../hooks/useSocket";
import { useContext, useState } from "react";
import Button from "../shared-components/Button";
import TextField from "../shared-components/TextFieled";
import { UserNameContext } from "../context/UserNameContext";

type Props = {
  className?: string;
};

function MessageForm(props: Props) {
  const socket = useSocket();

  const state = useState("");
  const message = state[0];
  const setMessage = state[1];

  const username = useContext(UserNameContext);

  function onSubmit(evt?: React.FormEvent<HTMLElement>) {
    if (evt) evt.preventDefault();

    if (message.trim() && socket && username) {
      const messageData = {
        sender: username,
        text: message.trim(),
        timestamp: new Date().toISOString(),
      };

      socket.emit("chat", messageData);
      setMessage("");
    }
  }

  const keydown = (
    e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <form className={props.className} onSubmit={onSubmit}>
      <TextField
        placeholder="enter your message..."
        className="message-input"
        value={message}
        onChange={setMessage}
        variant="textarea"
        onKeyDown={keydown}
      />
      <Button
        disabled={message.trim().length === 0}
        className="message-submit"
        label="Send"
        type="submit"
      />
    </form>
  );
}

export default MessageForm;
