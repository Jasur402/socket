type Props = {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: VoidFunction;
  className?: string;
  disabled?: boolean;
};

function Button(props: Props) {
  const label = props.label;
  const type = props.type ?? "button";
  const onClick = props.onClick;

  return (
    <button
      className={props.className}
      type={type}
      onClick={onClick}
      disabled={props.disabled}
    >
      {label}
    </button>
  );
}

export default Button;
