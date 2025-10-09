import "./LoginForm.css";
import useSocket from "../hooks/useSocket";
import { useState } from "react";
import Button from "../shared-components/Button";
import TextField from "../shared-components/TextFieled";

type Props = {
  className?: string;
  onClick?: () => void;
};

function MessageList(props: Props) {
  const socket = useSocket();
  const state = useState("");
  const userName = state[0];
  const setUserName = state[1];

  function onSubmit(evt: React.FormEvent<HTMLElement>) {
    evt.preventDefault();
    setUserName("");
    if (socket) {
      socket.emit("login", userName);
    }
  }
  return (
    <form className={props.className} onSubmit={onSubmit}>
      <div className="login-title">Войдите в чат под своим именем</div>
      <TextField
        className="login-input"
        placeholder="Введите ваше имя"
        value={userName}
        onChange={setUserName}
        variant="input"
      />
      <Button onClick={props.onClick} className="login-button" label="Войти" type="submit" />
    </form>
  );
}

export default MessageList;
