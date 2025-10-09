import LoginForm from "../components/LoginForm";
import "./Welcome.css"
type Props = {
  onClick?: () => void;
};

function Welcome(props: Props) {
  return <LoginForm className="welcome-container" onClick={props.onClick} />;
}

export default Welcome;
