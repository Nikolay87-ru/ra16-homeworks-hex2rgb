import type { FC, ChangeEvent } from 'react';

interface HexInputProps {
  value: string;
  onChange: (value: string) => void;
  rgb: string;
}

const HexInput: FC<HexInputProps> = ({ value, onChange, rgb }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="d-flex flex-column gap-2" style={{ width: '300px' }}>
      <input
        className={`form-control ${rgb === 'Ошибка!' ? 'is-invalid' : ''}`}
        type="text"
        placeholder="#RRGGBB"
        maxLength={7}
        onChange={handleChange}
        value={value}
      />
      <div className="bg-dark bg-opacity-50 text-white fw-bold text-center p-2 rounded">
        {rgb}
      </div>
    </div>
  );
};

export default HexInput;
