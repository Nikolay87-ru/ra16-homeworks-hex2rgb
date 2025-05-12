import { useState } from 'react';

const useHexToRgb = () => {
  const [state, setState] = useState({
    input: '#',
    rgb: '',
  });

  const hexToRGB = (hex: string) => {
    if (!/^[0-9A-Fa-f]{6}$/.test(hex)) return '';
    
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5), 16);
    
    return `rgb(${r}, ${g}, ${b})`;
  };

  const updateInput = (value: string) => {
    setState({
      input: value,
      rgb: value.length === 7 ? hexToRGB(value) : '',
    });
  };

  return { ...state, updateInput };
};

export default useHexToRgb;