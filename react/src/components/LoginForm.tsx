import "./LoginForm.css";
import { useState } from "react";
import Button from "../shared-components/Button";
import TextField from "../shared-components/TextFieled";

type Props = {
  className?: string;
  onSubmit?: () => void;
  onClick?: () => void;
  setUserName: (name:string) => void;
};

function LoginForm(props: Props) {
  const [userName, setUserName  ] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    props.setUserName(userName); 
    setUserName("");
    props.onClick?.(); 
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
      <Button className="login-button" label="Войти" type="submit" />
    </form>
  );
}

export default LoginForm;
