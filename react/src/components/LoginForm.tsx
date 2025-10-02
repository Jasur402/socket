import { useState } from "react";
import Button from "../shared-components/Button";
import TextField from "../shared-components/TextFieled";



function MessageList() { 
  const state = useState("");
  const userName = state[0];
  const setUserName = state[1]

  function  onSubmit(evt: React.FormEvent<HTMLElement>) {
     evt.preventDefault()
    alert('Форма отправлена:' + userName )
  }

  return <form className="welcome-container" onSubmit={onSubmit}>
      <div className="login-title">Войдите в чат под своим именем</div>
      <TextField className="login-input" placeholder="Введите ваше имя" value={userName} onChange={setUserName} variant="input" />
      <Button className="login-button" label="Войти"  type="submit"/>
    </form>
  
}

export default MessageList;
