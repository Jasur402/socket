type Props = {
  date: string;
  className?: string;
};

function Data(props: Props) {
  return <div className={props.className}>{props.date}</div>;
}

export default Data;
  