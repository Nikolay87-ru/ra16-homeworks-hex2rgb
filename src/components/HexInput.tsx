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
    <div className='form-container'>
      <input
        className='hex-input'
        type='text'
        placeholder='#RRGGBB'
        maxLength={7}
        onChange={handleChange}
        value={value}
      />
      <div className='rgb-display'>{rgb}</div>
    </div>
  );
};

export default HexInput;
