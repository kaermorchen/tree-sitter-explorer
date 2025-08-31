import CheckboxBlankOutlineIcon from 'mdi-react/CheckboxBlankOutlineIcon';
import CheckboxOutlineIcon from 'mdi-react/CheckboxOutlineIcon';

interface InputCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

function InputCheckbox({ checked, label, onChange }: InputCheckboxProps) {
  return (
    <span
      className="cursor-pointer inline-flex items-center mr-4"
      onClick={() => onChange(!checked)}
      role="checkbox"
      aria-checked={checked}
    >
      {checked ? (
        <CheckboxOutlineIcon size={16} />
      ) : (
        <CheckboxBlankOutlineIcon size={16} />
      )}
      <span className="ml-1">{label}</span>
    </span>
  );
}

export default InputCheckbox;
