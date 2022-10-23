import { FC } from 'react';

interface IInputProps {
  type: 'text' | 'password' | 'email' | 'number' | 'date';
  placeholder: string;
  label?: string;
  className?: string;
  defaultValue?: string;
  spellCheck?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IInputProps> = ({
  type,
  placeholder,
  className,
  label,
  defaultValue,
  spellCheck = false,
  onChange,
}): JSX.Element => (
  <label htmlFor={label} className={`block overflow-hidden`}>
    <span className="text-xs font-medium text-white">{label}</span>

    <input
      id={label}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      spellCheck={spellCheck}
      className={`w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm ${className}`}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event)}
    />
  </label>
);

export default Input;
