import "./MessageForm.css";
import useSocket from "../hooks/useSocket";
import { useEffect, useState } from "react";
import Button from "../shared-components/Button";
import TextField from "../shared-components/TextFieled";

type Props = {
  className?: string;
};

function MessageForm(props: Props) {
  const socket = useSocket();
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    if (socket) {
      socket.on("login", (name: string) => {
        setUserName(name);
      });
    }
    return () => {
      if (socket) {
        socket.off("login");
      }
    };
  }, [socket]);

  const state = useState("");
  const message = state[0];
  const setMessage = state[1];

  function onSubmit(evt?: React.FormEvent<HTMLElement>) {
    if (evt) evt.preventDefault();
    setMessage("");
    if (socket) {
      socket.emit("chat", `${userName}: ${message}`);
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
        placeholder="Введите сообщение..."
        className="message-input"
        value={message}
        onChange={setMessage}
        variant="textarea"
        onKeyDown={keydown}
      />
      <Button
        disabled={message.trim().length === 0}
        className="message-submit"
        label="Отправить"
        type="submit"
      />
    </form>
  );
}

export default MessageForm;
