type Props = {
  value: string;
  variant?: "input" | "textarea";
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  onKeyDown?: (evt: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
};

function TextField(props: Props) {
  const variant = props.variant ?? "input";

  function onChange(
    evt: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    props.onChange(evt.target.value);
  }

  if (variant === "textarea") {
    return (
      <textarea
        className={props.className}
        placeholder={props.placeholder}
        value={props.value}
        onChange={onChange}
        onKeyDown={props.onKeyDown}
      />
    );
  } else {
    return (
      <input
        type="text"
        className={props.className}
        placeholder={props.placeholder}
        value={props.value}
        onChange={onChange}
      />
    );
  }
}

export default TextField;
