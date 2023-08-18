import CheckboxBlankOutlineIcon from 'mdi-react/CheckboxBlankOutlineIcon';
import CheckboxOutlineIcon from 'mdi-react/CheckboxOutlineIcon';

interface IInputCheckboxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

function InputCheckbox({
  checked,
  label,
  name,
  onChange,
}: IInputCheckboxProps) {
  return (
    <span
      className="cursor-pointer inline-flex items-center"
      onClick={() => onChange(!checked)}
    >
      {checked ? <CheckboxOutlineIcon /> : <CheckboxBlankOutlineIcon />}
      <span className="ml-1">{label}</span>
    </span>
  );
}

export default InputCheckbox;
