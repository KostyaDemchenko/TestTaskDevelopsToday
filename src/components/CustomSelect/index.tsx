import Select from 'react-select';

export interface Option {
  value: string;
  label: string;
}

export interface CustomReactSelectProps {
  label: string;
  value: Option | null;
  options: Option[];
  onChange: (option: Option | null) => void;
  placeholder?: string;
}

export default function CustomReactSelect({
  label,
  value,
  options,
  onChange,
  placeholder = 'Select an option',
}: CustomReactSelectProps) {
  return (
    <div className="mb-6">
      <label className="block text-lg font-medium mb-2">{label}</label>
      <Select
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
}
