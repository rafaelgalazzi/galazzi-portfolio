interface InputProps {
  label: string;
  value: string;
  type: 'number' | 'text';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function BaseInput(props: InputProps) {
  return (
    <>
      <label>{props.label}</label>
      <input type={props.type} value={props.value} onChange={(event) => props.onChange(event)} />
    </>
  );
}
