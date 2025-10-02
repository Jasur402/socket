type Props = {
  value: string;
  variant?: "input" | "textarea";
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

function TextField(props: Props) {
  const variant = props.variant ?? "input";
  const value = props.value;
  
  function onChange(evt:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>){
   props.onChange(evt.target.value) 
  }

  if (variant === "textarea") {
    return <textarea className={props.className} placeholder={props.placeholder} value={value} onChange={onChange} />;
  } else {
    return <input  type="text" className={props.className} placeholder={props.placeholder} value={value} onChange={onChange}/>;
  }
}

export default TextField;
