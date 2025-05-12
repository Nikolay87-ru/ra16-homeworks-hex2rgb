import React from 'react';

interface HexInputProps {
  value: string;
  onChange: (value: string) => void;
  rgb: string;
}

const HexInput: React.FC<HexInputProps> = ({ value, onChange, rgb }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value.trim());
  };

  return (
    <div className="form">
      <div className="control">
        <input
          className="input-hex"
          type="text"
          placeholder="Введите hex"
          maxLength={7}
          onChange={handleChange}
          value={value}
        />
      </div>
      <p className="rgb-color">{rgb}</p>
    </div>
  );
};

export default HexInput;