import LoginForm from "../components/LoginForm";
import "./Welcome.css"


type Props = {
  onClick?: () => void;
  setUserName?: (name: string) => void;
};

function Welcome(props: Props) {
  return (
      <LoginForm setUserName={props.setUserName} className="welcome-container" onClick={props.onClick} />
  );
}

export default Welcome;
