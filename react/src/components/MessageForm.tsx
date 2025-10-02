import { useState } from "react";
import Button from "../shared-components/Button";
import TextField from "../shared-components/TextFieled";

function MessageForm() {
    const state = useState("");
    const message = state[0];
    const setMessage= state[1]

      function onSubmit(evt: React.FormEvent<HTMLElement>) {
     evt.preventDefault()
    alert('Сообщение отправлено:' + message )
  }

  
  return (
    <form className="message-form" onSubmit={onSubmit}>
      <TextField placeholder="Введите сообщение..." className="message-input" value={message} onChange={setMessage} variant="textarea" />
      <Button className="message-submit" label="Отправить" type="submit"/>
    </form>
  );
}

export default MessageForm;
