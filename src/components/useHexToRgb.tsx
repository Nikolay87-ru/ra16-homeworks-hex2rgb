import { useState } from 'react';

const useHexToRgb = () => {
  const [state, setState] = useState({
    input: '',
    rgb: 'rgb(255, 255, 255)', 
  });

  const hexToRGB = (hex: string) => {
    if (!hex) return 'rgb(255, 255, 255)';
    if (!/^#[0-9A-Fa-f]{6}$/i.test(hex)) return 'rgb(255, 255, 255)';
    
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    return `rgb(${r}, ${g}, ${b})`;
  };

  const updateInput = (value: string) => {
    setState({
      input: value,
      rgb: hexToRGB(value),
    });
  };

  return { ...state, updateInput };
};

export default useHexToRgb;